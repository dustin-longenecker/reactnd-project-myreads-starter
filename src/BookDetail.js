import React from 'react'
import { Link } from 'react-router-dom'

import * as BooksAPI from './BooksAPI'


class BookDetail extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    book:''
    
 }
 componentDidMount() {
    BooksAPI.get(this.props.match.params.id).then((book) =>{
      console.log(book);
      this.setState({
        book: book
      })
      })
      
  }


  render() {
    const { book } = this.state
    return (
       <div className="book-detail">
       <Link to='/'><button className="close-search" >Close</button></Link>
        <div className="book-detail-title">
          <h1>{book.title}</h1>
        </div>
        <div className="book-detail-cover" 
          style={{width: 128, height: 193, backgroundImage: `url("${book.imageLinks ? book.imageLinks.thumbnail : "#"}")` }}>
        </div>
        <div className="book-detail-content">
          <div className="book-detail-authors">
            <ul>
              { book.authors ? 
                  book.authors.map((author) => (
                    <li key={author}>{author}</li>

                  ))
                : <li>No Authors</li>
              }
            </ul>
          </div>
          <div className="book-detail-publisher">
            {book.publisher}
          </div>
          <div className="book-detail-page-count">
            {book.pageCount}
          </div>


          <div className="book-detail-description">
            {book.description}
          </div>
          <div className="book-detail-preview-link">
            <Link to={`${book.previewLink}`}>Preview</Link>
          </div>
          <div className="book-detail-info-link">
            <Link to={`${book.infoLink}`}>Information</Link>
          </div>


        </div>
        
      </div>
    )
  }
}

export default BookDetail