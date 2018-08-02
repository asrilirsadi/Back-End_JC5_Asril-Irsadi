import React, { Component } from 'react';
import {
            Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, NavItem,
            NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem 
        } from 'reactstrap';
// import styles from './../style/Header.css';

import {Link} from 'react-router-dom';



class Header2 extends Component 
{
    constructor(props) 
    {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
                        isOpen: false
                    };
    }
    toggle() 
    {
        this.setState({
                        isOpen: !this.state.isOpen
                    });
    }

    render() 
    {
        return (
                <div>
                    <Navbar color="primary" dark expand="md">
                        <NavbarBrand href="/"><h1>Auto Shop</h1></NavbarBrand>
                            <NavbarToggler onClick={this.toggle} />
                            
                            <Collapse isOpen={this.state.isOpen} navbar>
                                <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/components/">Components</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
                                </NavItem>
                                <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                    Options
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                </Nav>
                            </Collapse>
                    </Navbar>
                </div>
                );
    }
}

export default Header2;