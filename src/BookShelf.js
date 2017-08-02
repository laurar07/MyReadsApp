import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'
// import { Link } from 'react-router-dom'
import Book from './Book'

class BookShelf extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func.isRequired
    }

    componentWillReceiveProps(nextProps) {
        console.log(`Receiving props here: ${nextProps.books.length}`);
        if (nextProps.books !== this.props.books) {
            // this.props.books = nextProps.books;
        }
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