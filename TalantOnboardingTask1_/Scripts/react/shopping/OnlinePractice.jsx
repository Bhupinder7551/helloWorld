import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import 'tachyons';

export default class Model extends Component {
    constructor() {
        super();
        this.state = {
        };
    }
    render() {
        return (
            <div>
                <h1>hello Model
                    </h1>
                <div>
                    <img src="" alt="bhupinder" />
                    <h1 className="tc">Bhupinder Singh</h1>
                    <p>Software Developer</p>
                </div>
            </div>
        )
    }
}