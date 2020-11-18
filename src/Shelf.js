import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'


const Shelf = ({ books, onUpdateBook, title }) => (
        <div className="bookshelf">
          <h2 className="bookshelf-title">{title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              {books.map((book) => (
                  <li key={book.id}>
                    <Book
                      book={book}
                      onUpdateBook={onUpdateBook}

                    />

                  </li>
                )
              )}
            </ol>
          </div>
        </div>
)
Shelf.propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    onUpdateBook: PropTypes.func.isRequired
  }
export default Shelf