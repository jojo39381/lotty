import React from 'react'
import NavBar from './NavBar.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Carousel from 'react-bootstrap/Carousel'
import iphone from './iphone.png'
import fee from './fee.svg'
import goals from './goals.svg'
import big from './big.svg'
const home = () => {
    return (
        <div>
            <NavBar></NavBar>
            <Container fluid>
                <Row style={{marginTop:50}}>
                    <Col style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <div style={{width:"100%"}}>
                            <h1 style={{fontSize:50, marginBottom:30, fontFamily: "Lato, sans-serif", fontWeight:"900"}}>10 Million.</h1>
                            <h1 style={{fontSize:50, marginBottom:30, fontFamily: "Lato, sans-serif", fontWeight:"900"}}>Every Week.</h1>
                            <h1 style={{fontSize:50, marginBottom:30, fontFamily: "Lato, sans-serif", fontWeight:"900"}}>No catch.</h1>
                            <Form>
                            <Form.Group controlId="formGroupEmail">
                            <Form.Control type="email" placeholder="Enter email" style={{width:"80%", margin:"0 auto", textAlign:"center"}}/>
                            </Form.Group>
                            <Button variant="primary" type="submit" style={{width:"80%"}}>
                                Join Waitlist
                            </Button>
                            </Form>
                        </div>
                       
                    </Col>           
                    <Col>
                        <img src={iphone} width="60%" height="100%"></img>
                    </Col>
                </Row>
                <section style={{padding:70}}>
                <h2 style={{fontSize:50, marginBottom:30, fontFamily: "Lato, sans-serif", fontWeight:"900", textAlign:"center",marginTop:50}}></h2>
                <Row style={{}}>
                    <Col>  

                    
                        <img src={fee} width="100" height="100"></img>
                        <h2>No Fees</h2>
                        <p style={{width:"60%", margin:"0 auto"}}>That's right. Lotty is completely free, so you can win without losing money! Win Win!</p>

                        
                        
                    </Col>
                    <Col>       
                        <img src={goals} width="100" height="100"></img>
                        <h2>Set Goals</h2>
                        <p style={{width:"60%", margin:"0 auto"}}>Achieve your money goals by choosing where you want to deposit your money. #goals</p>
                        
                    </Col>
                    <Col>       
                        <img src={big} width="100" height="100"></img>
                        <h2>Win Big</h2>
                        <p style={{width:"60%", margin:"0 auto"}}>When is the last time you won a lottery? Lotty makes it easy for you to win money by depositing money.</p>
                        
                    </Col>
               

                </Row>
                </section>
                <section style={{backgroundColor:"#F9F9FD", padding:70}}>
                <h2 style={{fontSize:50, fontFamily: "Lato, sans-serif", fontWeight:"900", textAlign:"center",}}>Why Us</h2>
                <Row>
                    <Col>       
                    
                        <h3>At Lotty, we believe that banking should be fun.</h3>
                        <h3>With loans, bills, and debts, we understand how hard it is to save. </h3>
                        <h3>The average millennial has less than $5000 in their saving accounts.</h3>
                        <h3>We redesigned saving to make it easy, fun, and profitable.</h3>
                    </Col>
                    

                </Row>
                </section>
                <h2 style={{fontSize:50, marginBottom:30, fontFamily: "Lato, sans-serif", fontWeight:"900", textAlign:"center",marginTop:50}}>How it works</h2>
                <Row style={{}}>
                    <Col>       
                    <Carousel style={{width:"100%", height:"100%", padding:30}}>
                        <Carousel.Item interval={1000} style={{width:"100%", height:"50%"}}>
                            <img
                            width="30%"
                            src={iphone}
                            alt="First slide"
                            style={{display:"inline-block", margin:30}}
                            />
                            <h2 style={{display:"inline-block"}}>1. Set Goals</h2>
                        </Carousel.Item>
                        <Carousel.Item interval={1000} style={{width:"100%", height:"50%"}}>
                            <img
                            width="30%"
                            src={iphone}
                            alt="First slide"
                            style={{display:"inline-block", margin:30}}
                            />
                            <h2 style={{display:"inline-block"}}>2. Make a Deposit</h2>
                        </Carousel.Item>
                        <Carousel.Item interval={1000} style={{width:"100%", height:"50%"}}>
                            <img
                            width="30%"
                            src={iphone}
                            alt="First slide"
                            style={{display:"inline-block", margin:30}}
                            />
                            <h2 style={{display:"inline-block"}}>3. Get Tickets</h2>
                        </Carousel.Item>
                        <Carousel.Item interval={1000} style={{width:"100%", height:"50%"}}>
                            <img
                            width="30%"
                            src={iphone}
                            alt="First slide"
                            style={{display:"inline-block", margin:30}}
                            />
                            <h2 style={{display:"inline-block"}}>4. Win Big</h2>
                        </Carousel.Item>
                    </Carousel>
                    </Col>
                    

                </Row>
                <section style={{backgroundColor:"#F9F9FD", padding: 50}}>
                <h2 style={{fontSize:50, marginBottom:30, fontFamily: "Lato, sans-serif", fontWeight:"900", textAlign:"center",marginTop:50}}>Is there a catch?</h2>
                <Row>
                    <Col>
                        <h2>Nope! No catch.</h2>
                        <h2>Our weekly drawings are funded by banks and sponsors.</h2>
                        <h2>They give us money, and we pass it on to you!</h2>
                    </Col>
                </Row>
                </section> 
            </Container>
            <footer style={{padding:50}}>
                <Row>
                    <Col style={{textAlign:"left"}}>
                        <h1 style={{fontSize:50}}>Lotty</h1>
                    </Col>
                    <Col>
                    <Form>
                            <Form.Group controlId="formGroupEmail">
                            <Form.Control type="email" placeholder="Enter email" style={{width:"80%", margin:"0 auto", textAlign:"center"}}/>
                            </Form.Group>
                            <Button variant="primary" type="submit" style={{width:"80%"}}>
                                Join Waitlist
                            </Button>
                            </Form>
                    </Col>
                </Row>
            </footer>
        </div>
    )
}

export default home
 