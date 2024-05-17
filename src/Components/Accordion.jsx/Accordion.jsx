import React from 'react'
import { Dataa } from './Data'
import Accprops from './Accprops'

const Accordion = () => {

  return (
    <div>
        {Dataa.map((obj)=>{
            let{id,qustion,ans}=obj
            return(
                <Accprops id={id} qustion={qustion} ans={ans}/>
            )
        })}
    </div>
  )
}

export default Accordion