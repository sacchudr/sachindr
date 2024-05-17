import React from 'react'
import './omdb.css/Footer.css'
import { Facebook, Instagram, LinkedIn, Twitter } from '@mui/icons-material'

const Footer = () => {
  return (
    <footer>
        <div className='footer1'> 
          <div className='footerlogo'>
            <h1 className='logo'>OMDBCLONE</h1>
            <p>OMDb -Open movie data baseThe OMDb API is a RESTful web service to obtain movie information, all content and images on the site are contributed and maintained by our users.</p>
          </div>
          <div className='footerinner'>
          <div className='quicklinks'>
            <h4>Quick Links</h4>
            <ul>
              <li>Home</li>
              <li>About us</li>
              <li>Services</li>
              <li>Api-keys</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className='socialmedia'>
            <h4>SOCIAL MEDIA</h4>
            <ul>
              <li><LinkedIn/></li>
              <li><Instagram/></li>
              <li><Facebook/></li>
              <li><Twitter/></li>
            </ul>
          </div>
          <div className='footerinput'>
            <h4>Let's Stay Connected</h4>
            <p>Enter your email to unlock 10% OFF</p>
            <div className='subscribe'>
              <input type="text" name="" id="footerinput" placeholder='Enter Email'/>
              <button className='footerbtn'>Subscribe</button>
            </div>
          </div>
          </div>
        </div>
        <div className='allright'>
          <p>@2024 All rights reserved.</p>
        </div>

    </footer>
  )
}

export default Footer