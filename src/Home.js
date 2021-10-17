import React, { useState } from "react";
import NavBar from "./NavBar.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import { saveEmail } from "./actions/save.js";
import Carousel from "react-bootstrap/Carousel";
import iphone from "./rewards.png";
import otheriphone from "./assets/otheriphone.png";
import anotherphone from "./assets/choose.png";
import { Link } from "react-router-dom";
import victoria from "./assets/victoria.png";
import ttoust from "./assets/ttoust.png";
import tptea from "./assets/tptea.png";
import sliverpizza from "./assets/sliverpizza.png";
import philz from "./assets/philz.jpeg";
import lululemon from "./assets/lululemon.png";
import imm from "./assets/imm.png";
import hm from "./assets/h&m.png";
import gongcha from "./assets/gongcha.png";
import forever from "./assets/forever.png";
import faqphone from "./faqphone.png";
import Modal from "react-modal";
import MerchantLogo from "./MerchantLogo";
import Fade from "react-reveal/Fade";
import stars from "./celest.png";
import lock from "./assets/lock.png";
import money from "./assets/money.png";
import gift from "./assets/gift.png";
import chart from "./assets/chart.png";
import Fees from "./assets/fees.svg";
import Payroll from "./assets/payroll.svg";
import Chart from "./assets/chart.svg";
import Credit from "./assets/credit.svg";
import HomePhone from "./assets/phone.svg";
import PayrollPhone from "./assets/payrollPhone.svg";
import CreditPhone from "./assets/creditPhone.svg";
import Logo from "./assets/logo.svg";
import { Waitlist } from "waitlistapi";

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};
const logoStyle = {
  margin: 10,
};

const logoHoverStyle = {
  margin: 10,
  opacity: 0.2,
  backgroundColor: "lightgray",
};

const Home = () => {
  const [waitlistInfo, setWaitlistInfo] = useState({
    current_priority: 0,
    referral_link: "",
  });
  const [contact, setContact] = useState("");
  const [modalIsOpen, setIsOpen] = useState(false);
  const [imgStyle, setImgStyle] = useState({
    margin: 10,
  });
  const [imgHover, setImgHover] = useState(false);
  async function submit(event) {
    event.preventDefault();
    if (contact !== "") {
      const response = await saveEmail(contact);
      setWaitlistInfo(response);
      openModal();
    }
  }
  function handleChange(event) {
    setContact(event.target.value);
  }
  function openModal() {
    setIsOpen(true);
  }

  function handleHover(event) {
    setImgHover(!imgHover);
    if (imgHover) {
    } else {
    }
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
    // subtitle.style.color = '#f00';
  }

  function closeModal() {
    setIsOpen(false);
  }
  return (
    <div>
      <Container fluid style={{ padding: 0, overflow: "hidden" }}>
        <NavBar hideOptions={false}></NavBar>

        <div style={{ backgroundColor: "#0984E3" }}>
          <Row style={{ width: "80%", margin: "0 auto", marginTop: 0 }}>
            <Col
              className="mb-5 mb-md-0"
              sm={12}
              md={7}
              lg={7}
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Fade left>
                <div style={{ width: "100%" }}>
                  <h1
                    style={{
                      fontSize: "5.2vw",
                      marginBottom: 30,
                      fontFamily: "Lato, sans-serif",
                      fontWeight: "900",
                      textAlign: "left",
                      color: "white",
                    }}
                  >
                    Banking for All.
                  </h1>
                  <p
                    style={{
                      fontSize: "4vh",
                      marginBottom: 20,
                      fontFamily: "Lato, sans-serif",
                      fontWeight: "300",
                      textAlign: "left",
                      color: "white",
                    }}
                  >
                    No Fees.
                  </p>
                  <p
                    style={{
                      fontSize: "4vh",
                      marginBottom: 20,
                      fontFamily: "Lato, sans-serif",
                      fontWeight: "300",
                      textAlign: "left",
                      color: "white",
                    }}
                  >
                    Free Payroll Advance.
                  </p>
                  <p
                    style={{
                      fontSize: "4vh",
                      marginBottom: 20,
                      fontFamily: "Lato, sans-serif",
                      fontWeight: "300",
                      textAlign: "left",
                      color: "white",
                    }}
                  >
                    Smart Budgeting.
                  </p>
                  <p
                    style={{
                      fontSize: "4vh",
                      marginBottom: 20,
                      fontFamily: "Lato, sans-serif",
                      fontWeight: "300",
                      textAlign: "left",
                      color: "white",
                    }}
                  >
                    Build Credit.
                  </p>

                  <form onSubmit={submit}>
                    <div
                      class="input-group"
                      style={{
                        border: "1px solid black",
                        borderRadius: 5,
                        marginTop: 50,
                      }}
                    >
                      <input
                        type="email"
                        class="form-control"
                        placeholder="Email Address"
                        style={{
                          height: 50,
                          display: "inline",
                          border: "None",
                        }}
                        onChange={handleChange}
                      ></input>
                      <span class="input-group-btn">
                        <Button
                          className="vrlps-trigger"
                          style={{
                            fontSize: 20,
                            height: 50,
                            backgroundColor: "black",
                            display: "inline",
                            border: "None",
                            borderStyle: "None",
                            borderTopLeftRadius: 0,
                            borderBottomLeftRadius: 0,
                            borderTopRightRadius: 5,
                            borderBottomRightRadius: 5,
                          }}
                          type="submit"
                        >
                          Join Waitlist
                        </Button>
                      </span>
                    </div>
                  </form>
                  <Modal
                    isOpen={modalIsOpen}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                  >
                    <h2>Thank you!</h2>
                    <h3>{`You are at spot #${waitlistInfo["current_priority"]} on the waitlist.`}</h3>
                    <h4>{`Refer people to move up in spots! Referral Link: ${waitlistInfo["referral_link"]}`}</h4>
                    <p>You will be one of the first to know when we launch!</p>
                    <button
                      onClick={closeModal}
                      style={{
                        border: "None",
                        backgroundColor: "transparent",
                        fontSize: 25,
                        position: "absolute",
                        top: 0,
                        right: 0,
                        height: 30,
                        width: 50,
                      }}
                    >
                      X
                    </button>
                  </Modal>
                </div>
              </Fade>
            </Col>

            <Col className="mb-sm-5 mb-md-0" sm={12} md={5} lg={5}>
              <Fade right>
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <img src={HomePhone} width="70%" alt="Iphone"></img>
                </div>
              </Fade>
            </Col>
          </Row>
        </div>

        {/*                 
                <section id="how_it_works" style={{marginTop:100}}>
                <hr></hr>
                <Row style={{}}>
                    <Col md={6}>       
                    <Fade>
                    <h2 style={{fontSize:50, marginBottom:50, fontFamily: "Lato, sans-serif", fontWeight:"900", textAlign:"left",marginTop:50}}>New to Banking? No Problem.</h2>
                    </Fade>
                    <h3 style={{textAlign:"left"}}>Our mission is to help people like you become more financially ready and accumulate savings. We want to provide you with the tools you need to succeed and build a better system fo those that need it most.  </h3>
                    </Col>
                    <Col className="mb-sm-5 mb-md-0"  md={6}>
                    <Fade delay={500}>
                    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100%"}}>
                    <Carousel style={{width:"100%", height:"100%", padding:30}}>
                        <Carousel.Item interval={2000} style={{width:"100%", height:"100%"}}>
                            <img
                            width="70%"
                            src={iphone}
                            alt="First slide"
                            style={{display:"inline-block", margin:30}}
                            />
                            <h2 style={{display:"inline-block"}}>1. Swipe</h2>
                        </Carousel.Item>
                        <Carousel.Item interval={2000} style={{width:"100%", height:"100%"}}>
                            <img
                            width="70%"
                            src={otheriphone}
                            alt="First slide"
                            style={{display:"inline-block", margin:30}}
                            />
                            <h2 style={{display:"inline-block"}}>2. Earn!</h2>
                        </Carousel.Item>
                       
                      
                      
                    </Carousel>
                        </div>
                        </Fade>
                    </Col>
                    

                </Row>
                </section>
                */}

        <section id="benefits" style={{ paddingTop: 120, paddingBottom: 120 }}>
          <div style={{ width: "80%", margin: "0 auto" }}>
            <Row>
              <Col
                className="mb-sm-5 mb-md-0"
                sm={{ span: 12, order: "first" }}
                md={6}
                lg={6}
              >
                <Fade>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <div>
                      <h2
                        style={{
                          fontSize: 50,
                          marginBottom: 30,
                          fontFamily: "Lato, sans-serif",
                          fontWeight: "900",
                          textAlign: "left",
                          marginTop: 50,
                        }}
                      >
                        No Fees. Ever.
                      </h2>
                      <h3 style={{ textAlign: "left" }}>
                        Get a free checking or savings account in less than 1
                        minute. No minimum balance. No monthly fees. No
                        overdraft fees.
                      </h3>
                    </div>
                  </div>
                </Fade>
              </Col>
              <Col
                className="mb-sm-5 mb-md-0"
                sm={{ span: 12, order: "last" }}
                md={6}
                lg={6}
              >
                <Fade>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <div>
                      <img src={Fees} width={"50%"} height={"50%"}></img>
                    </div>
                  </div>
                </Fade>
              </Col>
            </Row>
          </div>
        </section>
        <section
          style={{
            paddingTop: 120,
            paddingBottom: 120,
            backgroundColor: "#FAFAFA",
          }}
        >
          <div style={{ width: "80%", margin: "0 auto" }}>
            <Row>
              <Col
                className="mb-sm-5 mb-md-0"
                sm={{ span: 12, order: "last" }}
                md={{ span: 6, order: "first" }}
                lg={6}
              >
                <Fade>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <div>
                      <img
                        src={PayrollPhone}
                        width={"50%"}
                        height={"50%"}
                      ></img>
                    </div>
                  </div>
                </Fade>
              </Col>
              <Col
                className="mb-sm-5 mb-md-0"
                sm={{ span: 12, order: "first" }}
                md={{ span: 6, order: "last" }}
                lg={6}
              >
                <Fade>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <div>
                      <h2
                        style={{
                          fontSize: 50,
                          marginBottom: 30,
                          fontFamily: "Lato, sans-serif",
                          fontWeight: "900",
                          textAlign: "left",
                          marginTop: 50,
                        }}
                      >
                        Free Payroll Advance.
                      </h2>
                      <h3 style={{ textAlign: "left" }}>
                        We analyze your spending habits and income flow to give
                        you the cash you need to get through life until your
                        next paycheck. No credit checks. Take care of the
                        important things first, we will take care of the rest.
                      </h3>
                    </div>
                  </div>
                </Fade>
              </Col>
            </Row>
          </div>
        </section>
        <section style={{ paddingTop: 120, paddingBottom: 120 }}>
          <div style={{ width: "80%", margin: "0 auto" }}>
            <Row>
              <Col
                className="mb-sm-5 mb-md-0"
                sm={{ span: 12, order: "first" }}
                md={6}
                lg={6}
              >
                <Fade>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <div>
                      <h2
                        style={{
                          fontSize: 50,
                          marginBottom: 30,
                          fontFamily: "Lato, sans-serif",
                          fontWeight: "900",
                          textAlign: "left",
                          marginTop: 50,
                        }}
                      >
                        Smart money management at your fingertips.
                      </h2>
                      <h3 style={{ textAlign: "left" }}>
                        Do you budgeting in your bank app. We show how much to
                        set aside each month for rent, bills, etc, and provide
                        you with a budget that would maximize savings.
                      </h3>
                    </div>
                  </div>
                </Fade>
              </Col>
              <Col
                className="mb-sm-5 mb-md-0"
                sm={{ span: 12, order: "last" }}
                md={6}
                lg={6}
              >
                <Fade>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <div>
                      <img src={Chart} width={"50%"} height={"50%"}></img>
                    </div>
                  </div>
                </Fade>
              </Col>
            </Row>
          </div>
        </section>
        <section
          style={{
            paddingTop: 120,
            paddingBottom: 120,
            backgroundColor: "#FAFAFA",
          }}
        >
          <div style={{ width: "80%", margin: "0 auto" }}>
            <Row>
              <Col
                className="mb-sm-5 mb-md-0"
                sm={{ span: 12, order: "last" }}
                md={{ span: 6, order: "first" }}
                lg={6}
              >
                <Fade>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <div>
                      <img src={CreditPhone} width={"50%"} height={"50%"}></img>
                    </div>
                  </div>
                </Fade>
              </Col>
              <Col
                className="mb-sm-5 mb-md-0"
                sm={{ span: 12, order: "first" }}
                md={{ span: 6, order: "last" }}
                lg={6}
              >
                <Fade>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <div>
                      <h2
                        style={{
                          fontSize: 50,
                          marginBottom: 30,
                          fontFamily: "Lato, sans-serif",
                          fontWeight: "900",
                          textAlign: "left",
                          marginTop: 50,
                        }}
                      >
                        Build Credit With Your Monthly Bills
                      </h2>
                      <h3 style={{ textAlign: "left" }}>
                        No credit or poor credit? No worries. We help you build
                        credit by reporting your monthly reoccuring expenses to
                        the credit bureaus free of charge.
                      </h3>
                    </div>
                  </div>
                </Fade>
              </Col>
            </Row>
          </div>
        </section>
        <section id="mission" style={{ paddingTop: 120, paddingBottom: 120 }}>
          <div style={{ width: "80%", margin: "0 auto" }}>
            <Row>
              <Col
                className="mb-sm-5 mb-md-0"
                sm={{ span: 12, order: "first" }}
                md={12}
                lg={12}
              >
                <Fade>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      height: "100%",
                    }}
                  >
                    <div>
                      <h2
                        style={{
                          fontSize: 50,
                          marginBottom: 30,
                          fontFamily: "Lato, sans-serif",
                          fontWeight: "900",
                          textAlign: "left",
                          marginTop: 50,
                        }}
                      >
                        Our Mission
                      </h2>
                      <h3 style={{ textAlign: "left" }}>
                        Our mission is to provide financial access to every
                        person, regardless of where they are from and what kind
                        of financial history you have. We want to make it easy
                        for everyone to get paid, manage money, gain financial
                        literacy, and build credit. Join us on the journey to
                        make financial services equitable for all.
                      </h3>
                    </div>
                  </div>
                </Fade>
              </Col>
            </Row>
          </div>
        </section>
      </Container>
      <footer
        style={{
          padding: 50,
          borderTop: "1px solid",
          marginTop: 0,
          backgroundColor: "#0984E3",
        }}
      >
        <Row>
          <Col
            className="mb-sm-5 mb-md-5"
            style={{ textAlign: "left", marginBottom: 50 }}
            sm={12}
            md={6}
          >
            <img src={Logo} width={"30%"} height={"30%"}></img>
            <p style={{ marginTop: 30, color: "#ffffff" }}>
              The Attain Mastercard® Debit Card is provided by The Bancorp Bank,
              Member FDIC, pursuant to license by Mastercard International
              Incorporated. Mastercard is a registered trademark, and the
              circles design is a trademark of Mastercard International
              Incorporated. Program Management services provided by Galileo
              Financial Technologies, LLC.
            </p>
            <Link to="/terms-of-services">
              <span
                style={{
                  marginRight: 20,
                  color: "black",
                  textDecoration: "underline",
                }}
              >
                Terms of Services
              </span>
            </Link>
            <Link to="/privacy-policy">
              <span
                style={{
                  marginRight: 20,
                  color: "black",
                  textDecoration: "underline",
                }}
              >
                Privacy Policy
              </span>
            </Link>
          </Col>
          <Col sm={12} md={6}>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <div>
                <h1
                  style={{
                    fontSize: 50,
                    fontFamily: "Lato, sans-serif",
                    fontWeight: "300",
                  }}
                >
                  Join the waitlist
                </h1>
                <form onSubmit={submit} style={{ marginTop: 30 }}>
                  <div
                    class="input-group"
                    style={{ border: "1px solid black", borderRadius: 5 }}
                  >
                    <input
                      type="email"
                      class="form-control"
                      placeholder="Email Address"
                      style={{ height: 50, display: "inline", border: "None" }}
                      onChange={handleChange}
                    ></input>
                    <span class="input-group-btn">
                      <Button
                        className="vrlps-trigger"
                        style={{
                          fontSize: 20,
                          height: 50,
                          backgroundColor: "black",
                          display: "inline",
                          border: "None",
                          borderStyle: "None",
                          borderTopLeftRadius: 0,
                          borderBottomLeftRadius: 0,
                          borderTopRightRadius: 5,
                          borderBottomRightRadius: 5,
                        }}
                        type="submit"
                      >
                        Join Waitlist
                      </Button>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </Col>
        </Row>
      </footer>
    </div>
  );
};

export default Home;
