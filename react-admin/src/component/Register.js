import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class Register extends Component 
{

    register = (userdata) =>
    {
        var username = userdata.username.value;
        var password = userdata.password.value;
        var email = userdata.email.value;

        axios.post('http://localhost:8000/registeradmin',
        {
            username: username,
            password: password,
            email: email
        })
    }

    render() 
    {
        return (
                <div className="col-md-4 col-md-offset-4" style={{marginTop: '50px'}}>
                    <div className="box box-info">
                        <div className="box-header with-border">
                            <h3 className="box-title">ADMIN REGISTER</h3>
                        </div>

                        <form className="form-horizontal">
                            <div className="box-body">
                                <div className="form-group"> 
                                    <label htmlFor="username" className="col-sm-4 control-label">Username</label>                                   
                                    <div className="col-sm-8">
                                        <input type="text" ref="username" className="form-control" placeholder="Please type your username.." />
                                    </div>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="inputPassword3" className="col-sm-4 control-label">Password</label>  
                                    <div className="col-sm-8">
                                        <input type="password" ref="password" className="form-control" placeholder="Please type your password.." />  
                                    </div>
                                </div>

                                <div className="form-group">  
                                    <label htmlFor="inputEmail3" className="col-sm-4 control-label">Email</label>                                    
                                    <div className="col-sm-8">
                                        <input type="email" ref="email" className="form-control" placeholder="Please type your email.." />
                                    </div>
                                </div>

                            </div>

                            <div className="box-footer">
                                <Link to="/" className="btn btn-info">Login</Link>
                                <button type="button" onClick={() => this.register(this.refs)} className="btn btn-success pull-right">Register</button>
                                {/* <Link to ="/dashboard" type="button" onClick={() => this.fungsiLogin(this.refs)} className="btn btn-success">LOGIN</Link> */}
                            </div>
                        </form>
                    </div>
                </div>
                )
    }
}


export default Register;
