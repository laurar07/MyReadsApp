import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './Book'

class BookShelf extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func.isRequired
    }

    render() {
        const {
            title,
            books,
            onUpdateBook
        } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                  <div className="bookshelf-books">
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
            </div>
        )
    }
}

export default BookShelf;