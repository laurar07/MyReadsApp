import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'
import PropTypes from 'prop-types'

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        onUpdateBook: PropTypes.func.isRequired
    }

    render() {
        const {
            book,
            onUpdateBook
        } = this.props;
        if (this.props.shelf !== undefined) {
            console.log(`The shelf is: ${this.props.shelf}`);
        }
        return (
            <li className='book'>
                <div className="book-top">
                    <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.thumbnail})` }}></div>
                    <BookShelfChanger
                        shelf={book.shelf}
                        onUpdateBook={(shelf) => {
                            if (book.shelf !== shelf) {
                                onUpdateBook(book, shelf);
                            }
                        }}
                    />
                </div>
                <div className="book-title">{book.title}</div>
                <div className="book-authors">{book.author}</div>
            </li>
        )
    }
}

export default Book;