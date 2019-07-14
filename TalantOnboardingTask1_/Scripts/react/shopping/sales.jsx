import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { type } from 'os';

export default class Sales extends React.Component {
    constructor() {
        super()
        this.state = {
            SalesList: [],
        }
        this.loadData = this.loadData.bind(this)
    }
    componentDidMount() {
        this.loadData();
    }
    loadData() {
        $.ajax({
            url: "/Home/SalesList",
            type: "GET",
            success: function (data) {
                this.setState({
                    SalesList: data
                })
                console.log("SalesList =", data)
            }.bind(this)

        })
    }
    render() {
        let list = this.state.SalesList;
        let tableData = null;
        if (list != "") {

            Id = x.Id,
                Product = x.ProductId,
                Customer = x.CustomerId,
                Store = x.StoreId,
                Date = x.DateSold
            tableData = list.map(x =>

                < tr key={x.Id}>
                    <td data-label="ProductId">{x.ProductId}</td>
                    <td data-label="CustomerId">{x.CustomerId}</td>
                    <td data-label="StoreId">{x.StoreId}</td>
                    <td data-label="Sold Date">{x.DateSold}</td>
                </tr >
            )
        }

        return (

            <div>
                <table class="ui celled table">
                    <thead>
                        <tr><th>ProductId</th>
                            <th>CustomerId</th>
                            <th>StoreId</th>
                            <th>Sold Date</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData}
                    </tbody>
                </table>
            </div>
        )
    }
}

