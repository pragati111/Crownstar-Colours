import React from 'react'
import './Hero.css'
import Header from '../Header/Header'
import crown_logo from "../../assets/crown_logo.png"
import { motion } from 'framer-motion'
const Hero = () => {
    const transition = {type:'spring',duration:3}
    const mobile = window.innerWidth<=768?true:false
  return (
    <div className='hero' id='home'>
        <div className="blur hero-blur"></div>
      <div className="left-h">
        <Header/>
        {/*the-best-ad*/}
        <div className="the-best-ad">
            <motion.div
             initial={{left:mobile?'165px':'238px'}}
             whileInView={{left:'8px'}}
             transition={{...transition, type: 'tween'}}
            ></motion.div>
            <span>premium paints and coatings since 2012</span>
        </div>
        {/*hero heading*/}
        <div className="hero-text">
            <div>
                <span className='stroke-text'>Transform </span>
                <span>Your</span>
            </div>
            <div>
                <span>Spaces</span>
            </div>
            <div>
                <span>
                    Crown Star Colours delivers world-class paints, primers, and decorative products with superior quality and innovation
                </span>
            </div>
        </div>
        {/*figures*/}
        <div className="figures">
            <div><span>14+</span><span>Years In Business</span></div>
            <div><span>3000+</span><span>Projects Completed</span></div>
            <div><span>12+</span><span>Product Lines</span></div>
        </div>
        
      </div>
      <div className="right-h">
        {/*<motion.div 
        initial={{right:"-1rem"}}
        whileInView={{right:"4rem"}}
        transition={transition} className="heart-rate">
            <img src={Heart} alt="" />
            <span>Heart Rate</span>
            <span>116 bpm</span>
        </motion.div>*/}
        {/*hero images */}
        <img src={crown_logo} alt="" className='hero-image'/>
        {/*<motion.img initial={{right:'5rem'}} whileInView={{right:'29rem'}} transition={transition} src={hero_image_back} alt="" className='hero-image-back'/>*/}
        {/*calories */}
        {/*<motion.div initial={{right: "37rem"}} whileInView={{right:"5rem"}} transition={transition} className="calories">

            <img src={Calories} alt="" />
            <div>
                <span>Calories Burned</span>
                <span>220 kcal</span>
            </div>
            
        </motion.div>*/}
      </div>
    </div>
  )
}

export default Hero
