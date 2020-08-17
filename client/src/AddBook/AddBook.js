import React, { Component } from 'react';
import './AddBook.css'

import isNull from 'lodash/isNull'
import cloneDeep from 'lodash/cloneDeep'
import values from 'lodash/values'
import isFunction from 'lodash/isFunction'

const emptyBook = {
    name: null,
    author: null,
    page: null,
    totalPages: null
}

class AddBook extends Component {

    // https://www.w3schools.com/react/react_lifecycle.asp
    constructor(props) {
        super(props);
        this.state = {
            newBook: emptyBook
        }


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target
        this.setState({
            newBook: {
                ...this.state.newBook,
                [name]: value
            }
        });
        console.log('addbook state: ', JSON.stringify(this.state))
    }

    handleSubmit(event) {
        console.log('this.props.addBookToShelf: ', JSON.stringify(this.props))
        event.preventDefault();

        // check if newBook is empty
        if (values(this.state.newBook).some(isNull)) { return; }

        const fn = this.props.addBookToShelf
        if (!fn || !isFunction(fn)) { return; }

        // lifting state up
        console.log('AddBook calls fn with', JSON.stringify(this.state.newBook))
        fn(this.state.newBook)
        this.setState({
            newBook: emptyBook
        });

        // clear the form
        document.addBookForm.reset();
    }

    // https://reactjs.org/docs/forms.html
    render() {
        return (
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
            </form>
        )
    }
}
export default AddBook;