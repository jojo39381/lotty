import React from 'react'
import Logo from './logo.png'
import history from './history'

const Product = () => {
    return (
        <div>
             <div style={{display:"flex", alignItems:"center", justifyContent:"center", height:"100vh"}}>
                <div style={{width:"70%"}}>
                    <img src={Logo} width="243" height="135"></img>
                    <div style={{backgroundColor:"#0EAD69E6", borderRadius:50, color:"white", padding:50}}>
                        <h1 style={{margin:20, fontFamily:"Lato", fontSize:50}}>Your new financial saving app!</h1>
                        <p style={{margin:20, fontFamily:"Lato", fontSize:20}}>1. Deposit money into your goal-specific accounts.</p>
                        <p style={{margin:20, fontFamily:"Lato", fontSize:20}}>2. Gain a ticket into our lottery with every $20 deposited at no cost.</p>  
                        <p style={{margin:20, fontFamily:"Lato", fontSize:20}}>3. Learn more about personal financial management.</p>

                        <p style={{margin:20, fontFamily:"Lato", fontSize:30}}>We keep your account secured at no cost while providing a chance to win money from our partners. </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
