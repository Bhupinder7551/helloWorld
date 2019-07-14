import React, { Component } from 'react';
import LogIn from './login.jsx';
import Card from './Card.jsx'
import { Table, Form, Input } from 'semantic-ui-react'


export default class AvtarList extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <div className="dib ">
                <h1>Welcome</h1>
                <LogIn />
                <Card />
        
         
            </div>
        )
    }
}
