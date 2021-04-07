import React, {useState}from 'react'
import NavBar from './NavBar.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {saveEmail} from './actions/save.js'
import Carousel from 'react-bootstrap/Carousel'
import iphone from './rewards.png'
import otheriphone from './otheriphone.png'
import lock from './lock.svg'
import boring from './boring.svg'
import { Link } from 'react-router-dom';
import victoria from './assets/victoria.png'
import ttoust from './assets/ttoust.png'
import tptea from './assets/tptea.png'
import sliverpizza from './assets/sliverpizza.png'
import philz from './assets/philz.jpeg'
import lululemon from './assets/lululemon.png'
import imm from './assets/imm.png'
import hm from './assets/h&m.png'
import gongcha from './assets/gongcha.png'
import forever from './assets/forever.png'

const logoStyle = {
    margin:10
}
const Home = () => {
    const [contact, setContact] = useState("")
    function submit(event) {
        saveEmail(contact)
        event.preventDefault()
    }
    function handleChange(event) {
        setContact(event.target.value)
    }
    return (
        <div>
            
            <Container fluid style={{padding:0, overflow:"hidden"}}>
               
                <NavBar hideOptions={false}></NavBar>
                <div style={{width:"80%", margin:"0 auto"}}>
                <Row style={{marginTop:50}}>
                    <Col className="mb-5 mb-md-0"   sm={12} md={7} lg={6} style={{display:"flex", justifyContent:"center", alignItems:"center"}}>
                        <div style={{width:"100%"}}>
                            <h1 style={{fontSize:"5vw", marginBottom:30, fontFamily: "Lato, sans-serif", fontWeight:"900", textAlign:"left"}}>The Card That Rewards You Based on Your Interests</h1>
                            <p style={{fontSize:"2.5vh", marginBottom:30, fontFamily: "Lato, sans-serif", fontWeight:"300", textAlign:"left"}}>The Celestial Card lets you earn rewards every time you swipe, based on your interests. We partner with local and large brands to bring you discounts and rewards. No Fees. No Suprise Charges.</p>
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Email Address" style={{height:50, display:"inline"}}></input>
                                <span class="input-group-btn">
                                <Button type="button" className="vrlps-trigger" style={{fontSize:20, height:50, backgroundColor:"black", display:"inline", borderStyle:"None"}}>Join Waitlist</Button>
                                </span>
                            </div>
                            
                            
                            
                        </div>
                       
                    </Col>           

                    <Col className="mb-sm-5 mb-md-0" sm={12} md={5} lg={6}>
                        <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100%"}}>
                        <img src={iphone} width="65%"></img>
                        </div>
                    </Col>
                </Row>
               
             
                
                <section id="rewards" style={{marginTop:100}}>
  
                <Row>
                    <Col sm={12} md={2} >       
                        <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100%"}}>
                        <h2 style={{fontSize:40, textAlign:"left"}}>Cashbacks & Rewards</h2>
                        
                        </div>
                    </Col>
                    <Col sm={12} md={10}>       
                        <img style={logoStyle} src={victoria} width="150px" height="100px"></img>
                        <img style={logoStyle} src={ttoust} width="150px" height="100px"></img>
                        <img style={logoStyle} src={tptea} width="150px" height="100px"></img>
                        <img style={logoStyle} src={sliverpizza} width="150px" height="100px"></img>
                        <img style={logoStyle} src={philz} width="150px" height="100px"></img>
                        <img style={logoStyle} src={lululemon} width="150px" height="100px"></img>
                        <img style={logoStyle} src={imm} width="150px" height="100px"></img>
                        <img style={logoStyle} src={hm} width="150px" height="100px"></img>
                        <img style={logoStyle} src={gongcha} width="150px" height="100px"></img>
                        <img style={logoStyle} src={forever} width="150px" height="100px"></img>
                    </Col>
                    

                </Row>
                </section>
                
                <section id="how_it_works" style={{marginTop:100}}>
                <hr></hr>
                <Row style={{}}>
                    <Col md={6}>       
                    <h2 style={{fontSize:50, marginBottom:30, fontFamily: "Lato, sans-serif", fontWeight:"900", textAlign:"left",marginTop:50}}>How it works</h2>
                        <ul>
                            <li style={{marginBottom:50, textAlign:"left", fontSize:20, fontFamily: "Lato, sans-serif", fontWeight:"900"}}>
                                Each swipe gets you a chance to win a reward!
                            </li>
                            <li style={{marginBottom:50, textAlign:"left", fontSize:20, fontFamily: "Lato, sans-serif", fontWeight:"900"}}>
                                Win discounts/cashbacks, in-store credits, and other exclusive rewards
                            </li>
                            <li style={{marginBottom:50, textAlign:"left", fontSize:20, fontFamily: "Lato, sans-serif", fontWeight:"900"}}>
                                Guaranteed rewards every time
                            </li>
                            <li style={{marginBottom:50, textAlign:"left", fontSize:20, fontFamily: "Lato, sans-serif", fontWeight:"900"}}>
                                $0 Fees, $0 Surprise Charges
                            </li>
                            
                        </ul>
                    </Col>
                    <Col className="mb-sm-5 mb-md-0"  md={6}>
                    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100%"}}>
                        <img src={otheriphone} width="65%"></img>
                        </div>
                    </Col>
                    

                </Row>
                </section>
                
                <section id="f&q" style={{marginTop:100}}>
                    <hr></hr>
                    <Row>
                    <Col md={6}>       
                        <h2 style={{fontSize:50, marginBottom:30, fontFamily: "Lato, sans-serif", fontWeight:"900", textAlign:"left",marginTop:50}}>Frequently Asked Questions</h2>
                        <ul style={{listStyleType:"None"}}>
                            <li style={{marginBottom:30, textAlign:"left", fontSize:20, fontFamily: "Lato, sans-serif", fontWeight:"900"}}>
                                Q: How is this possible?
                            </li>
                            <li style={{marginBottom:30, textAlign:"left", fontSize:20, fontFamily: "Lato, sans-serif", fontWeight:"300"}}>
                                A: Local and large companies pays us to get our customers to shop at their store, and we receive a cut of that revenue.
                            </li>
                            <li style={{marginBottom:30, textAlign:"left", fontSize:20, fontFamily: "Lato, sans-serif", fontWeight:"900"}}>
                                Q: Is there really no fees?
                            </li>
                            <li style={{marginBottom:30, textAlign:"left", fontSize:20, fontFamily: "Lato, sans-serif", fontWeight:"300"}}>
                                A: Yes. No fees. In addition to the fee we charge merchants, we also get a share of the interchange fees to cover our costs.
                            </li>
                            <li style={{marginBottom:30, textAlign:"left", fontSize:20, fontFamily: "Lato, sans-serif", fontWeight:"900"}}>
                                Q: Why does this exist?
                            </li>
                            <li style={{marginBottom:30, textAlign:"left", fontSize:20, fontFamily: "Lato, sans-serif", fontWeight:"300"}}>
                                A: We think that debit cards should be fun and rewarding to the customer, and that customers should get rewarded based on what they want. Tradition debit cards offer little to no benefits, and we are here to change that!
                            </li>
                            
                        </ul>
                    </Col>
                    
                    </Row>
                </section>
                </div>
            
            </Container>
            <footer style={{padding:50}}>
                <Row>
                    <Col  style={{textAlign:"left"}} sm={12} md={6}>
                        <h1 style={{fontSize:50,  fontFamily: "Lato, sans-serif", fontWeight:"300"}}>Celestial</h1>
                        <p>
                        The Celestial Mastercard® Debit Card is provided by The Bancorp Bank, Member FDIC, pursuant to license by Mastercard International Incorporated. Mastercard is a registered trademark, and the circles design is a trademark of Mastercard International Incorporated. Program Management services provided by Galileo Financial Technologies, LLC. Spend anywhere Mastercard is accepted.
                        </p>
                        <Link to="/terms-of-services"><span style={{marginRight:20, color:"black"}}>Terms of Services</span></Link>
                        <Link to="/privacy-policy"><span style={{marginRight:20, color:"black"}}>Privacy Policy</span></Link>
                       
                    </Col>
                    <Col sm={12} md={6}>
                    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100%"}}>
                    <div>
                        <h1 style={{fontSize:50,  fontFamily: "Lato, sans-serif", fontWeight:"300"}}>Join the waitlist</h1>
                            <div class="input-group" style={{marginTop:30}}>
                                    <input type="text" class="form-control" placeholder="Email Address" style={{height:50, display:"inline"}}></input>
                                    <span class="input-group-btn">
                                    <Button type="button" className="vrlps-trigger" style={{fontSize:20, height:50, backgroundColor:"black", display:"inline", borderStyle:"None"}}>Join Waitlist</Button>
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </footer>
        </div>
    )
}

export default Home
 