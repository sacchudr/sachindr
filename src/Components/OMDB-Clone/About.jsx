import React from 'react'
import './omdb.css/About.css'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <React.Fragment>
        <div className='contactcontent'>
                <div className='contactcontent1'>What OMDBCLONE</div>
                <div className='contactcontent2'>is all about</div>
                <div className='contactcontent3'>What makes us OMDBCLONE</div>
                </div>
    <div className='allchildparent'>
        <div className='omdbapi'>
        <div className='omdbapi1'>
        <p className='apiheading'>OMDB API</p>
        <p className='omdbfullform'>The Open Movie Database</p>
        <p>The OMDb API is a RESTful web service to
                 obtain movie information, all content 
                 and images on the site are contributed and maintained by our users.</p>
        <p>If you find this service useful, please consider making a one-time donation or become a patron.</p>
        </div>
        <div className='posterapi'>
            <div className='apiimg'>
            <img src="https://www.omdbapi.com/src/poster.jpg"  alt="" />
            </div>
            <div className='posterapi1'>
                <h3>Poster API</h3>
                <p>The Poster API is only available to patrons.</p>
                <p>Currently over 280,000 posters, updated daily with resolutions up to 2000x3000.</p>
            </div>
        </div>
        </div>
        <div className='cards'>
            <h3>Attention Users</h3>
            <p>04/08/19 - Added support for eight digit IMDb IDs.</p>
            <p>01/20/19 - Supressed adult content from search results.</p>
            <p>01/20/19 - Added Swagger files (YAML, JSON) to expose
            current API abilities and upcoming REST functions.</p>
            <button className='patronbutton'>Becom a Patron</button> 
        </div>
        <div className='cards'>
            <h1>Sponsors</h1>
            <div className='sponsors'>
            <a href="inst">Home</a>
            <a href="inst">Home</a>
            <a href="inst">Home</a>
            <a href="inst">Home</a>
            <a href="inst">Home</a>
            <a href="inst">Home</a>
            <a href="inst">Home</a>
            <a href="inst">Home</a>
            <a href="inst">Home</a>
            <a href="inst">Home</a>
            <a href="inst">Home</a>
            <a href="inst">Home</a>
            <a href="inst">Home</a>
            <a href="inst">Home</a>
            <a href="inst">Home</a>
            <a href="inst">Home</a>
            <a href="inst">Home</a>
            <a href="inst">Home</a>
            <a href="inst">Home</a>
            <a href="inst">Home</a>
            <a href="inst">Home</a>
            <a href="inst">Home</a>
            </div>
        </div>
    </div>
    </React.Fragment>
  )
}

export default About