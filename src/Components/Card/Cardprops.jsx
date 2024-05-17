import React from 'react'

const Cardprops = (props) => {
  return (
    <div>
        <img src={props.poster} alt="" />
        <h1>{props.Titele}</h1>
        <h2>{props.Year}</h2>
    </div>
  )
}

export default Cardprops