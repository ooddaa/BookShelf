import React from 'react';
import './Buffet.css';

class Buffet extends React.Component {
    constructor() {
        super();
        this.onMouseEnter = this.onMouseEnter.bind(this);
        this.onMouseLeave = this.onMouseLeave.bind(this);
    }

    onMouseEnter(id, classes = []) {
        document.getElementById(id).classList.add(...classes)
    }
    onMouseLeave(id, classes = []) {
        document.getElementById(id).classList.remove(...classes)
    }

    render() {
        return (
            <div className="Buffet">
                <div className="box" id="box1" onMouseEnter={() => this.onMouseEnter("box1", ["img-box-shadow"])} onMouseLeave={() => this.onMouseLeave("box1", ["img-box-shadow"])}>Random stuff about odaself</div>
                <div className="box" id="box2" onMouseEnter={() => this.onMouseEnter("box2", ["img-dimmer"])} onMouseLeave={() => this.onMouseLeave("box2", ["img-dimmer"])}>
                    Random stuff about odaself, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
                <div className="box" id="box3" onMouseEnter={() => this.onMouseEnter("box3", ["img-dimmer"])} onMouseLeave={() => this.onMouseLeave("box3", ["img-dimmer"])}>
                    Random stuff about odaself, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </div>
                <div className="box" id="box4" onMouseEnter={() => this.onMouseEnter("box4", ["img-dimmer"])} onMouseLeave={() => this.onMouseLeave("box4", ["img-dimmer"])}>Ideas I'm working on</div>
                <div className="box" id="box5" onMouseEnter={() => this.onMouseEnter("box5", ["img-dimmer"])} onMouseLeave={() => this.onMouseLeave("box5", ["img-dimmer"])}>Wishlist</div>
                <div className="box" id="box6" onMouseEnter={() => this.onMouseEnter("box6", ["img-dimmer"])} onMouseLeave={() => this.onMouseLeave("box6", ["img-dimmer"])}>Experience</div>
                <div className="box" id="box7" onMouseEnter={() => this.onMouseEnter("box7", ["img-dimmer"])} onMouseLeave={() => this.onMouseLeave("box7", ["img-dimmer"])}>Philosophy</div>
                <div className="box" id="box8" onMouseEnter={() => this.onMouseEnter("box8", ["img-dimmer"])} onMouseLeave={() => this.onMouseLeave("box8", ["img-dimmer"])}>BJJ</div>
                <div className="nested-misc-head box" id="box9" >
                    Misc
                <hr></hr>
                    <div className="nested-misc-body">
                        <div className="nested1">
                            <div className="nested-misc-head">
                                <div className="nested-misc-body">
                                    <div className="someclass height_70px">
                                        lol
                                    </div>
                                    <div className="someclass height_70px">
                                        lol
                                    </div>
                                    <div className="someclass height_70px">
                                        lol
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="nested2">
                            lol
                        </div>
                        <div className="nested3">
                            lol
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Buffet