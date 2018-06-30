import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  Collapse,
  Container,
  Navbar,
  Nav,
  NavItem,
} from 'reactstrap';

const Header = () => (
  <Navbar expand>
    <Container>
      <Collapse navbar className='w-100'>
        <NavLink className='navbar-brand' to='/'>Wish List</NavLink>
        <Nav navbar className='ml-auto'>
          <NavItem>
            <NavLink to='/about' className='nav-link'>About</NavLink>
          </NavItem>
        </Nav>
      </Collapse>
    </Container>
  </Navbar>
);

export default Header;
