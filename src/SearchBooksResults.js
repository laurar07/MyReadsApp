import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class SearchBooksResult extends Component {
    static propTypes = {
        query: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func.isRequired
    }

    render() {
        const {
            query,
            books,
            onUpdateBook
        } = this.props;

        return (
            <div className="search-books-results">
                {books.length === 0 && query.length > 0 && 
                    <div>
                        <h4>
                            Your search yielded no results. Please try with a different search term.
                        </h4>
                        <img src={"https://cdn-webimages.wimages.net/051341229549b0564336f4fe8487f6c9255a41-wm.jpg?v=3"} alt="" />
                    </div>
                }
                {books.length === 0 && query.length === 0 && 
                    <div>
                        <h4>
                            Please use the search bar at the top to look for books to add to your collection.
                        </h4>
                        <img src={"https://cdn-webimages.wimages.net/051341229549b0564336f4fe8487f6c9255a41-wm.jpg?v=3"} alt="" />
                    </div>
                }
                <ol className="books-grid">
                    {books.map((book) => (
                        <Book
                            key={book.id}
                            book={book}
                            shelf={book.shelf}
                            onUpdateBook={onUpdateBook}
                        />
                    ))}
                </ol>
            </div>
        )
    }
}

export default SearchBooksResult;