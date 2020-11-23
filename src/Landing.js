import React, {useState} from 'react'
import Logo from './logo.png'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import {saveEmail} from './actions/save.js'
import {Link} from 'react-router-dom'
const Landing = () => {
    const [contact, setContact] = useState("")
    function submit(event) {
        saveEmail(contact)
        event.preventDefault()
    }
    function handleChange(event) {
        setContact(event.target.value)
    }
    return (
        <div >
            <div style={{display:"flex", alignItems:"center", justifyContent:"center", height:"100vh"}}>
                <div style={{width:"70%"}}>
                <img src={Logo} width="162" height="90" ></img>
                <h1 style={{fontSize:40, fontFamily:"Lato, sans-serif"}}>We redesigned savings with your goals in mind.</h1>
                <p style={{fontSize:20, fontFamily:"Lato, sans-serif", fontWeight:300}}>No Fees. Set Goals. Win Money.</p>
                <Link to="/home"><p style={{fontSize:15}}>Learn More</p></Link>
                <Form onSubmit={submit} >
                            <Form.Group controlId="formGroupEmail">
                            <Form.Control value={contact} onChange={handleChange} type="email" placeholder="Enter email" style={{width:"100%", margin:"0 auto", textAlign:"center"}}/>
                            </Form.Group>
                            <Button variant="primary" type="submit" style={{width:"100%"}}>
                                Join Waitlist
                            </Button>
                            </Form>

                <p style={{marginTop:20}}>Questions? Email us at founders@lotty.ai</p>
                </div>
            </div>
        </div>
    )
}

export default Landing
