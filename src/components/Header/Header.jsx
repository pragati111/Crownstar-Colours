import React, { useState } from 'react'
import './Header.css'
import Logo from '../../assets/crown_logo.png'
import Bars from '../../assets/bars.png'
import { Link } from "react-scroll"
const Header = () => {
  const mobile = window.innerWidth<=768?true:false
  const [menuOpened, setMenuOpened] =useState(false);
  return (
    <div className="header">
      <img src={Logo} alt="" className="logo" />
      {
        (menuOpened===false && mobile===true)?
        (<div
         style={{backgroundColor: '#ADD8E6', padding:"0.5rem", borderRadius:"5px"}} onClick={()=>setMenuOpened(true)}>
          <img src={Bars} alt="" style={{width: '1.5rem',height: '1.5rem'}}/>
         </div>):
         <ul className='header-menu' style={mobile && !menuOpened ? {display: 'none'} : {}}>
        <li><Link onClick={()=>setMenuOpened(false)} to='home' span={true} smooth={true}>Home</Link></li>
        <li><Link onClick={()=>setMenuOpened(false)} to='programs' span={true} smooth={true}>Products</Link></li>
        <li><Link onClick={()=>setMenuOpened(false)} to='product-range-container' span={true} smooth={true}>Extended Product Range</Link></li>
        <li><Link onClick={()=>setMenuOpened(false)} to='lab-container' span={true} smooth={true}>Major Lab Equipments</Link></li>
        <li><Link onClick={()=>setMenuOpened(false)} to='reasons' span={true} smooth={true}>Why us?</Link></li>
        <li><Link onClick={()=>setMenuOpened(false)} to='join-us' span={true} smooth={true}>Contact Us</Link></li>
      </ul>
      }
    </div>
  )
}

export default Header
