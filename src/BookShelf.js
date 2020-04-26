import React from 'react'
import { Link } from 'react-router-dom'

import Shelf from './Shelf'
import * as BooksAPI from './BooksAPI'


class BookShelf extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    
 }

  componentDidMount() {
    BooksAPI.getAll()
      .then( books => {
        console.log("books from BookApi", books)
        this.setState({books:books})
      }); 
    console.log("Books", this.state.books); 
  }
   onUpdateBook = (book, shelf) => {
        BooksAPI.update(book, shelf);
        this.setState((currentState) => ({
            books: currentState.books.map((b) => {
                if (b.id === book.id) {
                    b.shelf = shelf;
                }
                return b
            })
        }))
    }

  render() {
    const { books } = this.state


    return (
       <div className="list-books">
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
          <div>
            <Shelf
              books={books.filter((book) => book.shelf === 'currentlyReading')}
              title='Currently Reading'
              onUpdateBook={this.onUpdateBook}
            />
            <Shelf
              books={books.filter((book) => book.shelf === 'wantToRead')}
              title='Want To Read'
              onUpdateBook={this.onUpdateBook}

            />
            <Shelf
              books={books.filter((book) => book.shelf === 'read')}
              title='Read'
              onUpdateBook={this.onUpdateBook}

            />  
               
          </div>

        </div>
        <div className="open-search">
          <Link to='/search' className='search-book'><button>Add a Book</button></Link>
        </div>
      </div>
    )
  }
}

export default BookShelf