import React, { Component } from 'react'
import PropTypes from 'prop-types'
// import escapeRegExp from 'escape-string-regexp'
// import sortBy from 'sort-by'
// import { Link } from 'react-router-dom'
import BookShelfChanger from './BookShelfChanger'

class BookShelf extends Component {
    static propTypes = {
        title: PropTypes.string.isRequired,
        books: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func.isRequired
    }

    componentWillReceiveProps(nextProps) {
        console.log(`Receiving props here: ${nextProps}`);
        if (nextProps.books !== this.props.books) {
            // this.props.books = nextProps.books;
        }
    }

    render() {
        const {
            title,
            books
        } = this.props;
        return (
            <div className="bookshelf">
                <h2 className="bookshelf-title">{title}</h2>
                  <div className="bookshelf-books">
                    <ol className="books-grid">
                        {books.map((book) => (
                            <li key={book.id} className='book'>
                                <div className="book-top">
                                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                                    <BookShelfChanger
                                        shelf={book.shelf}
                                        onUpdateBook={(shelf) => {
                                            if (book.shelf !== shelf) {
                                                this.props.onUpdateBook(book, shelf);
                                            }
                                        }}
                                    />
                                </div>
                                <div className="book-title">{book.title}</div>
                                <div className="book-authors">{book.author}</div>
                            </li>
                        ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default BookShelf;