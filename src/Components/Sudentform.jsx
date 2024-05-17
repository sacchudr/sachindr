import React from 'react'
import { useState } from 'react'

const Studentform = () => {
  
  let [student,setstudent]=useState([])
  let [Fname, Setfname]=useState('')
  let [Lname, Setlname]=useState('')
  let [Email, Setemail]=useState('')
  let [Phone, Setphone]=useState('')
  let [edit, setedit]=useState(null)

  const submit=(event)=>{
    const newstudents={Fname,Lname,Email,Phone}
    if(edit!==null){
      const addstudents=[...student]
      addstudents[edit]=newstudents
      setstudent(addstudents)
      setedit(null)
    }else{
    setstudent([...student,newstudents])
  }
    Setfname('')
    Setfname('')
    Setemail('')
    Setphone('')
    event.preventDefault()
  }

  const edits =(index)=>{
    setedit(index)
    const edit =student[index]
    Setfname(edit.Fname)
    Setlname(edit.Lname)
    Setemail(edit.Email)
    Setphone(edit.Phone)
  }

  const delets=(index)=>{
    const delettable=[...student]
    delettable.splice(index,1)
    setstudent(delettable)
  }



  return (
    <div>
      <form action="" onSubmit={submit}>
        <table border={1}>
          <thead>
            <th>
              <tr>
              <td>FIRS NAME:</td>
              <td>
              <input type="text" value={Fname} onChange={(e)=>Setfname(e.target.value)}/>
              </td> 
              </tr>
              <tr>
              <td>LAST NAME:</td>
              <td>
              <input type="text" value={Lname} onChange={(e)=>Setlname(e.target.value)}/>
              </td> 
              </tr>
              <tr>
              <td>EMAIL:</td>
              <td>
              <input type="text" value={Email} onChange={(e)=>Setemail(e.target.value)}/>
              </td> 
              </tr>
              <tr>
              <td>PHONE NO:</td>
              <td>
              <input type="text" value={Phone} onChange={(e)=>Setphone(e.target.value)}/>
              </td> 
              </tr>
            </th>
            <td><button>add</button></td>
          </thead>
        </table>
            </form>
        <table border={1}>
          <thead>
          <tr>
                <th>FIRSTNAME</th>
                <th>LASTNAME</th>
                <th>EMAIL</th>
                <th>PHONE NO</th>
              </tr>
              </thead>
              <tbody>
            {student.map((obj,index)=>(
              <tr>
                <td> {obj.Fname} </td>
                <td> {obj.Lname} </td>
                <td> {obj.Email} </td>
                <td> {obj.Phone} </td>
                <td><button onClick={()=>delets(index)}>delet</button></td>
                <td><button onClick={()=>edits(index)}>edit</button></td>
              </tr>
            ))}
          </tbody>
        </table>
    </div>
  )
}

export default Studentform