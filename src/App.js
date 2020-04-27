import React from 'react'
import { Route } from 'react-router-dom'

import './App.css'
import BookShelf from './BookShelf'
import Search from './Search'
import BookDetail from './BookDetail'



class BooksApp extends React.Component {
  
  

  render() {
    return (
      <div className="app">
        <Route exact path='/search' component={Search} />
        <Route exact path ='/' component={BookShelf}/>
        <Route exact path ='/book/:id' component={BookDetail} />

      </div>
    )
  }
}

export default BooksApp
