import React, { Component } from 'react';
import PropTypes from 'prop-types'

class BookShelfChanger extends Component {
    static propTypes = {
        shelf: PropTypes.string.isRequired,
        onUpdateBook: PropTypes.func.isRequired
    }

    handleChange = (e) => {
        e.preventDefault();
        console.log(`Changing to ${e.target.value}`);
        this.props.onUpdateBook(e.target.value);
    }

    render() {
        const {
            shelf
        } = this.props;
        return (
            <div className="book-shelf-changer">
                <select value={shelf} onChange={this.handleChange}>
                    <option value="none" disabled>Move to...</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="read">Read</option>
                    <option value="none">None</option>
                </select>
            </div>
        )
    }
}

export default BookShelfChanger;