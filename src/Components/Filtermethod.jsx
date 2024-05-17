import React, { useState } from 'react'

const Filtermethod = () => {
  let [data ,datapepople]=useState(6)
  let [agee, filterage]=useState([
    {id:1,name:"sachin",age:24},
    {id:2,name:"dr",age:26},
    {id:3,name:"Rockstar",age:8},
    {id:4,name:"sacchu",age:12}
  ])
  const handlesubmit=(e)=>{
    e.preventDefault()

    const result= agee.filter(item=>item.age>data)
    filterage(result)
  }
  const click=(e)=>{
    datapepople(e.target.value)
  }
  return (
    <div>
    <form action="" onSubmit={handlesubmit}>
      <input type="text" value={data} onChange={click} />
      <button>age</button>
    </form>
    {
      agee.map(item=>(
        <li>{item.name} {item.age}</li>
      ))
    }

    </div>
  )
}

export default Filtermethod