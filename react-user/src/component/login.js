import React, { Component } from 'react';  
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

function mapStateToProps(state)
{
  return {
            //count: state.count,
            user: state.user,
            pass: state.pass
        };
}

class login extends Component 
{
    // increment = () => {  
    //                     this.props.dispatch({type:'INCREMENT'});
    //                   }

    // decrement = () => {  
    //                     this.props.dispatch({type:'DECREMENT'});
    //                   }

    klik = (apa) => 
    {                
        /*axios.post('url/login',
        * { 
        *       input1 : apa.nama.value,
        *       input2 : apa.pass.value,
        * }).then((respond) => 
        * {
        *       this.setState({
        *           hasilLogin: respond.data
        * });
        * })
        */
        this.props.dispatch(
        {
            type:'KLIK', 
            input1: apa.nama.value, 
            input2: apa.pass.value
        });    
    }

    render()
    {  
        return (
                    <div>
                        <center>
                            {/* <h1>{this.props.count}</h1>
                            <div>
                                <button onClick = {this.decrement}>Kurang </button>
                                <span> </span>
                                <button onClick = {this.increment}>Tambah </button>
                            </div> */}

                            <h1>Username: {this.props.user}!</h1>        
                            <h1>password: {this.props.pass}!</h1>   

                            <input ref='nama' type="text" placeholder="username" required/>   
                            <input ref="pass" type="password" placeholder="password" required/>   
                            <button>
                                <Link onClick={() => this.klik(this.refs)} to="/masuk"> Tekan saya gan</Link>
                            </button>
                        </center>
                    </div>
                );
    }
}



export default connect(mapStateToProps)(login)