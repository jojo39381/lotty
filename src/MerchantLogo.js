import React, {useState} from 'react'
const logoStyle = {
    margin:10,
    opacity:1
}

const logoHoverStyle = {
    margin:10,
    opacity: 0.2,
    backgroundColor:"lightgray"
}
const MerchantLogo = ({image, discount}) => {
    const [imgHover, setImgHover] = useState(false)
    function handleHover(event) {
        setImgHover(!imgHover)
        if (imgHover) {
            
            
        }
        else {
         
        }
    }
    return (
        <div onMouseLeave={handleHover} onMouseEnter={handleHover} style={{display:"inline-block", position:"relative"}}>
            <img style={imgHover ? logoHoverStyle : logoStyle} src={image} width="150px" height="100px" alt="Logo"></img>
            <h5 style={{backgroundColor:"transparent", position:"absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", opacity: imgHover ? 1 : 0}}>{discount}% Cashback</h5>
        </div>
    )
}

export default MerchantLogo
