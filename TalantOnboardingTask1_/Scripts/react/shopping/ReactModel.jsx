import React, { Component } from 'react';
import ReactDOM from 'react-dom';



export default class Model extends Component {
    constructor() {
        super();
        this.state = {
        }
    }
    render() {
        return
        <div>
            <h1>
                Welcome to the React Model
            </h1>
            <div>
                <img src="https://joeschmoe.io/api/v1/bhupinder" alt="bhupinder" />
                <h1>Bhupinder Singh</h1>
                <p>Software Developer</p>
            </div>
        </div>
    }
}