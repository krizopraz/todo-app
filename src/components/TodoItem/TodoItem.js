import React from "react";
import "./TodoItem.css";

function Todo(props) {
  const { content } = props;
  return <div className='item'>
    <div className='element' onClick={(e)=>{
    if(e.target.className === 'done'){
      e.target.className = 'element'
    }else{
      e.target.className = 'done'
    }
    console.log(e.className)
    e.className = 'test'
    console.log(e.currentTarget)
  }}>{content} </div>
    <button onClick={(e)=>{
    }} className='btn btn-danger'>Sil</button>
  </div>
}

export default Todo;
