import React, {useState, useEffect} from 'react'
import Logo from './logo.png'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {saveEmail} from './actions/save.js'
import {Link} from 'react-router-dom'
import ReactPixel from 'react-facebook-pixel';
import $ from 'jquery';

import ReactGA from 'react-ga';

const Landing = () => {
    
    ReactGA.initialize('UA-183883881-1');
   
  
    const [contact, setContact] = useState("")
    function submit(event) {
        saveEmail(contact)
        event.preventDefault()
    }
    function handleChange(event) {
        setContact(event.target.value)
    }

    
   

    useEffect(() => {
        window.onpopstate = e => {
            window.location.reload()
         }
    }, [])
    
   
  


    return (
        <div>
           
            

            <div style={{display:"flex", alignItems:"center", justifyContent:"center", height:"100vh"}}>
                <div style={{width:"70%"}}>
                <img src={Logo} width="243" height="135" ></img>
                <h1 style={{fontSize:40, fontFamily:"Lato, sans-serif"}}>We redesigned savings with your goals in mind.</h1>
                <p style={{fontSize:20, fontFamily:"Lato, sans-serif", fontWeight:300}}>Start Winning Money When You Deposit.</p>
                <Link to="/product"><p style={{fontSize:15}}>Learn More</p></Link>
                {/* <Form onSubmit={submit} >
                            <Form.Group controlId="formGroupEmail">
                            <Form.Control value={contact} onChange={handleChange} type="email" placeholder="Enter email" style={{width:"100%", margin:"0 auto", textAlign:"center"}}/>
                            </Form.Group>
                            <Button variant="primary" type="submit" style={{width:"100%"}}>
                                Join Waitlist
                            </Button>
                            </Form> */}

                            <div className='prefinery-form-embed'></div>

                <p style={{marginTop:20}}>Questions? Email us at <a href="founders@lotty.ai">founders@lotty.ai</a></p>
                </div>
            </div>
        </div>
    )
}

export default Landing
