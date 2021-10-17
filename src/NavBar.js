import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Logo from "./assets/logo.svg";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
const NavBar = ({ hideOptions }) => {
  return (
    <Navbar
      expand="lg"
      style={{
        width: "100%",
        margin: "0 auto",
        height: 150,
        backgroundColor: "#0984E3",
        fontFamily: "Lato",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        veritcalAlign: "middle",
      }}
    >
      <Navbar.Brand href="/">
        <img src={Logo} width="200" height="90"></img>
      </Navbar.Brand>
      {hideOptions === false && (
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav
            className="ml-auto"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: "5px",
            }}
          >
            <Nav.Link
              href="#benefits"
              style={{
                color: "black",
                fontSize: 20,
                fontWeight: "bold",
                margin: 15,
                color: "white",
              }}
            >
              <div>Benefits</div>
            </Nav.Link>
            <Nav.Link
              href="#mission"
              style={{
                color: "black",
                fontSize: 20,
                fontWeight: "bold",
                margin: 15,
                color: "white",
              }}
            >
              <div>Our Mission</div>
            </Nav.Link>
            <Nav.Link
              style={{
                fontSize: 20,
                fontWeight: "bold",
                margin: 15,
                marginLeft: 30,
                color: "black",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Link to="/join-now" style={{ color: "black" }}>
                  <div
                    style={{
                      backgroundColor: "red",
                      borderRadius: 15,
                      width: 120,
                      height: 40,
                      backgroundColor: "white",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    Join Now
                  </div>
                </Link>
              </div>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      )}
    </Navbar>
  );
};

export default NavBar;
