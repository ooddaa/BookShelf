import React, { Component } from 'react';
import './oda.css';

class Oda extends Component {
    constructor() {
        super();
        this.state = { mood: 'happy' };
        this.myFun = this.myFun.bind(this);
        this.odaSays = this.odaSays.bind(this);
        this.makeOdaSad = this.makeOdaSad.bind(this);
        this.nextMood = this.nextMood.bind(this);
    }

    myFun() {
        console.log('myFun fired')
    }

    odaSays() {
        // oda announces his state of mind
        return `oda is ${this.state.mood}`;
    }

    makeOdaSad() {
        let mood = this.state.mood === 'sad' ? 'happy' : 'sad';
        this.setState({ mood })
    }

    nextMood() {
        return this.state.mood === 'sad' ? 'happy' : 'sad'
    }

    render() {
        return (<div className="Oda">
            {this.odaSays()}
            <div>
                <button onClick={this.makeOdaSad} height="30px"> make Oda {this.nextMood()} </button>
            </div>
        </div>)
    }
}



export default Oda;