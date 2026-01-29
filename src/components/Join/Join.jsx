import React from 'react'
import './Join.css'

const Join = () => {
  return (
    <div>
      <div className="Join" id='join-us'>
        <div className='left-j'>
            <hr/>
            <div>
                <span className='stroke-text'>READY TO</span>
                <span>TRANSFORM</span>
            </div>
            <div>
                <span>YOUR SPACE</span>
                <span className='stroke-text'>WITH US?</span>
            </div>
        </div>
        <div className="right-j">
          <div className="email-container">
            <span className="email-text">sales@crownstarcolors.com</span>

            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sales@crownstarcolors.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mail-icon-link"
              aria-label="Mail us">
              <svg
                className="mailbox-icon"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round">
                <rect x="2" y="4" width="20" height="12" rx="2" ry="2"></rect>
                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Join
