import React, { useState } from 'react'
import  './omdb.css/Navbar.css';
import {  Link } from 'react-router-dom'
import { Menu } from '@mui/icons-material';

const Navbar = () => {
  const [state, setstate]=useState()

  const click=(e)=>{
    setstate(!state)
  }

  return (
    <React.Fragment>
      <header className='omdbheader'>
      <div>
        <h1 className='logo'>OMDBCLONE</h1>
        
      </div>
      <div className='tabs'>
      <Link className='link' to="/">Home</Link>
      <Link className='link'  to="/About">About</Link>
      <Link className='link'  to="/Apikeys">Apikeys</Link>
      <Link className='link'  to="/Contact">Contact</Link>
      <Link className='link'  to="/Parameeter">Parameeter</Link>
      </div>

      <div className='menubutton'>
      <p onClick={click} ><i className='menu'>{state? <Menu/>:<Menu/> } </i></p>     
      {!state &&(
      <div className='tabs1'>
      <Link className='link' to="/">Home</Link>
      <Link className='link'  to="/About">About</Link>
      <Link className='link'  to="/Apikeys">Apikeys</Link>
      <Link className='link'  to="/Contact">Contact</Link>
      <Link className='link'  to="/Parameeter">Parameeter</Link>
      </div> 
      )}
   </div>
 
      </header>       
    </React.Fragment>
  )
}
export default Navbar