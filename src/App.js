import React from 'react'
import { Route } from 'react-router-dom'
import { Link } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import './App.css'
import Shelf from './Shelf'
import Search from './Search'


class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    books: [],
    selectedBook: ''
  }
  componentDidMount() {
    BooksAPI.getAll()
      .then((books) => {
        this.setState(() => ({
          books
        }))
      })
  }

  render() {
    const { books } = this.state
    return (
      <div className="app">
      <Route exact path='/search' render={() => (
        <Search
          books={this.state.books} 
        />
      )} />
      <Route exact path='/' render={({ history }) => (   
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <Shelf
                  books={this.state.books}
                  title='Currently Reading'
                  name='currentlyReading'
                />
                <Shelf
                  books={this.state.books}
                  title='Want To Read'
                  name='wantToRead'
                />
                <Shelf
                  books={this.state.books}
                  title='Read'
                  name='read'
                />
                
              </div>
            </div>
            <div className="open-search">
              <Link to='/search' className='search-book'><button>Add a Book</button></Link>
            </div>
          </div>
        )} />     
      </div>
    )
  }
}

export default BooksApp
