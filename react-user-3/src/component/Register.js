import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'; 
import axios from 'axios';

class Register extends Component 
{
    state = 
    {
        redirect: false,
    }

    register = (userdata) =>
    {
        var username_cust = userdata.username.value;
        var password_cust = userdata.password.value;
        var email_cust = userdata.email.value;
        var phone_cust = userdata.phone.value;

        axios.post('http://localhost:8000/registeruser',
        {
            username_cust: username_cust,
            password_cust: password_cust,
            email_cust: email_cust,
            phone_cust: phone_cust,
        }).then((hasilregister) => 
        {
            var Response = hasilregister.data;
            console.log(Response);

            if (Response === 1)
            {
                this.setState({
                                redirect: true,
                            })
            }
        })
    }

    render() 
    {
        if (this.state.redirect) return <Redirect to= "/login" />

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
                                        {/* <input type="text" defaultValue="Masukkan Username" ref="username" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Username';}" required /> */}
                                        <input type="text" placeholder="Please type your username.." ref="username"  required />
                                        
                                        <div className="clearfix" />
                                    </div>

                                    <div className="key">
                                        <i className="fa fa-envelope" aria-hidden="true" />
                                        {/* <input type="text" defaultValue="Masukkan Username" ref="username" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Username';}" required /> */}
                                        <input type="text" placeholder="Please type your email.." ref="email"  required />
                                        
                                        <div className="clearfix" />
                                    </div>

                                    <div className="key">
                                        <i className="fa fa-lock" aria-hidden="true" />
                                        {/* <input type="password" defaultValue="Password" name="Password" placeholder="Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}" required /> */}
                                        <input type="password" placeholder="Please type your password.." ref="password" required />
                                        
                                        <div className="clearfix" />
                                    </div>

                                    <div className="key">
                                        <i className="fa fa-phone" aria-hidden="true" />
                                        {/* <input type="password" defaultValue="Password" name="Password" placeholder="Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Password';}" required /> */}
                                        <input type="text" placeholder="Please type your phone number" ref="phone" required />
                                        
                                        <div className="clearfix" />
                                    </div>

                                    {/* <div className="key">
                                        <i className="fa fa-lock" aria-hidden="true" />
                                        <input type="password" defaultValue="Password" name="Confirm Password" placeholder="Konfirmasi Password" onfocus="this.value = '';" onblur="if (this.value == '') {this.value = 'Confirm Password';}" required />
                                        
                                        <div className="clearfix" />
                                    </div> */}

                                    <div>
                                        <div>
                                            <center>
                                                <button type="button" onClick={() => this.register(this.refs)} className="btn btn-success">Register</button>
                                            </center>
                                            <br />
                                            {/* <center><input type="submit" defaultValue="Register" /></center><br /> */}
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