import React, { Component } from 'react';
import './books.css'

import isNull from 'lodash/isNull'
import cloneDeep from 'lodash/cloneDeep'

// https://formik.org/
// test

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
            bookShelf: [
                // { name: "Car hacker's handbook", author: "Smith Craig", page: 65, totalPages: 306 },
                // { name: "Ascent of Money", author: "Niall Ferguson", page: 297, totalPages: 447 },
                // { name: "Functional-Light JavaScript", author: "Kyle Simpson", page: 288, totalPages: 370 },
            ],
            newBook: emptyBook
        }


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        fetch("/bookShelf")
            .then(res => res.json())
            .then(bookShelf => {
                console.log("bookShelf", bookShelf)
                this.setState({
                    ...this.state,
                    bookShelf
                })
            })
    }

    handleChange(event) {
        // console.log('Event is: ' + JSON.stringify(keys(event)));
        // console.log('Event.target is: ' + JSON.stringify(keys(event.target)));
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
        const { name,
            author,
            page,
            totalPages } = this.state.newBook

        // console.log(this.state.newBook)
        const cond = [name,
            author,
            page,
            totalPages].some(isNull)

        if (cond) {
            event.preventDefault();
            return
        }

        this.setState({
            bookShelf: this.state.bookShelf.concat([cloneDeep(this.state.newBook)]),
            newBook: emptyBook
        });
        // console.log('A book has been added: ' + JSON.stringify(this.state.newBook));
        console.log('State is: ' + JSON.stringify(this.state));

        // prevents default action
        event.preventDefault();
        // clear the form
        document.addBookForm.reset();

    }

    // https://reactjs.org/docs/forms.html
    render() {
        // console.log('bookshelf: ', this.state.bookShelf)
        const bookShelf = this.state.bookShelf.map(({ name, author, page, totalPages }, i) => {
            return (<li key={i}> {name || ''} {author || ''} {page || ''} {totalPages || ''} </li>)
        })


        return (<div className="BookShelf">
            <h1>Books I'm currently reading and cannot finish</h1>
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