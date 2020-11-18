import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import ShelfChanger from './ShelfChanger'


const Book = ({ book, onUpdateBook }) => (
       <div className="book">
        <div className="book-top">
          <Link to={`/book/${book.id}`}>

            <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url("${book.imageLinks ? book.imageLinks.thumbnail : "#"}")` }}></div>
          </Link>
          
          <ShelfChanger book={book} onUpdateBook={onUpdateBook} />
        </div>

        <div className="book-title">{book.title}</div>
        <div className="book-authors">
          <ul>
            {book.authors ? book.authors.map((author) => (
              <li key={author}>{author}</li>
            ))
            : <li>No Authors</li>
            }
          </ul>
        </div>
      </div>
)

Book.propTypes = {
    book: PropTypes.object.isRequired,
    onUpdateBook: PropTypes.func.isRequired,
}
export default Book