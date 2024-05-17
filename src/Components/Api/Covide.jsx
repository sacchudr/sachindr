import axios from 'axios'
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const Covide = () => {
let[state,setstate]=useState([])
let [search,setsearch]=useState('')

useEffect(()=>{
  // fetch("https://api.github.com/users")
  // fetch("https:/data.covid19india.org/data.json")
  // .then((res)=>res.json())
  // .then((dta)=>{
  //   setstate(dta.statewise)
  // })
  axios.get("https://data.covid19india.org/data.json")
  .then((res)=>setstate(res.data.statewise))
},[])
   const click=(e)=>{
    setsearch(e.target.value)
   }
   const filteredata =state.filter((data)=>
   data.state.toLowerCase().includes(search.toLowerCase()))
  
  return (
    <div>
      <div>
        <input type="text" name="" id="" 
        value={search}
        onChange={click}/>
      </div>
      {filteredata.map((obj)=>{
        let {active,state}=obj
        return(
          <div>
          <li>{active}</li>
          <li>{state}</li>
          </div>

        )
      })}
    </div>
  )
}

export default Covide