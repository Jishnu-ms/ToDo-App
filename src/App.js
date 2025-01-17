import React from 'react';
import './App.css';
import {useState} from 'react'

function App() {
  const [toDos, setToDos] = React.useState([]);
  const[toDo,setToDo]=useState(' ')
  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>Whoop, It's A Great Day 🌝 ☕ </h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />
        <i onClick={()=>setToDos([...toDos,{id:Date.now(), text: toDo,status:false}])} className="fas fa-plus"></i>
      </div>
      <div className="todos">


      {  
      toDos.map((value)=>{
        
       return ( <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
              console.log(e.target.value)
              console.log(value)
            }} value={value.status} type="checkbox" name="" id="" />
            <p>{value.text}</p>
          </div>
          <div className="right">
  <i
    className="fas fa-times"
    onClick={() =>
      setToDos(toDos.filter((item) => item.id !== value.id))
    }
    style={{ cursor: "pointer", color: "red" }}
  ></i>
</div>


        </div>)
      })}
      <div className="clearAll">
      <button onClick={() => setToDos([])} className="clearbutton">
    Clear All
  </button>
</div>

      </div>
    </div>
  );
}

export default App;
