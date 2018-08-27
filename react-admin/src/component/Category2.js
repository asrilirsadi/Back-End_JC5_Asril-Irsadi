import React, { Component } from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Category1 extends Component 
{
    render() 
    {
        if (cookies.get('sessionID') === undefined)
        {
            return <Redirect to = '/' />;
        }

        return (
                <div>
                    
                </div>
                )
    }
}

export default Category1;
