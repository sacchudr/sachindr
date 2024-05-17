import React, { useState } from "react";

const Form=()=>{
    let [state ,setstate]=useState('')
    let [state1 ,setstate2]=useState('')

    const submit=(e)=>{
        setstate(e.target.value)
    }

    const onclick1=(event)=>{
        setstate2(state)
        setstate('')
        event.preventDefault()
    }


    return(
        <div>
            <div>
                <form action="" onSubmit={onclick1}>
                <p>{state1}</p>
                <input type="text" name=""
                value={state}
                onChange={submit}
                 id="" />
                 <button>submit</button>
                 </form>
            </div>
        </div>
    )

}
export default Form