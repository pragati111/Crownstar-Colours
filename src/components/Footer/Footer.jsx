import React from 'react'
import './Footer.css'
import Logo from "../../assets/crown_logo.png"

const Footer = () => {
  return (
      <div className="Footer-container">
        <hr />
        <div className="footer">
            {/*<div className="social-links">
                <img src={Github} alt="" />
                <img src={Instagram} alt="" />
                <img src={LinkedIn} alt="" />
            </div>*/}
        
            

            <div className="footer-info" style={{textAlign: 'center', marginTop: '2rem', color:"#303030"}}>
                <div className='logo-f'>
                <img src={Logo} alt="" />
            </div>
                
                <div style={{marginTop: '1rem', fontSize: '0.85rem', color: '#303030'}}>
                    <p><strong>Phone Number: +918290062999</strong></p>
                    <p><strong>Manufacturing Unit:</strong> 191, Panchratna 2, Industrial Estate, Kamod to Paldi Road, Ahmedabad - 382425</p>
                    <p><strong>Registered Office:</strong> 2, Archan Aptt., Jodhpurgam Road, Satellite - 380015</p>
                    <p><strong>Depot Address:</strong> Nagori Farm, Agra Link Road, Near New RTO Jagatpura, Jaipur - 302017</p>
                    <p style={{marginTop: '0.5rem', fontSize: '0.60rem'}}>CIN:U46634GJ2023PTC139002 | GST:24AAKCC8718Q1ZY</p>                    
                </div>
            </div>
        </div>
        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
      </div>
  )
}

export default Footer
