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
                <h4>Crown Star Colours Pvt. Ltd.</h4>
                <div style={{marginTop: '1rem', fontSize: '0.85rem', color: '#303030'}}>
                    <p><strong>Manufacturing Unit:</strong> 191, Panchratna 2, Industrial Estate, Ahmedabad - 382425</p>
                    <p><strong>Registered Office:</strong> 2, Archan Appt., Jodhpur Gam Road, Satellite - 380015</p>
                    <p><strong>Depot:</strong> Nagori Farm, Agra Link Road, Near New RTO, Jaipur - 302017</p>
                    <p style={{marginTop: '0.5rem', fontSize: '0.75rem'}}>ISO 14001:2015 | IATF 16949:2016 | BS OHSAS 18001:2007</p>
                </div>
            </div>
        </div>
        <div className="blur blur-f-1"></div>
        <div className="blur blur-f-2"></div>
      </div>
  )
}

export default Footer
