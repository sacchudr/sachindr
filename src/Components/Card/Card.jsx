import React from 'react'
import { Carddata } from './Carddata'
import Cardprops from './Cardprops'

const Card = () => {

  return (
    <div>
        {Carddata.map((obj)=>(
         <Cardprops Titele={obj.Titele} Year={obj.Year} poster={obj.poster}/>
        ))}
<div>ghfgg</div>
    </div>
  )
}

export default Card