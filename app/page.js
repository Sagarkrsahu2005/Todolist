"use client";
import React, { useState } from "react";

const page = () => {
  const [Title, setTitle] = useState("");
  const [Desc, setDesc] = useState("");
  const [Mainstore, setMainstore] = useState([]);

  const deleteHandler = (i)=>{
    let copytask = [...Mainstore]
    copytask.splice(i,1)
    setMainstore(copytask)
  }

  const SubmitHandler = (e) => {
    e.preventDefault();
    setMainstore([...Mainstore, { Title, Desc }]);
    // console.log(Title)
    // console.log(Desc)
    setTitle("");
    setDesc("");
    console.log(Mainstore);
  };
  let renderTask = <h2>No Task Available</h2>;

if (Mainstore.length>0) {
  renderTask = Mainstore.map((T, i) => {
    return (
      <li className="flex items-center justify-between ">
        <div id="Mainstore" className="flex justify-between mb-3 font-s w-2/3">
          <h5 className="text-2xl font-extrabold ">{T.Title}</h5>
          <h6 className="text-xl font-semibold ">{T.Desc}</h6>
          <button className="bg-red-500 text-white px-4 py-2 rounded font-bold " onClick={deleteHandler}>Delete</button>
        </div>
      </li>
    );
  });
}
  return (
    <>
      <h1>Sagar's Todo List</h1>

      <form onSubmit={SubmitHandler}>
        <input
          type="text"
          placeholder="Enter Some Task ;)"
          value={Title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <input
          type="text"
          placeholder="Enter Description :)"
          value={Desc}
          onChange={(e) => {
            setDesc(e.target.value);
          }}
        />

        <button>Add Task</button>
      </form>

      <hr />

      <div id="storage">{renderTask}</div>
    </>
  );
};

export default page;
