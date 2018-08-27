import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Login extends Component 
{
    state =
    {
        redirect: false
    }

    login = (userdata) =>
    {
        var username_cust = userdata.username.value;
        var password_cust = userdata.password.value;

        // console.log(username_cust);
        // console.log(password_cust);

        axios.post('http://localhost:8000/loginuser',
        {
            username_cust: username_cust,
            password_cust: password_cust
        }).then((response) => 
        {
            var userID = response.data;
            //console.log(adminID);
            cookies.set('sessionID', userID, { path: '/'});
            this.setState({
                            redirect: true
                        })
        });
    }

    render()
    {
        if(this.state.redirect) return <Redirect to='/productlist' />

        return  (
                <div>
                    <div className="banner1">
                        <div className="container">
                            <h3><Link to="/">Home</Link> / <span>Login</span></h3>
                        </div>
                    </div>

                    <div className="content">
                        {/* login */}
                        <div className="login">
                            <div className="main-agileits">
                                <div className="form-w3agile">
                                    <h3>Login</h3>
                                    <form action="#" method="post">
                                        <div className="key">
                                            <i className="fa fa-user" aria-hidden="true" />
                                            {/* <input type="text" defaultValue="Email" name="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" required /> */}
                                            <input type="text" placeholder="Please input your username.." ref="username"  required />
                                            
                                            <div className="clearfix" />
                                        </div>

                                        <div className="key">
                                            <i className="fa fa-lock" aria-hidden="true" />
                                            {/* <input type="password" defaultValue="Password" name="Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}" required /> */}
                                            <input type="password" placeholder="Please type your password.." ref="password" required />

                                            <div className="clearfix" />
                                        </div>

                                        {/* <input type="submit" defaultValue="Login" /> */}
                                        {/* <button type="button" onClick={() => this.login(this.refs)} className="btn btn-success">Login</button> */}

                                        <div>
                                            <center>
                                                <button type="button" onClick={() => this.login(this.refs)} className="btn btn-success">Login</button>
                                            </center>
                                        </div>
                                    </form>
                                </div>

                                <div className="forg">
                                    <a href="#" className="forg-left">Lupa Password</a>
                                    {/* <a href="registered.html" className="forg-right">Register</a> */}
                                    <Link to ="/register" className="forg-right">Register</Link>
                                    <div className="clearfix" />
                                </div>
                            </div>
                        </div>
                        {/*login*/}
                    </div>
                </div>
                );
    }
}

export default Login;