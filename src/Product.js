import React from 'react'
import Logo from './logo.png'

const Product = () => {
    return (
        <div>
             <div style={{display:"flex", alignItems:"center", justifyContent:"center", height:"100vh"}}>
                <div style={{width:"70%"}}>
                    <img src={Logo} width="243" height="135"></img>
                    <h1 style={{fontSize:50, fontFamily:"Lato, sans-serif"}}>How Does It Work?</h1>
                    <p style={{fontSize:30, fontFamily:"Lato, sans-serif", fontWeight:300}}>Lotty is mobile banking app that wants to help you save money. Every week, we host a draw of up to 10 million dollars. By depositing with us, you get a ticket into the draw. You get a ticket for every 20 dollars you deposit.</p>
                    <p style={{fontSize:30, fontFamily:"Lato, sans-serif", fontWeight:300}}>So what's the catch? No catch. Banks and Sponsors pay us, and we pass our revenue onto you!</p>
                </div>
            </div>
        </div>
    )
}

export default Product
