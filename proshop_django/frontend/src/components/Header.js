import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap'
import { LinkContainer } from 'react-router-bootstrap'


function Header() {
  return (
    
      <header>
      <Navbar bg="light" expand="lg" collapseOnSelect>
        <Container>
            <LinkContainer to='/'>
              <Navbar.Brand >IP-Tech</Navbar.Brand>
            </LinkContainer>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                    <Nav.Link href="/Cart"><i className='fas fa-shopping-cart'></i>Cart</Nav.Link>
                    <Nav.Link href="/Login"><i className='fas fa-user'></i>Login</Nav.Link>

              </Nav>
            </Navbar.Collapse>
            
        </Container>
        </Navbar>
      </header>

  )
}

export default Header
