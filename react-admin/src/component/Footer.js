import React, { Component } from 'react';

// import {Link} from 'react-router-dom';

class Footer extends Component 
{
    render() 
    {
        return (
                <div>
                    <footer className="main-footer">
                        <div className="pull-right hidden-xs">
                            <b>Version</b> 1.0
                        </div>

                        <strong>Copyright © 2018 <a href="#">Auto Shop</a>.</strong> All rights
                        reserved.
                    </footer>
                </div>    
                );
    }
}

export default Footer;