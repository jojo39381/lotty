import React, {useState}from 'react'
import NavBar from './NavBar.js'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import {saveEmail} from './actions/save.js'
// import Carousel from 'react-bootstrap/Carousel'
import iphone from './rewards.png'
import otheriphone from './otheriphone.png'
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
import faqphone from './faqphone.png'
import Modal from 'react-modal';
 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
const logoStyle = {
    margin:10
}
const Home = () => {
    const [contact, setContact] = useState("")
    const [modalIsOpen,setIsOpen] = useState(false);
    function submit(event) {
        if (contact !== "") {
            saveEmail(contact)
            openModal()
            
        }
        event.preventDefault()
        
    }
    function handleChange(event) {
        setContact(event.target.value)
        
    }
    function openModal() {
        setIsOpen(true);
      }
     
      function afterOpenModal() {
        // references are now sync'd and can be accessed.
        // subtitle.style.color = '#f00';
      }
     
      function closeModal(){
        setIsOpen(false);
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
                            <form onSubmit={submit}>
                            <div class="input-group">
                                <input type="email" class="form-control" placeholder="Email Address" style={{height:50, display:"inline"}} onChange={handleChange}></input>
                                <span class="input-group-btn">
                                <Button className="vrlps-trigger" style={{fontSize:20, height:50, backgroundColor:"black", display:"inline", borderStyle:"None"}} type="submit">Join Waitlist</Button>
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
         <p>You will be one of the first to know when we launch!</p>
         <button onClick={closeModal} style={{border:"None", backgroundColor:"transparent", fontSize:25, position:"absolute", top:0, right:0, height:30, width:50}}>X</button>
        </Modal>
                            
                            
                            
                        </div>
                       
                    </Col>           

                    <Col className="mb-sm-5 mb-md-0" sm={12} md={5} lg={6}>
                        <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100%"}}>
                        <img src={iphone} width="65%" alt="Iphone"></img>
                        </div>
                    </Col>
                </Row>
               
             
                
                <section id="rewards" style={{marginTop:100}}>
  
                <Row>
                    <Col sm={12} md={2} >       
                        <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100%"}}>
                        <div>
                        <h2 style={{fontSize:40, textAlign:"left"}}>Cashbacks & Rewards</h2>
                        <p>(At least 5%)</p>
                        </div>
                        </div>
                    </Col>
                    <Col sm={12} md={10}>       
                        <img style={logoStyle} src={victoria} width="150px" height="100px" alt="Logo"></img>
                        <img style={logoStyle} src={ttoust} width="150px" height="100px" alt="Logo"></img>
                        <img style={logoStyle} src={tptea} width="150px" height="100px" alt="Logo"></img>
                        <img style={logoStyle} src={sliverpizza} width="150px" height="100px" alt="Logo"></img>
                        <img style={logoStyle} src={philz} width="150px" height="100px" alt="Logo"></img>
                        <img style={logoStyle} src={lululemon} width="150px" height="100px" alt="Logo"></img>
                        <img style={logoStyle} src={imm} width="150px" height="100px" alt="Logo"></img>
                        <img style={logoStyle} src={hm} width="150px" height="100px" alt="Logo"></img>
                        <img style={logoStyle} src={gongcha} width="150px" height="100px" alt="Logo"></img>
                        <img style={logoStyle} src={forever} width="150px" height="100px" alt="Logo"></img>
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
                                Each swipe or deposit (at least $50) gets you a chance to win a reward!
                            </li>
                            <li style={{marginBottom:50, textAlign:"left", fontSize:20, fontFamily: "Lato, sans-serif", fontWeight:"900"}}>
                                Win discounts/cashbacks, in-store credits, and other rewards
                                <p style={{marginTop:20, fontWeight:700, textDecoration:"underline"}}>Rewards Include:</p>
                                <ul>
                                    <li style={{marginBottom:30,fontWeight:700}}>
                                        5% - 25% cashback on purchases
                                    </li>
                                    <li style={{marginBottom:30,fontWeight:700}}>
                                        Up to 200 dollar In-Store Credit
                                    </li>
                                    <li style={{marginBottom:30,fontWeight:700}}>
                                        Shopping sprees up to $1000
                                    </li>
                                </ul>
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
                        <img src={otheriphone} width="65%" alt="Iphone"></img>
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
                    <Col md={6}>
                    <div style={{display:"flex", justifyContent:"center", alignItems:"center", height:"100%"}}>
                        <img src={faqphone} width="65%" alt="Home"></img>
                        </div>
                    </Col>
                    </Row>
                </section>
                </div>
            
            </Container>
            <footer style={{padding:50}}>
                <Row>
                    <Col className="mb-sm-5 mb-md-0" style={{textAlign:"left"}} sm={12} md={6}>
                        <h1 style={{fontSize:50,  fontFamily: "Lato, sans-serif", fontWeight:"300"}}>Celestial</h1>
                        <p>All rewards and cashback at merchants are funded by Celestial Financials. There are no affiliation between Celestial Financials and any merchants listed above.</p>
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
                           <form onSubmit={submit}>
                            <div class="input-group" style={{marginTop:30}}>
                                <input type="email" class="form-control" placeholder="Email Address" style={{height:50, display:"inline"}} onChange={handleChange}></input>
                                <span class="input-group-btn">
                                <Button className="vrlps-trigger" style={{fontSize:20, height:50, backgroundColor:"black", display:"inline", borderStyle:"None"}} type="submit">Join Waitlist</Button>
                                </span>
                            
                            </div>
                            </form>
                            </div>
                        </div>
                    </Col>
                </Row>
            </footer>
        </div>
    )
}

export default Home
 