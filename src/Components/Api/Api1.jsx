import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Api1 = () => {
    let [state, setstate]=useState([])

    useEffect(()=>{
        axios.get("https://akabab.github.io/superhero-api/api/all.json")
        .then((res)=>setstate(res.data))
    },[])
  return (
    <div>
        <table border={1}>  
            <thead>
            <tr>
                <td>id</td>
                <td>name</td>
                <td>speed</td>
                <td>img</td>
            </tr>
            </thead>
            <tbody>
                {state.map((res)=>{
                    let {id,name,powerstats,images}=res

                    return(
                        <tr>
                            <td>{id}</td>
                            <td>{name}</td>
                            <td>{powerstats.speed}</td>
                            <td>
                                <img src={images.sm} alt="" />
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </div>
  )
}

export default Api1