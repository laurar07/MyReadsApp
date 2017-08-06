import React, { Component } from 'react'
import SearchBooksResults from './SearchBooksResults'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import { debounce } from 'throttle-debounce';

class SearchBooks extends Component {
    static propTypes = {
        onUpdateBook: PropTypes.func.isRequired,
        currentBooks: PropTypes.array.isRequired
    }
    constructor(props) {
        super(props);
        this.state = {
            query: '',
            searchResults: []
        }
        this.runSearch = debounce(500, this.runSearch);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        event.preventDefault();
        this.runSearch(e.target.value);
    }

    handleSubmit(event) {
        event.preventDefault();
    }

    runSearch(searchTerm) {
        if (searchTerm && searchTerm.length > 0) {
            BooksAPI.search(searchTerm, 20).then((searchResults) => {
                let newResults = searchResults === undefined || searchResults.error || searchResults.length === 0 ? [] : 
                    searchResults.map((result) => {
                        result.shelf = "none";
                        for (let i in this.props.currentBooks) {
                            if (result.id === this.props.currentBooks[i].id) {
                                result.shelf = this.props.currentBooks[i].shelf;
                                break;
                            }
                        }
                        return result;
                    });
                this.setState({
                    query : searchTerm,
                    searchResults : newResults
                })
            })
        } else {
            this.setState({ 
                query: '',
                searchResults : []
            })
        }
    }

    render() {
        const {
            query,
            searchResults
        } = this.state;
        const {
            onUpdateBook
        } = this.props;

        return (
            <div className="search-books">
                <div className="search-books-bar">
                    <Link className="close-search"to="/">Close</Link>
                    <form onSubmit={this.handleSubmit} className="search-books-input-wrapper">
                        <input type="text" placeholder="Search by title or author" onChange={this.handleChange} />
                    </form>
                </div>
                <SearchBooksResults
                    query={query} 
                    books={searchResults}
                    onUpdateBook={onUpdateBook}
                />
          </div>
        )
    }
}

export default SearchBooks;