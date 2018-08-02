import React, { Component } from 'react';

import {Link} from 'react-router-dom'; 

class Login extends Component 
{
    render() 
    {
        return (            
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
                                            <i className="fa fa-envelope" aria-hidden="true" />
                                            <input type="text" defaultValue="Email" name="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" required />
                                            <div className="clearfix" />
                                        </div>

                                        <div className="key">
                                            <i className="fa fa-lock" aria-hidden="true" />
                                            <input type="password" defaultValue="Password" name="Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}" required />
                                            <div className="clearfix" />
                                        </div>

                                        <input type="submit" defaultValue="Login" />
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