import React from 'react'
import { useState } from 'react'
import './todo.css'

const Todo = () => {
    let [Todo,Addtodo]=useState([])
    let [input, Setinput]= useState('')
    let [Edit, Editcontent]= useState(null)

    const click=(e)=>{
        Setinput(e.target.value)
    }

    const onclicks=(event)=>{
        if(Edit!==null){
            const updatetodos=[...Todo]
            updatetodos[Edit]=input
            Addtodo(updatetodos)
            Editcontent(null)
        }else{
        Addtodo([...Todo,input])
        }
        Setinput("")
        event.preventDefault()
    }

    const Editing=(index)=>{
        Editcontent(index)
        Setinput(Todo[index])
    }

    const Delet=(index)=>{
        const updatetodos=[...Todo]
        updatetodos.splice(index,1)
        Addtodo(updatetodos)
    }

  return (
    <div className='todoapp'>
    <div className='todoparent'>
            <div className='todoheading'>
            <h1>TODO APP</h1>
            </div>
            <div className='todoform'>
            <form action="" onSubmit={onclicks}>
                <input type="text" className='todoinput'
                placeholder='ADD TODO'
                value={input}
                onChange={click} />
                <button className='btnaddtodo'>{Edit !==null ? "UPDATE" : "ADDTODO"}</button>
            </form>
            </div>
            <div className='todotask'>
            {Todo.map((Todo,index)=>(
                <div className='todotask1'>
                <p className='todo'>{index+1}.{Todo}</p>
                <div className='todobtn'>
                <button className='todoedit' onClick={()=>Editing(index)}>Edet</button>
                <button className='tododelet' onClick={()=>Delet(index)} >Delet</button>
                </div>
                </div>
            ))}
        </div>
        </div>
        </div>
  )
}

export default Todo