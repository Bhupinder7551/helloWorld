import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import { Table, Modal, Form, Input } from 'semantic-ui-react'
import { sign } from 'crypto';

export default class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            showLogin: false,
            singup: false,
            email: '',
            password: '',
            fname: '',
            lname: '',
            s_email: '',
            s_password: '',




        };
        this.showLogin = this.showLogin.bind(this)
        this.closeLogin = this.closeLogin.bind(this)
        this.signup = this.signup.bind(this)
        this.signout = this.signout.bind(this)
        this.submitform = this.submitform.bind(this)
        this.handleChange = this.handleChange.bind(this)
        // this.validateForm = this.validateForm.bind(this)
        this.s_handleChange = this.s_handleChange.bind(this)
    }
    showLogin() {
        this.setState({
            showLogin: true
        })
    }
    closeLogin() {
        this.setState({
            showLogin: false

        });
    }
    signup() {
        this.setState({
            singup: true
        });
    }
    signout() {
        this.setState({
            singup: false
        });
    }


    submitform() {
     
        let emailValid = this.state.email;
        let passwordValid = this.state.password
        emailValid = this.state.s_email
        passwordValid = this.state.s_password
        this.state.password == passwordValid && this.state.email == emailValid
            ?
            alert("login Succesfully ")
            :
            alert("use correct email and password") 
    }



    handleChange(e) {
        this.setState({ [e.target.name]: e.target.value }
        );
    }

    s_handleChange(e) {
        this.setState({ [e.target.id]: e.target.value }
        );
    }




    render() {
  

        return (
           
            <div className="pp ">
                <h1 className="label">Click on Image for Login..</h1>
                <div className="img ma4 grow pa2 ">


                    <img onClick={this.showLogin} src="https://joeschmoe.io/api/v1/sandhu" alt="Bhupinder" />

                  
                   

                </div>
                {this.state.singup ?

                    <Modal size="small">

                        <Modal.Header className="modalheaderbutton"> Sign Up Form <button onClick={this.signout}> Sign In</button> </Modal.Header>

                        <Modal.Content>
                            <Form className="ui form segment">

                                <Form.Field>
                                    <label>First name:</label>
                                    <input type="text" id="fname" value={this.state.fname} onChange={this.s_handleChange} placeholder='Enter your First Name' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Last name:</label>
                                    <input type="text" id="lname" value={this.state.lname} onChange={this.s_handleChange} placeholder='Enter your Last Name' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Email:</label>
                                    <input type="text" id="s_email" value={this.state.s_email} onChange={this.s_handleChange} placeholder='example@gmail.com' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Password:</label>
                                    <input type="password" id="s_password" value={this.state.s_password} onChange={this.s_handleChange} placeholder='*********' />
                                </Form.Field>
                            </Form>
                        </Modal.Content>
                        <Modal.Actions>
                            <button className="ui secondary button" onClick={this.signout}>Cancel</button>

                            <button onClick={this.signout} className="ui green button" ><i className="check icon"></i>Sign Up</button>
                        </Modal.Actions>

                    </Modal>
                    :

                    <Modal open={this.state.showLogin} size="small">

                        <Modal.Header className="modalheaderbutton"> LogIn Form <button> Sign In</button><button onClick={this.signup}>Sign Up</button> </Modal.Header>

                        <Modal.Content>
                            <Form className="ui form segment">
                                <Form.Field>
                                    <label>Email:</label>
                                    <input type="text" name="email" value={this.state.email} onChange={this.handleChange} placeholder='example@gmail.com' />
                                </Form.Field>
                                <Form.Field>
                                    <label>Password:</label>
                                    <input type="password" name="password" value={this.state.password} onChange={this.handleChange} placeholder='*********' />
                                </Form.Field>
                                <div class="ui checkbox">
                                    <input type="checkbox" tabindex="0" />
                                    <label>I agree to the Terms and Conditions</label>
                                </div>
                            </Form>
                        </Modal.Content>
                        <Modal.Actions>
                            <button className="ui secondary button" onClick={this.closeLogin}>Cancel</button>

                            <button onClick={this.submitform} disabled={this.state.email == ""}  className="ui green button" ><i className="check icon"></i>Submit</button>
                        </Modal.Actions>

                    </Modal>
                }
            </div>
        )
    }
}



















































//import React, { Component } from 'react';
//import ReactDOM from 'react-dom';

//import { Table, Modal, Form, Input } from 'semantic-ui-react'
//import { sign } from 'crypto';

//export default class LogIn extends Component {
//    constructor(props) {
//        super(props);
//        this.state = {
//            showLogin: false,
//            singup: false,
//            email: '',
//            password: '',
//            fname: '',
//            lname: '',
//            s_email: '',
//            s_password: '',




//        };
//        this.showLogin = this.showLogin.bind(this)
//        this.closeLogin = this.closeLogin.bind(this)
//        this.signup = this.signup.bind(this)
//        this.signout = this.signout.bind(this)
//        this.submitform = this.submitform.bind(this)
//        this.handleChange = this.handleChange.bind(this)
//        this.validateForm = this.validateForm.bind(this)
//        this.s_handleChange = this.s_handleChange.bind(this)
//    }
//    showLogin() {
//        this.setState({
//            showLogin: true
//        })
//    }
//    closeLogin() {
//        this.setState({
//            showLogin: false

//        });
//    }
//    signup() {
//        this.setState({
//            singup: true
//        });
//    }
//    signout() {
//        this.setState({
//            singup: false
//        });
//    }

//    submitform() {
//        let emailValid = this.state.email;
//        let passwordValid = this.state.password
//        emailValid = "bhupindersingh7551@gmail.com"
//        passwordValid = "123456789"
//        this.state.password == passwordValid && this.state.email == emailValid

//            ?

//            alert("login Succesfully ")
//            :
//            alert("use correct email and password")


//    }


//    validateForm() {
//        this.state.email.length > 0 && this.state.password.length > 0;

//    }

//    handleChange(e) {
//        this.setState({ [e.target.name]: e.target.value }
//        );
//    }

//    s_handleChange(e) {
//        this.setState({ [e.target.id]: e.target.value }
//        );
//        this.setState({
//            s_email: this.state.email,
//            s_password: this.state.password
//        })

//    }



//    render() {
//        return (
//            <div className="login">
//                <h1>Click on Image for Login..</h1>
//                <div className=" ma4 grow pa2 ">


//                    <img onClick={this.showLogin} src="https://joeschmoe.io/api/v1/sandhu" alt="Bhupinder" />

//                </div>
//                {this.state.singup ?

//                    <Modal size="small">

//                        <Modal.Header className="modalheaderbutton"> Sign Up Form <button onClick={this.signout}> Sign In</button> </Modal.Header>

//                        <Modal.Content>
//                            <Form className="ui form segment">

//                                <Form.Field>
//                                    <label>First name:</label>
//                                    <input type="text" id="fname" value={this.state.fname} onChange={this.s_handleChange} placeholder='Enter your First Name' />
//                                </Form.Field>
//                                <Form.Field>
//                                    <label>Last name:</label>
//                                    <input type="text" id="lname" value={this.state.lname} onChange={this.s_handleChange} placeholder='Enter your Last Name' />
//                                </Form.Field>
//                                <Form.Field>
//                                    <label>Email:</label>
//                                    <input type="text" id="s_email" value={this.state.email} onChange={this.s_handleChange} placeholder='example@gmail.com' />
//                                </Form.Field>
//                                <Form.Field>
//                                    <label>Password:</label>
//                                    <input type="password" id="s_password" value={this.state.password} onChange={this.s_handleChange} placeholder='*********' />
//                                </Form.Field>
//                            </Form>
//                        </Modal.Content>
//                        <Modal.Actions>
//                            <button className="ui secondary button" onClick={this.signout}>Cancel</button>

//                            <button className="ui green button" ><i className="check icon"></i>Sign Up</button>
//                        </Modal.Actions>

//                    </Modal>
//                    :

//                    <Modal open={this.state.showLogin} size="small">

//                        <Modal.Header className="modalheaderbutton"> LogIn Form <button> Sign In</button><button onClick={this.signup}>Sign Up</button> </Modal.Header>

//                        <Modal.Content>
//                            <Form className="ui form segment">
//                                <Form.Field>
//                                    <label>Email:</label>
//                                    <input type="text" name="email" onChange={this.handleChange} placeholder='example@gmail.com' />
//                                </Form.Field>
//                                <Form.Field>
//                                    <label>Password:</label>
//                                    <input type="password" name="password"  onChange={this.handleChange} placeholder='*********' />
//                                </Form.Field>
//                                <div class="ui checkbox">
//                                    <input type="checkbox" tabindex="0" />
//                                    <label>I agree to the Terms and Conditions</label>
//                                </div>
//                            </Form>
//                        </Modal.Content>
//                        <Modal.Actions>
//                            <button className="ui secondary button" onClick={this.closeLogin}>Cancel</button>

//                            <button onClick={this.submitform} disabled={this.state.email == ""} className="ui green button" ><i className="check icon"></i>Submit</button>
//                        </Modal.Actions>

//                    </Modal>
//                }
//            </div>
//        )
//    }
//}
