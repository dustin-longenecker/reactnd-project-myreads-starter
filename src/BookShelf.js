import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'
import PropTypes from 'prop-types'

const SHELVES = [
      {
        title: 'Currently Reading',
        id: 'currentlyReading'
      },
      {
        title: 'Want To Read',
        id: 'wantToRead'
      },
      {
        title: 'Read',
        id: 'read'
      }
    ];
const BookShelf = ({ books, onUpdateBook }) => (
  
    
      <div className="list-books">
        
        <div className="list-books-title">
          <h1>MyReads</h1>
        </div>
        <div className="list-books-content">
            {SHELVES.map(shelf => (
              <Shelf
                key={shelf.id}
                books={books.filter((book) => book.shelf === shelf.id)}
                title= {shelf.title}
                onUpdateBook={onUpdateBook}
              />
              ))}
        </div>
        <div className="open-search">
          <Link to='/search' className='search-book'><button>Add a Book</button></Link>
        </div>
      </div>
)
BookShelf.propTypes = {
    books: PropTypes.array.isRequired,
    onUpdateBook: PropTypes.func.isRequired

};

export default BookShelf