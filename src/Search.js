import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'
import * as BooksAPI from './BooksAPI'

class Search extends React.Component {
  
  state = {
    query: ''
  }
  
updateQuery = (query) => {
    this.setState(() => ({
      query: query
    }))
    if(query !== '') {
      BooksAPI.search(query).then((books) => {
        if (!books.error) {
          BooksAPI.getAll().then((bookShelf) => {
              books.map((book) => {
                  bookShelf.map((shelvedBook) => {
                      if (book.id === shelvedBook.id) {
                          book.shelf = shelvedBook.shelf
                      }
                      return shelvedBook;
                  })
                  return book;
              })
              this.setState(() => ({
                  books: books
              }))
          })
        }
      })
    }
    else {
            this.setState(() => ({
                books: []   
            }))
        }
  }
  clearQuery = () => {
    this.updateQuery('')
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
    const { query } = this.state
    const { books } = this.props
    return(
       <div className="search-books">
        <div className="search-books-bar">
          <Link to='/'><button className="close-search" >Close</button></Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input 
            className="search-books"
            type="text" 
            placeholder="Search by title or author"
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        
        <div className="search-books-results">
          <ol className="books-grid">
            
            
            <Shelf books={this.state.books ? this.state.books : this.state.books = []} title='Search' name='search' onUpdateBook={this.onUpdateBook}/>

          </ol>
        </div>
      </div>
      
      )
  }
}
export default Search