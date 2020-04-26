import React from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'
import ShelfChanger from './ShelfChanger'

class Book extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired
  }

  render() {


    const { book, onUpdateBook } = this.props
    const values = ['move', 'currentlyReading', 'wantToRead', 'read', 'none']
    console.log(book)
    return(
       <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url("${book.imageLinks ? book.imageLinks.thumbnail : "#"}")` }}></div>
          <ShelfChanger book={book} onUpdateBook={onUpdateBook} />
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
      
      )
  }
}
export default Book