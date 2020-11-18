import React from 'react'
import { Link } from 'react-router-dom'
import Shelf from './Shelf'
import * as BooksAPI from './BooksAPI'

class Search extends React.Component {
  
  state = {
    query: '',
    books: []
  }
  
updateQuery = (query) => {
    this.setState(() => ({
      query: query
    }))
    if(query !== '') {
      BooksAPI.search(query).then((books) => {
        if (!books.error) {
             books = books.map((book) => {
              const bookOnShelf = this.props.books.find(({ id }) => book.id === id);
              return {
                ...book,
                shelf: bookOnShelf?.shelf ?? 'none',
              }

             })
              this.setState(() => ({
                  books: books
              }))
        }
      })
    }
    else {
            this.setState(() => ({
                books: []   
            }))
        }
  }
  clearQuery = () => {
    this.updateQuery('')
  }
  
  render() {
    const { query, books } = this.state
    const { onUpdateBook } = this.props
    return(
       <div className="search-books">
        <div className="search-books-bar">
          <Link to='/' className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input 
            className="search-books"
            type="text" 
            placeholder="Search by title or author"
            value={query}
            onChange={(event) => this.updateQuery(event.target.value)}
            />

          </div>
        </div>
        
        <div className="search-books-results">
          <ol className="books-grid">
            
            
            <Shelf books={books} title='Search' name='search' onUpdateBook={onUpdateBook}/>

          </ol>
        </div>
      </div>
      
      )
  }
}
export default Search