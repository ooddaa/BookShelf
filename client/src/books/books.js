import React, { Component } from 'react';
import './books.css'
import AddBook from '../AddBook/AddBook';

import isNull from 'lodash/isNull';
import cloneDeep from 'lodash/cloneDeep';
import values from 'lodash/values';

const emptyBook = {
    name: null,
    author: null,
    page: null,
    totalPages: null
}

class Books extends Component {

    // https://www.w3schools.com/react/react_lifecycle.asp
    constructor() {
        super();
        this.state = {
            bookShelf: [],
            // newBook: emptyBook
        }


        // this.handleChange = this.handleChange.bind(this);
        // this.handleSubmit = this.handleSubmit.bind(this);
        this.addBookToShelf = this.addBookToShelf.bind(this);
    }

    // handleChange(event) {
    //     const { name, value } = event.target
    //     this.setState({
    //         newBook: {
    //             ...this.state.newBook,
    //             [name]: value
    //         }
    //     });
    // }

    addBookToShelf(newBook) {
        console.log('books addBookToShelf', newBook)
        this.setState({
            bookShelf: this.state.bookShelf.concat([newBook]),
        });

        // clear the form
        document.addBookForm.reset();
    }

    // https://daveceddia.com/where-fetch-data-componentwillmount-vs-componentdidmount/
    componentDidMount() {
        fetch("/bookShelf")
            .then(res => res.json())
            .then(bookShelf => {
                this.setState({ bookShelf })
            })
    }

    // https://reactjs.org/docs/forms.html
    render() {
        const bookShelf = this.state.bookShelf.map(({ name, author, page, totalPages }, i) => {
            return (<li key={i}> {name || ''} {author || ''} {page || ''} {totalPages || ''} </li>)
        })

        return (
            <div className="books-wrapper">
                <div className="bookshelf-wrapper">
                    <h1>Books I'm currently reading</h1>
                    <ol>
                        {bookShelf}
                    </ol>
                </div>
                <div className="add-book-wrapper">
                    <AddBook addBookToShelf={this.addBookToShelf} />
                </div>
            </div>

        )
    }
}
export default Books;