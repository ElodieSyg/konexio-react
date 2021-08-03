import React, { useState} from 'react';
// Reactsrap
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
  } from 'reactstrap';

const Menu = (props) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
        <div>
        <Navbar color='dark' light expand='md'>
          <NavbarBrand href='/' className='text-white ms-3'>Home</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='mr-auto' navbar>
              <NavItem>
                <NavLink href='/weekly' className='text-white ms-5'>Weekly</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/weekly-battle' className='text-white ms-5'>Weekly Battle</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/popular' className='text-white ms-5'>Popular</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/popular-battle' className='text-white ms-5'>Popular Battle</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/favorites' className='text-white ms-5'>Favorites</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
};

export default Menu;