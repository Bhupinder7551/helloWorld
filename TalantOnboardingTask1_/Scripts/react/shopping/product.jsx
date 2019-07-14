import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { type } from 'os';

export default class Product extends React.Component {
    constructor() {
        super()
        this.state = {
            ProductList: [],
        }
        this.loadData = this.loadData.bind(this)
    }
    componentDidMount() {
        this.loadData();
    }
    loadData() {
        $.ajax({
            url: "/Home/ProductList",
            type: "GET",
            success: function (data) {
                this.setState({
                    ProductList: data
                })
                console.log("ProductList =", data)
            }.bind(this)

        })
    }
    render() {
        let list = this.state.ProductList;
        let tableData = null;
        if (list != "") {


            tableData = list.map(x =>

                < tr key={x.Id}>
                    <td data-label="Name">{x.Name}</td>
                    <td data-label="Age">{x.Id}</td>
                    <td data-label="Address">{x.Price}</td>
                </tr >
            )
        }

        return (

            <div>
                <table class="ui celled table">
                    <thead>
                        <tr><th>Name</th>
                            <th>Age</th>
                            <th>Price</th>
                        </tr></thead>
                    <tbody>
                        {tableData}
                    </tbody>
                </table>
            </div>
        )
    }
}

