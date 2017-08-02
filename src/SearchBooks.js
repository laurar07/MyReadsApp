import React, { Component } from 'react'
import SearchBooksResults from './SearchBooksResults'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class SearchBooks extends Component {
    static propTypes = {
        searchResults: PropTypes.array.isRequired,
        onUpdateBook: PropTypes.func.isRequired,
        onSearchBooks: PropTypes.func.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
            query : ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({
            query: event.target.value
        });
    }

    handleSubmit(event) {
        event.preventDefault();
        if (this.props.onSearchBooks) {
            this.props.onSearchBooks(this.state.query);
        }
    }

    render() {
        const {
            query
        } = this.state;
        const {
            searchResults,
            onUpdateBook
        } = this.props;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search"to="/">Close</Link>
                    <form onSubmit={this.handleSubmit} className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" value={query} onChange={this.handleChange} />
                    </form>
                </div>
                <SearchBooksResults 
                    books={searchResults}
                    onUpdateBook={onUpdateBook}
                />
          </div>
        )
    }
}

export default SearchBooks;