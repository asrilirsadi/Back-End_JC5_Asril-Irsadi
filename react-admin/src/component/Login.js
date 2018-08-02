import React, { Component } from 'react';
import { Redirect, Link } from 'react-router-dom';
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
        var username = userdata.username.value;
        var password = userdata.password.value;

        axios.post('http://localhost:8000/loginadmin',
        {
            username: username,
            password: password
        }).then((response) => 
        {
            var userSession = response.data;
            cookies.set('sessionID', userSession, { path: '/dashboard'});
            this.setState({
                            redirect: true
                        })
        });
    }

    render() 
    {
        if(this.state.redirect) return <Redirect to='/dashboard' />
 
        return (
                <div className="col-md-4 col-md-offset-4" style={{marginTop: '50px'}}>
                    <div className="box box-info">
                        <div className="box-header with-border">
                            <h3 className="box-title">ADMIN LOGIN</h3>
                        </div>

                        <form className="form-vertical">
                            <div className="box-body">
                                
                                <input type="hidden" ref="idproduk" />

                                <div className="form-group">
                                    <label htmlFor="inputUsername3" className="col-sm-3 control-label">Username</label>
                                    
                                    <div className="col-sm-12">
                                        <input type="text" ref="username" className="form-control" placeholder="Please input your username.." />
                                        {/* <input ref="usernamelogin" type="text" placeholder="please input your username.." /> */}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="inputPassword3" className="col-sm-2 control-label">Password</label>
                                    
                                    <div className="col-sm-12">
                                        <input type="password" ref="password" className="form-control" placeholder="Please input your password.." />
                                        {/* <input ref="passwordlogin" type="password" placeholder="please input your password.." /> */}
                                    </div>
                                </div>

                                <div className="form-group">
                                    <div className="col-sm-offset-2 col-sm-10">
                                        <div className="checkbox">
                                            <label>
                                                <input type="checkbox" /> Remember me
                                            </label>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            <div className="box-footer">
                                <Link to="/register" className="btn btn-success">Register</Link>
                                <button type="button" onClick={() => this.login(this.refs)} className="btn btn-info pull-right">Login</button>
                                {/* <Link to ="/dashboard" type="button" onClick={() => this.fungsiLogin(this.refs)} className="btn btn-success">LOGIN</Link> */}
                            </div>
                        </form>
                    </div>
                </div>
                )
    }
}


export default Login;
