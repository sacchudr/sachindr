import { Padding } from '@mui/icons-material'
import matchers from '@testing-library/jest-dom/matchers'
import React, { useEffect, useState } from 'react'

const Touchme = () => {

    const [score, setscore]=useState(0)
    const [time, settime]=useState(10)
    const [position, setposition]=useState({x:0, y:0})

    const handleclick=()=>{
        setscore(score+1)
        setposition(getRandomposition())
    }

    const getRandomposition=()=>{
        const x=Math.floor(Math.random()*500)
        const y=Math.floor(Math.random()*600)
        return{x,y}
    }
    useEffect(()=>{
        const intervall =setInterval(() => {
            settime(time-1)
        }, 1000)
        return()=>clearInterval(intervall)
    },[time])

    useEffect(()=>{
        if(time===0){
            alert(`game over! your scre is ${score}`)
        }
    })

  return (
    <div>
        <p>Score:{score}</p>
        <p>Time:{time}</p>
        <button 
        style={{
            position:"absolute",
            left:position.x,
            top:position.y,
            Padding:"90px",
            height:"60px",
            width:"80px",
            backgroundColor:"blue",
            color:"white"
        }}
        onMouseMove={handleclick}
        >Touch me if you dare</button>

    </div>
  )
}

export default Touchme