// import React, { useState } from 'react'

// const Odd_Even = () => {

//     let [state, setstate]=useState(1)
//     let [state1, setstate1]=useState(1)

//     const handleclik=(e)=>{
//         setstate(e.target.value)
//     }

//     const odd_even=(num)=>{
//         return num%2===0
//     }
//     const result=(event)=>{
//         setstate1(state)
//         event.preventDefault()
//     }

//     const bgc=()=>{
//         return odd_even(state1)?"green":"red"
//     }

//   return (
//     <div>
//         <form action="" onSubmit={result}>
//         <div style={{backgroundColor:bgc(state)}}>
//         <input type="number" 
//         value={state}
//         onChange={handleclik} />
//         <button>submit</button>
//         <p>{odd_even(state1)? "even":"odd"}</p>
//     </div>
//         </form>
//         </div>
//   )
// }

// export default Odd_Even

import React, { useState } from 'react'

const Odd_Even = () => {
    let [num ,setstate]=useState(0)
    let [result,setresult]=useState()

    const handleclick=(e)=>{
        setstate(e.target.value)
    }

    const click=(e)=>{
        if(!isNaN(num)){
            const Even= num%2===0
            setresult(`this number ${num} is ${Even? "even":"odd"}`)
        }else{
            setresult("please enter the correct value")
        }
        e.preventDefault()
    }
    
  return (
    <div>
        <form action="" onSubmit={click}>
            <input type="text" 
            value={num}
            onChange={handleclick} />
            <button>subit</button>
        </form>
        <p>{result}</p>
    </div>
  )
}

export default Odd_Even