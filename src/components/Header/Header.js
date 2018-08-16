import React from 'react';
import {Navbar, Nav, NavItem } from 'react-bootstrap';
import './Header.css'

const header=(props)=>(

           <div className="navBar">
              <Navbar collapseOnSelect>
				  <Navbar.Header>
				    <Navbar.Brand>
				      <img src="https://varietycomputernews.files.wordpress.com/2017/07/sharkfest.png" />
				    </Navbar.Brand>
				    <Navbar.Toggle />
				  </Navbar.Header>
				  <Navbar.Collapse>
				    
				    <Nav pullRight>
				      <NavItem eventKey={1} href="#">
				         Contact
				      </NavItem>
				      
				    </Nav>
				  </Navbar.Collapse>
               </Navbar>
           </div>
	
)

export default header;