import React, { useState } from 'react'
import {  KeyboardArrowDownOutlined, KeyboardArrowUpRounded } from '@mui/icons-material'

const Accprops = ({id,qustion,ans}) => {
    let [state,setstate]=useState()

     const click=()=>{
        setstate(!state)
     }
  return (
    <div>
        <p style={{display:"flex",
                   alignItems:"center",
                   }}onClick={click}>
                    {id}.{qustion}
        {state? <KeyboardArrowUpRounded/>:<KeyboardArrowDownOutlined/>}</p>
        <p data-tested="Delet">{state? ans:""}</p>
    </div>
  )
}
export default Accprops