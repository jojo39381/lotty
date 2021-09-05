import React from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Logo from './assets/logo.svg'

const NavBar = ({hideOptions}) => {
    return (
        <Navbar expand="lg" style={{width:"100%", margin:"0 auto", height: 200, backgroundColor:"#0984E3", fontFamily:'Lato'}}>
        <Navbar.Brand href="/">
        <img src={Logo} width="200" height="90"></img>
       
        </Navbar.Brand>
        {hideOptions === false &&
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto" style={{marginTop:"10px"}}>
           <Nav.Link href="#rewards" style={{color:"black", fontSize:20, fontWeight: "bold", margin: 30, color:"white"}}>Rewards</Nav.Link>
            <Nav.Link href="#how_it_works" style={{color:"black", fontSize:20, fontWeight: "bold", margin: 30, color:"white"}}>How It Works</Nav.Link>
            <Nav.Link href="#f&q" style={{color:"black", fontSize:20, fontWeight: "bold", margin: 30, color:"white"}}>Frequently Asked Questions</Nav.Link>
            
          </Nav>
          
        </Navbar.Collapse>
       }
      </Navbar>
    )
}

export default NavBar
