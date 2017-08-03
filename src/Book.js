import React, { Component } from 'react'
import BookShelfChanger from './BookShelfChanger'
import PropTypes from 'prop-types'

class Book extends Component {
    static propTypes = {
        book: PropTypes.object.isRequired,
        shelf: PropTypes.string.isRequired,
        onUpdateBook: PropTypes.func.isRequired
    }

    render() {
        const {
            book,
            shelf,
            onUpdateBook
        } = this.props;
        let title = book.title ? book.title : "Untitled";
        let authors = book.authors ? book.authors : "Anonymous";
        let image = book.imageLinks ? book.imageLinks.thumbnail : 
            'https://books.google.com/googlebooks/images/no_cover_thumb.gif';
        return (
            <li className='book'>
                <div className="book-top">
                    <div className="book-cover" 
                        style={{ width: 128, height: 193, backgroundImage: `url(${image})` }}>
                    </div>
                    <BookShelfChanger
                        shelf={shelf}
                        onUpdateBook={(newShelf) => {
                            if (shelf !== newShelf) {
                                onUpdateBook(book, newShelf);
                            }
                        }}
                    />
                </div>
                <div className="book-title">{title}</div>
                <div className="book-authors">{authors}</div>
            </li>
        )
    }
}

export default Book;