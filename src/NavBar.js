import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

const NavBar = () => {
    return (
        <Navbar expand="lg" style={{height: 100, backgroundColor: "white", fontFamily:'Lato'}}>
        <Navbar.Brand href="#home"><h1 style={{color:"Black"}}>Lotty</h1></Navbar.Brand>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link href="#home" style={{color:"black", fontSize:20, fontWeight: "bold", margin: 30}}>Why Us</Nav.Link>
            <Nav.Link href="#link" style={{color:"black", fontSize:20, fontWeight: "bold", margin: 30}}>Save</Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBar
