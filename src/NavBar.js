import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from './logo.png'
import Brand from './brand.png'
const NavBar = () => {
    return (
        <Navbar expand="lg" style={{height: 100, backgroundColor: "clear", fontFamily:'Lato'}}>
        <Navbar.Brand href="#home">
        {/* <img src={Brand} width="180" height="75"></img> */}
        <h1 style={{fontSize:50}}>Celestial</h1>
        </Navbar.Brand>
        
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
           <Nav.Link href="#rewards" style={{color:"black", fontSize:20, fontWeight: "bold", margin: 30}}>Rewards</Nav.Link>
            <Nav.Link href="#how_it_works" style={{color:"black", fontSize:20, fontWeight: "bold", margin: 30}}>How It Works</Nav.Link>
            <Nav.Link href="#f&q" style={{color:"black", fontSize:20, fontWeight: "bold", margin: 30}}>Frequently Asked Questions</Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
      </Navbar>
    )
}

export default NavBar
