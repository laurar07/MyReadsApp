import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks'
import BookShelf from './BookShelf'
import { BrowserRouter, Route, withRouter } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    searchResults: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books });
    })
  }

  updateBook(book, shelf) {
    console.log(`The book is: ${book.id} and the shelf is: ${shelf}`);
    console.log(`My books length BEFORE: ${this.state.books.length}`);
    BooksAPI.update(book, shelf).then((data) => {
      book.shelf = shelf;
      this.setState((prevState) => ({
        books: prevState.books.filter((b) => b.id !== book.id).concat([book])
      }))
      console.log(`My books length AFTER: ${this.state.books.length}`);
    })
  }

  searchBooks(query) {
    BooksAPI.search(query, 20).then((searchResults) => {
      this.setState({ searchResults });
    })
  }

  render() {
    const AddBookButton = withRouter(({history}) => (
      <a onClick={() => {
        history.push('/search');
      }}>Add a book</a>
    ))
    return (
      <BrowserRouter>
      <div className="app">
        <Route exact path="/" render={() => (
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <BookShelf
                  title="Currently Reading"
                  books={this.state.books.filter((book) => book.shelf === "currentlyReading")}
                  onUpdateBook={(book, shelf) => {
                      this.updateBook(book, shelf);
                  }}
                />
                <BookShelf
                  title="Want to Read"
                  books={this.state.books.filter((book) => book.shelf === "wantToRead")}
                  onUpdateBook={(book, shelf) => {
                      this.updateBook(book, shelf);
                  }}
                />
                <BookShelf
                  title="Read"
                  books={this.state.books.filter((book) => book.shelf === "read")}
                  onUpdateBook={(book, shelf) => {
                      this.updateBook(book, shelf);
                  }}
                />
              </div>
            </div>
            <div className="open-search">
              <AddBookButton />
            </div>
          </div>
        )}/>
        <Route path="/search" render={({history}) => (
          <SearchBooks
            searchResults={this.state.searchResults}
            onUpdateBook={(book, shelf) => {
              this.updateBook(book, shelf);
            }}
            onSearchBooks={(query) => {
              this.searchBooks(query)
            }}
          />
        )}/>
      </div>
      </BrowserRouter>
    )
  }
}

export default BooksApp;
