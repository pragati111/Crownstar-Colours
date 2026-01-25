import React, { useState, useEffect } from 'react'
import './Programs.css'
import {programsData} from '../../data/programsData'
import RightArrowImg from '../../assets/rightArrow.png'
const Programs = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsVisible(entry.isIntersecting); // Set to true when entering, false when leaving
    }, { threshold: 0.1 });

    const programsElement = document.getElementById('programs');
    if (programsElement) {
      observer.observe(programsElement);
    }

    return () => {
      if (programsElement) {
        observer.unobserve(programsElement);
      }
    };
  }, []);

  return (
    <div className='Programs' id='programs'>
      {/*header */}
      <div className={`programs-header ${isVisible ? 'animate-visible' : ''}`}>
        <span className='stroke-text'>Explore Our</span>
        <span>Product Range</span>
      </div>
      <div className="program-categories">
        {programsData.map((programs, index)=>(
            <div className={`category ${isVisible ? 'animate-visible' : ''}`} key={index} style={{animationDelay: `${index * 0.1}s`}}>
                {programs.image}
                <span>{programs.heading}</span>
                <span>{programs.details}</span>
                {/*<div className="join-now"><span>Learn More</span><img src={RightArrowImg} alt="" /></div>*/}
            </div>
        ))}
      </div>
    </div>
  )
}

export default Programs
