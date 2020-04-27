import React from 'react'
import PropTypes from 'prop-types'

class ShelfChanger extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onUpdateBook: PropTypes.func.isRequired

  }
  render() {
    const {book, onUpdateBook } = this.props
    return(
  
          <div className="book-shelf-changer">
            <select onChange={(event) => {onUpdateBook(book, event.target.value)}} defaultValue= {book.shelf ? book.shelf: 'none'}>
              <option value="move" disabled>Move to...</option>
              <option value="currentlyReading">Currently Reading</option>
              <option value="wantToRead">Want to Read</option>
              <option value="read">Read</option>
              <option value="none">None</option>
            </select>
          </div>
        
      
      )
  }
}
export default ShelfChanger