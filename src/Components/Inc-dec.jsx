import React, { useState } from "react";

const Inc_dec =()=>{

let [inc ,increment]=useState(0)

const dec=()=>{
    if(inc>0){
        increment(inc-1)
    }
}

    return(
        <div>
            <button onClick={()=>increment(inc+1)}
            value={inc}> inc</button>
            <p>{inc}</p>
            <button onClick={dec}>dec</button>
        </div>
    )
}
export default Inc_dec