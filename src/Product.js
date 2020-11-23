import React from 'react'
import Logo from './logo.png'

const Product = () => {
    return (
        <div>
             <div style={{display:"flex", alignItems:"center", justifyContent:"center", height:"100vh"}}>
                <div style={{width:"70%"}}>
                    <img src={Logo} width="243" height="135"></img>
                    <div>
                        <h1>Your new financial saving app!</h1>
                        <p>1. Deposit money into your goal-specific accounts.</p>
                        <p>2. Gain a ticket into our lottery with every $20 deposited at no cost.</p>  
                        <p>3. Learn more about personal financial management.</p>

                        <p>We keep your account secured at no cost while providing a chance to win money from our partners. </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product
