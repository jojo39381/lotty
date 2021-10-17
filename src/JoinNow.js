import React from "react";
import NavBar from "./NavBar.js";
import Container from "react-bootstrap/Container";
import { Waitlist } from "waitlistapi";
const JoinNow = () => {
  return (
    <div>
      <Container
        fluid
        style={{
          padding: 0,
          overflow: "hidden",
          width: "100%",
          margin: "0 auto",
        }}
      >
        <NavBar hideOptions={true}></NavBar>
        <div
          style={{
            backgroundColor: "#0984E3",
            height: "90vh",
          }}
        >
          <div
            style={{
              width: "30%",
              margin: "0 auto",
              paddingTop: "100px",
            }}
          >
            <Waitlist
              api_key="PP7MKZ"
              waitlist_link="https://www.joinattain.com"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default JoinNow;
