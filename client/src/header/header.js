import React, { Component } from 'react';
import './header.css';

class Header extends Component {
    constructor() {
        super();
        this.state = { btn_name: 'Login' };
        this.changeState1 = this.changeState.bind(this); // must register all functions here
    };

    changeState() {
        let btn_name = (this.state.btn_name === 'Login') ? 'Logout' : 'Login';
        this.setState({ btn_name });
    };

    render() {
        return (
            <header class="site-header">

            </header>
        );
    };
}

export default Header