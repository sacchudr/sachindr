import React from 'react'
import Contact from './Contact'
import Navbar from './Navbar'
import Home from './Home'
import { Route, Routes } from 'react-router-dom'
import About from './About'
import Parameeter from './Parameeter'
import Apikeys from './Api-keys'
import './omdb.css/omdbapp.css'
import Footer from './Footer'
import Carousell from './Carousels'

const OMDBapp = () => {
  return (
    <React.Fragment>
      <div className='omdbmainparent'>
      <Navbar/>
            <Routes>
              <Route path='/' Component={Home}/>
              <Route path='/Contact' Component={Contact}/>
              <Route path='/About' Component={About}/>
              <Route path='/Parameeter' Component={Parameeter}/>
              <Route path='/Apikeys' Component={Apikeys}/>
            </Routes>
            <Carousell/>
            <div className='footer'>
        <Footer/>
        </div>
      </div>      
    
    </React.Fragment>
  )
}
export default OMDBapp