import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class SearchBooksResult extends Component {
    static propTypes = {
        books: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func.isRequired
    }

    render() {
        const {
            books,
            onUpdateBook
        } = this.props;

        return (
            <div className="search-books-results">
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