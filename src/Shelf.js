import React from 'react'
import Book from './Book'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class Shelf extends React.Component {
  
  static propTypes = {
    books: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }


  render() {
  const { books } = this.props


    return(
        <div className="bookshelf">
          <h2 className="bookshelf-title">{this.props.title}</h2>
          <div className="bookshelf-books">
            <ol className="books-grid">
              

              { books.filter((book) => book.shelf === this.props.name).map((filteredBook) => ( 
                  <li>
                    <Book
                      book={filteredBook}
                    />                      
                  </li>
                )
              )}
              
            </ol>
          </div>
        </div>
      )
  }
}
export default Shelf