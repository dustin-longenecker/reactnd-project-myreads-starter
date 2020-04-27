import React from 'react'
import PropTypes from 'prop-types'

class RateBook extends React.Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onUpdateBookRating: PropTypes.func.isRequired

  }
  
  render() {
    const {book, onUpdateBookRating } = this.props
    return(
  
          <div className="rate-book-changer">
            <select onChange={(event) => {onUpdateBookRating(book, event.target.value)}} defaultValue='none'>
              <option value="five">5</option>
              <option value="four">4</option>
              <option value="three">3</option>
              <option value="two">2</option>
              <option value="one">1</option>
              <option value="none">0</option>

            </select>
          </div>
        
      
      )
  }
}
export default RateBook