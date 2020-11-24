import React from 'react'
import Logo from './logo.png'


import ReactGA from 'react-ga';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import fee from './fee.svg'
import goals from './goals.svg'
import big from './big.svg'
const Product = () => {
    
    ReactGA.pageview(window.location.pathname + window.location.search); 
    return (
        <div>
             <div style={{display:"flex", alignItems:"center", justifyContent:"center", height:"100vh"}}>
                <div style={{width:"90%"}}>
                    <img src={Logo} width="243" height="135"></img>
                    <div style={{marginTop:50}}>
                    <Row style={{}}>
                    <Col className="mb-5 mb-lg-0"sm={12} lg={4}>  

                    
                        <img src={fee} width="100" height="100"></img>
                        <h2>No Fees</h2>
                        <p style={{width:"70%", margin:"0 auto"}}>That's right. Lotty is completely free, so you can win without losing money! Win Win!</p>

                        
                        
                    </Col>
                    <Col className="mb-5 mb-md-0" sm={12} lg={4}>       
                        <img src={goals} width="100" height="100"></img>
                        <h2>Set Goals</h2>
                        <p style={{width:"70%", margin:"0 auto"}}>Achieve your money goals by choosing where you want to deposit your money. #goals</p>
                        
                    </Col>
                    <Col className="mb-5 mb-md-0" sm={12} lg={4}>       
                        <img src={big} width="100" height="100"></img>
                        <h2>Win Big</h2>
                        <p style={{width:"70%", margin:"0 auto"}}>When is the last time you won a lottery? Lotty makes it easy for you to win money by depositing money.</p>
                        
                    </Col>
               

                </Row>
                </div>
                </div>
            </div>
        </div>
    )
}

{/* <h1 style={{margin:20, fontFamily:"Lato", fontSize:50}}>Your new financial saving app!</h1>
                        <p style={{margin:20, fontFamily:"Lato", fontSize:20}}>1. Deposit money into your goal-specific accounts.</p>
                        <p style={{margin:20, fontFamily:"Lato", fontSize:20}}>2. Gain a ticket into our drawing with every $20 deposited at no cost.</p>  
                        <p style={{margin:20, fontFamily:"Lato", fontSize:20}}>3. Reach your financial goals sooner with us!</p>

                        <p style={{margin:20, fontFamily:"Lato", fontSize:30}}>Banks and Sponsors pay us so you don't have to.</p> */}

export default Product
