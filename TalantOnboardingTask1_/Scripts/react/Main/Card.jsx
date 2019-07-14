//import React, { Component } from 'react';


//class App extends Component {

//    constructor(props) {
//        super(props);
//        this.state = {
//            title: 'React Simple CRUD Application',
//            act: 0,
//            index: '',
//            datas: []
//        }
//        this.fSubmit = this.fSubmit.bind(this)
//    }

//    componentDidMount() {
//        this.refs.name.focus();
//    }

//    fSubmit() {
//        //e.preventDefault();
//        //console.log('try');

//        let datas = this.state.datas;
//        let name = this.refs.name.value;
//        let address = this.refs.address.value;

//        if (this.state.act === 0) {   //new
//            let data = {
//                name, address
//            }
//            datas.push(data);
//        } else {                      //update
//            let index = this.state.index;
//            datas[index].name = name;
//            datas[index].address = address;
//        }

//        this.setState({
//            datas: datas,
//            //act: 0
//        });

//        this.refs.myForm.reset();
//        this.refs.name.focus();
//    }

//    fRemove(i) {
//        let datas = this.state.datas;
//        datas.splice(i, 1);
//        this.setState({
//            datas: datas
//        });

//        this.refs.myForm.reset();
//        this.refs.name.focus();
//    }

//    //fEdit(i) {
//    //    let data = this.state.datas[i];
//    //    this.refs.name.value = data.name;
//    //    this.refs.address.value = data.address;

//    //    this.setState({
//    //        act: 1,
//    //        index: i
//    //    });

//    //    this.refs.name.focus();
//    //}


//    render() {
//        let datas = this.state.datas; 
//        return (
//            <div className="App">
//                <h2>{this.state.title}</h2>
//                <form ref="myForm" className="myForm">
//                    <input type="text" ref="name" placeholder="your name" className="formField" />
//                    <input type="text" ref="address" placeholder="your address" className="formField" />
//                    <button onClick={this.fSubmit} type="button" className="myButton">submit </button>
//                </form>
//                <pre>
//                    {datas.map((data, i) =>
//                        <li key={i} className="myList">
//                            {i + 1}. {data.name}, {data.address}
//                            <button onClick={() => this.fRemove(i)} className="myListButton">remove </button>
//                            <button onClick={() => this.fEdit(i)} className="myListButton">edit </button>
//                        </li>
//                    )}
//                </pre>
//            </div>
//        );
//    }
//}

//export default App;





















import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Table, Modal, Form, Input } from 'semantic-ui-react'



export default class Card extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showEdit: false,
            name: '',
            status: '',
            description: '',
            datas: [],
            act: 0,
            index: '',


        };
        this.submit = this.submit.bind(this)
        this.handleChange = this.handleChange.bind(this)
        this.remove = this.remove.bind(this)
        this.edit = this.edit.bind(this)
        this.update = this.update.bind(this)
       // this.showEdit = this.showEdit.bind(this)
        this.closeEdit = this.closeEdit.bind(this)

    }
    handleChange(e) {   
        this.setState({
            [e.target.name]: e.target.value
        })

    }
    componentDidMount() {
        this.refs.name.focus();
    }

    submit() {
        let datas = this.state.datas;
        let name = this.refs.name.value;
        let status = this.refs.status.value;
        let description = this.refs.description.value;

        let data = {
            name, status, description
        }
        datas.push(data);
        this.setState({
            datas: datas,

        })

    }


    update() {
        let data = this.state.datas;
        let name = this.refs.uname.value;
        let status = this.refs.ustatus.value;
        let description = this.refs.udescription.value;

        let index = this.state.index;
        data[index].name = name;
        data[index].status = status;
        data[index].description = description;

        this.setState({
            datas: data,

        })

        this.refs.name.focus();
    }

    remove(i) {
        let data = this.state.datas;
        data.splice(i, 1);
        this.setState({
            datas: data

        })
        this.closeEdit()
        this.refs.name.focus();
    }


    edit(i) {
       

        this.setState({
            showEdit: true,
            index: i
        })
        let data = this.state.datas[i];

        this.refs.uname.value = data.name;
        this.refs.ustatus.value = data.status;
        this.refs.udescription.value = data.description;

     
      
        this.refs.name.focus();

    }
 
    closeEdit() {
        this.setState({
            showEdit: false,
        })
    }



    render() {
        let datas = this.state.datas;
        let updateDetail = "";

        let dataDetail = "";
        dataDetail =



            datas.map((x, i) =>
                <tr key={i}>
                    <td>  {x.name}</td>
                    <td>  {x.status}</td>
                    <td> {x.description}</td>
                    <td> <button onClick={this.remove.bind(this, i)} className="ui red button">remove </button></td>
                    <td>  <button onClick={this.edit.bind(this, i)} className="ui grey button">edit </button></td>

                </tr>
            )

        if (this.state.showEdit) {
            updateDetail =
                <div style={{ marginLeft:"350px" }} className="ui input">
                    <input type="text" ref="uname" />
                    <input type="text" ref="ustatus" />
                    <input type="text" ref="udescription" />

                <button onClick={this.update} className="ui green button">Update</button>

                <button onClick={this.closeEdit} className="ui black button">Cancel</button>
                </div>
        }
        else {
            ""
        }







        return (
            <div>
                <h1>Todo Application</h1>
              
                <div ref="myForm" style={{ textAlign: "center" }}>
                    <div style={{ marginRight: "40px" }} class="ui input">

                        <label style={{ margin: "4.5px" }}>Name: </label>
                        <input ref="name" type="text" onChange={this.handleChange} placeholder="Enter your Name" />
                    </div>

                    <div style={{ marginRight: "40px" }} class="ui input">

                        <label style={{ margin: "4.5px" }}>Staus: </label>
                        <input ref="status" type="text" onChange={this.handleChange} placeholder="Enter your Status" />
                    </div>


                    <div style={{ marginRight: "40px" }} class="ui input">

                        <label style={{ margin: "4.5px" }}>Description: </label>
                        <input ref="description" type="text" onChange={this.handleChange} placeholder="Enter Description" />
                    </div>


                    <button style={{ marginTop: "5px" }} onClick={this.submit} className="ui black button">Submit</button>
                </div>
                <br/>
                {updateDetail}
                <table className="mainTable ui ten wide column table" >
                    <thead>
                        <tr>
                            <th className="two wide">Name</th>
                            <th className="two wide">Status</th>
                            <th className="two wide">Description</th>
                            <th className="two wide">Delete</th>
                            <th className="two wide">Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {dataDetail}
                       
                      

                    </tbody>
                </table>



            </div >
        )
    }
}























































//import React, { Component } from 'react';


//class App extends Component {

//    constructor(props) {
//        super(props);
//        this.state = {
//            title: 'React Simple CRUD Application',
//            act: 0,
//            index: '',
//            datas: []
//        }
//        this.fSubmit = this.fSubmit.bind(this)
//    }

//    componentDidMount() {
//        this.refs.name.focus();
//    }

//    fSubmit(e) {
//        e.preventDefault();
//        console.log('try');

//        let datas = this.state.datas;
//        let name = this.refs.name.value;
//        let address = this.refs.address.value;

//        if (this.state.act === 0) {   //new
//            let data = {
//                name, address
//            }
//            datas.push(data);
//        } else {                      //update
//            let index = this.state.index;
//            datas[index].name = name;
//            datas[index].address = address;
//        }

//        this.setState({
//            datas: datas,
//            act: 0
//        });

//        this.refs.myForm.reset();
//        this.refs.name.focus();
//    }

//    fRemove(i) {
//        let datas = this.state.datas;
//        datas.splice(i, 1);
//        this.setState({
//            datas: datas
//        });

//        this.refs.myForm.reset();
//        this.refs.name.focus();
//    }

//    fEdit(i) {
//        let data = this.state.datas[i];
//        this.refs.name.value = data.name;
//        this.refs.address.value = data.address;

//        this.setState({
//            act: 1,
//            index: i
//        });

//        this.refs.name.focus();
//    }


//    render() {
//        let datas = this.state.datas; 
//        return (
//            <div className="App">
//                <h2>{this.state.title}</h2>
//                <form ref="myForm" className="myForm">
//                    <input type="text" ref="name" placeholder="your name" className="formField" />
//                    <input type="text" ref="address" placeholder="your address" className="formField" />
//                    <button onClick={this.fSubmit} type="button" className="myButton">submit </button>
//                </form>
//                <pre>
//                    {datas.map((data, i) =>
//                        <li key={i} className="myList">
//                            {i + 1}. {data.name}, {data.address}
//                            <button onClick={() => this.fRemove(i)} className="myListButton">remove </button>
//                            <button onClick={() => this.fEdit(i)} className="myListButton">edit </button>
//                        </li>
//                    )}
//                </pre>
//            </div>
//        );
//    }
//}

//export default App;