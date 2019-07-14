import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { type } from 'os';

export default class Store extends React.Component {
    constructor() {
        super()
        this.state = {
            StoreList: [],
        }
        this.loadData = this.loadData.bind(this)
    }
    componentDidMount() {
        this.loadData();
    }
    loadData() {
        $.ajax({
            url: "/Home/StoreList",
            type: "GET",
            success: function (data) {
                this.setState({
                    StoreList: data
                })
                console.log("StoreList =", data)
            }.bind(this)

        })
    }
    render() {
        let list = this.state.StoreList;
        let tableData = null;
        if (list != "") {


            tableData = list.map(x =>

                < tr key={x.Id}>
                    <td data-label="Name">{x.Name}</td>
                    <td data-label="Age">{x.Id}</td>
                    <td data-label="Address">{x.Address}</td>
                </tr >
            )
        }

        return (

            <div>
                <table class="ui celled table">
                    <thead>
                        <tr><th>Name</th>
                            <th>Age</th>
                            <th>Address</th>
                        </tr></thead>
                    <tbody>
                        {tableData}
                    </tbody>
                </table>
            </div>
        )
    }
}

