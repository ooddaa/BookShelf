import React from 'react';
import keys from 'lodash/keys';

class NameForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = { basic: [1, 2, 3], name: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        // console.log('Event is: ' + JSON.stringify(keys(event)));
        // console.log('Event.target is: ' + JSON.stringify(keys(event.target)));
        const { name, value } = event.target
        this.setState({ basic: this.state.basic, [name]: value });
    }

    handleSubmit(event) {
        console.log('A name was submitted: ' + this.state.name);
        console.log('State is: ' + JSON.stringify(this.state));
        // https://medium.com/@ericclemmons/react-event-preventdefault-78c28c950e46
        // https://www.robinwieruch.de/react-preventdefault
        // https://en.wikipedia.org/wiki/DOM_events
        event.preventDefault(); // prevents default action
        /**
         * With React, events are to be observed, not mutated or intercepted.
         */
    }
    hey() {
        console.log("HEY!!")
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit} onFocus={this.hey}>
                <label>
                    Name:
            <input type="text" name="name" onChange={this.handleChange} />
                </label>
                <input type="submit" value="Submit" />
            </form>
        );
    }
}

export default NameForm


// Event keys: [
//     "dispatchConfig",
//     "_targetInst",
//     "nativeEvent",
//     "type", // DOMString
//     "target", // EventTarget
//     "currentTarget", // EventTarget 
//     "eventPhase", // unsigned short
//     "bubbles", // boolean
//     "cancelable", // boolean
//     "timeStamp", // DOMTimeStamp
//     "defaultPrevented",
//     "isTrusted",
//     "isDefaultPrevented",
//     "isPropagationStopped", "_dispatchListeners", "_dispatchInstances"]
// Event methods: [
//     // stopPropagation
//     // preventDefault
//     // initEvent(eventTypeArg: DOMString, bubble: bool, cancelable: bool)
// ]

// Event.target is: ["__reactInternalInstance$yxtupp9i6kc","__reactEventHandlers$yxtupp9i6kc","_wrapperState","value","_valueTracker"]

/* DOM Level 2

addEventListener	Allows the registration of event listeners on the event target.
DOMString	type
EventListener	listener
boolean	useCapture
removeEventListener	Allows the removal of event listeners from the event target.
DOMString	type
EventListener	listener
boolean	useCapture
dispatchEvent	Allows sending the event to the subscribed event listeners.
Event	evt */