import React, { Component } from 'react';
import './books.css'

import isNull from 'lodash/isNull'
import cloneDeep from 'lodash/cloneDeep'
import values from 'lodash/values'

const emptyBook = {
    name: null,
    author: null,
    page: null,
    totalPages: null
}

class Books extends Component {

    constructor() {
        super();
        this.state = {
            bookShelf: [],
            newBook: emptyBook
        }


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // https://daveceddia.com/where-fetch-data-componentwillmount-vs-componentdidmount/
    componentDidMount() {
        fetch("/bookShelf")
            .then(res => res.json())
            .then(bookShelf => {
                this.setState({
                    ...this.state,
                    bookShelf
                })
            })
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            bookShelf: this.state.bookShelf,
            newBook: {
                ...this.state.newBook,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        // check if newBook is empty
        const cond = values(this.state.newBook).some(isNull)
        if (cond) {
            event.preventDefault();
            return;
        }

        this.setState({
            bookShelf: this.state.bookShelf.concat([this.state.newBook]),
            newBook: emptyBook
        });

        // prevents default action
        event.preventDefault();
        // clear the form
        document.addBookForm.reset();

    }

    // https://reactjs.org/docs/forms.html
    render() {
        const bookShelf = this.state.bookShelf.map(({ name, author, page, totalPages }, i) => {
            return (<li key={i}> {name || ''} {author || ''} {page || ''} {totalPages || ''} </li>)
        })


        return (<div className="BookShelf">
            <h1>Books I'm currently reading</h1>
            <ol>
                {bookShelf}
            </ol>
            <br></br>
            <form name="addBookForm" onSubmit={this.handleSubmit}>
                <label>
                    Name:
            <input type="text" name="name" onChange={this.handleChange} />
                </label>
                <br></br>
                <label>
                    Author:
            <input type="text" name="author" onChange={this.handleChange} />
                </label>
                <br></br>
                <label>
                    Page:
            <input type="text" name="page" onChange={this.handleChange} />
                </label>
                <br></br>
                <label>
                    Total Pages:
            <input type="text" name="totalPages" onChange={this.handleChange} />
                </label>
                <br></br>
                <input type="submit" value="Submit" />
                <pre>{JSON.stringify(this.state.bookShelf, null, 2)}</pre>
            </form>
        </div>
        )
    }
}
export default Books;