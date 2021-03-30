import React from "react";
import { Nav, Navbar } from "react-bootstrap";

function Header() {
  return (
    <div className='page-holder bg-cover'>
      <Navbar collapseOnSelect expand='lg' sticky='top'>
        <Navbar.Brand href='#home' className='menuText'>
          React-Bootstrap
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ml-auto'>
            <Nav.Link href='#about' className='menuText'>
              About
            </Nav.Link>
            <Nav.Link href='#blog' className='menuText'>
              Blog
            </Nav.Link>
            <Nav.Link href='#contributors' className='menuText'>
              Contributors
            </Nav.Link>
            <Nav.Link href='#contact' className='menuText'>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
}

export default Header;
