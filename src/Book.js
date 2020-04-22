import React from 'react'
import PropTypes from 'prop-types'
import * as BooksAPI from './BooksAPI'

class Book extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired
  }
  state = {
    shelf: ''
  }
  

    
  handleChange = (b) => {
    b.preventDefault()
      console.log(this.props.book.shelf)

    this.setState({shelf:b.target.value})  
    BooksAPI.update(this.props.book, this.state.shelf)
    .then((book) => {

    })
    

  }
  render() {
    const { book } = this.props
    return(
       <div className="book">
        <div className="book-top">
          <div className="book-cover" style={{width: 128, height: 193, backgroundImage: `url("${book.imageLinks.thumbnail}")` }}></div>
          <div className="book-shelf-changer">
            <select onChange={this.handleChange} >
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        </div>
        <div className="book-title">{book.title}</div>
        <div className="book-authors">{book.authors}</div>
      </div>
      
      )
  }
}
export default Book