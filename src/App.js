import React from 'react'
import { Route, Link } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './BookShelf'
import Search from './Search'


class BooksApp extends React.Component {
  
  

  render() {
    return (
      <div className="app">
        <Route exact path='/search' component={Search} />
        <Route exact path ='/' component={BookShelf}/>
      </div>
    )
  }
}

export default BooksApp
