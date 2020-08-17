import React from 'react';
import './clock.css';

class Clock extends React.Component {
    // we want a self-updating clock
    // https://reactjs.org/docs/state-and-lifecycle.html
    constructor(props) {
        super(props);
        this.state = {
            clock: new Date()
        }
    }

    /* 
    Basically do whatever you want with the component's state once it's been
    'mounted' into DOM (rendered once). this.timer setup and teardown is only for
    resource managing, we can do without it just as well for now. 
    this.setState lets React know that the state has changed, surprise surprise.
    */
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({ clock: new Date() })
        }, this.props.delay || 1000)
    }

    componentWillUnmount() {
        clearInterval(this.timer)
    }

    shouldComponentUpdate() {
        return true;
    }

    render() {
        return (<div className="Clock">
            {this.state.clock.toLocaleTimeString()}
        </div>)
    }
}

export default Clock