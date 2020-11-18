import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import './App.css'
import BookShelf from './BookShelf'
import Search from './Search'
import BookDetail from './BookDetail'
import * as BooksAPI from './BooksAPI'



class BooksApp extends React.Component {
  
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: []
    
 }
componentDidMount() {
    BooksAPI.getAll()
      .then( books => {
        console.log("books from BookApi", books)
        this.setState({
          books
        })
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
    const  { books } = this.state
    return (
      <div className="app">
      <BrowserRouter>
      
         <Route path='/' exact component= { () =>
            <BookShelf books = {books} onUpdateBook={this.onUpdateBook} />
          }/>
          <Route path='/search' exact component= { () =>
            <Search books = {books} onUpdateBook={this.onUpdateBook} />
          }/>
        <Route exact path ='/book/:id' component={BookDetail} />
      </BrowserRouter>

      </div>
    )
  }
}

export default BooksApp
