"use client"
import React, { useState } from "react";

const page = () => {
  const [Title, setTitle] = useState("")
  const [Desc, setDesc] = useState("")
  const [Mainstore, setMainstore] = useState([])

  const SubmitHandler = (e)=>{
    e.preventDefault()
    setMainstore([...Mainstore , {Title,Desc}])
    // console.log(Title)
    // console.log(Desc)
    setTitle("")
    setDesc("")
    console.log(Mainstore)


  }
let renderTask = <h2>No Task Available</h2>
  return (
    <>
      <h1>Sagar's Todo List</h1>

      <form onSubmit={SubmitHandler}>

        <input type="text" placeholder="Enter Some Task ;)" 
        value={Title}
        onChange={(e)=>{
          setTitle(e.target.value)
        }}
        />

        <input type="text" placeholder="Enter Description :)"
        value={Desc}
        onChange={(e)=>{
          setDesc(e.target.value)
        }}
        />

        <button>Add Task</button>
      </form>

      <hr/>

      <div id="storage">
        {renderTask}
      </div>
    </>
  );
};

export default page;
