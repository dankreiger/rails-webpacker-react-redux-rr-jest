import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

class Navigation extends Component {
  state = { isOpen: false };

  toggle = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };
  render() {
    const { isOpen } = this.state;
    return (
      <Navbar color="light" light expand="md">
        <NavLink className="navbar-brand" to="/">
          Home
        </NavLink>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink className="nav-link" to="/about">
                About
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/contact">
                Contact
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}

export default Navigation;
