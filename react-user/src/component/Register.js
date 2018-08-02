import React, { Component } from 'react';

import {Link} from 'react-router-dom'; 

class Register extends Component 
{
    render() 
    {
        return (
                <div>
                    <div className="banner1">
                        <div className="container">
                            <h3><Link to="/">Home</Link> / <span>Register</span></h3>
                        </div>

                    </div>

                    <div className="content">
                        <div className="login">
                            <div className="main-agileits">
                                <div className="form-w3agile form1">
                                <h3>Register</h3>
                                <form action="#" method="post">
                                    <div className="key">
                                        <i className="fa fa-user" aria-hidden="true" />
                                        <input type="text" defaultValue="Masukkan Username" name="Username" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Username';}" required />
                                        <div className="clearfix" />
                                    </div>

                                    <div className="key">
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        <input type="text" defaultValue="Email" name="Email" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Email';}" required />
                                        <div className="clearfix" />
                                    </div>

                                    <div className="key">
                                        <i className="fa fa-lock" aria-hidden="true" />
                                        <input type="password" defaultValue="Password" name="Password" placeholder="Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}" required />
                                        <div className="clearfix" />
                                    </div>

                                    <div className="key">
                                        <i className="fa fa-lock" aria-hidden="true" />
                                        <input type="password" defaultValue="Password" name="Confirm Password" placeholder="Konfirmasi Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Confirm Password';}" required />
                                        <div className="clearfix" />
                                    </div>

                                    <div>
                                        <div>
                                            <center><input type="submit" defaultValue="Register" /></center><br />
                                        </div>
                                    <div>
                                        <center>
                                            <h6>Sudah meiliki akun ? <span><Link to="/login" style={{color: 'red'}}>Masuk</Link></span></h6>
                                            {/* <h6>Sudah meiliki akun ? <span><a href="login.html" style={{color: 'red'}}>Masuk</a></span></h6> */}
                                        </center>
                                    </div>
                                    </div>
                                </form>
                                </div>
                            </div>
                        </div>   
                    </div>
                </div> 
                );
    }
}

export default Register;