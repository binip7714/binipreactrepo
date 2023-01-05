import React from 'react'
import { useState } from 'react';
const ToDoApp = () => {
    const [todos, setTodos]=useState([]);
    const [inputValue, setInputValue]=useState("");
    const [edit, setEdit]=useState(false);
    const [editIndex, setEditIndex]=useState("");
    const handleInputValue=({target:{value}})=>{
        console.log(inputValue);
        setInputValue(value);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        setTodos([...todos,inputValue]);
        setInputValue("");

    }
    const handleEdit=(index)=>{
        setEditIndex(index);
        setInputValue(todos[index]);
        setEdit(true);


    }
    const handleDelete=()=>{

    }
    

  return (
    <div>
        <h1>To Do App</h1>
        <input type="text" onChange={handleInputValue} value={inputValue}/>
        <button onClick={handleSubmit} value="submit">{edit?"Update":"Add Todo"}</button>
        <ul>
            {todos.map((item, index)=>{
                return(
                <li key={index}>
                    {item}
                    <button type="button" onClick={()=> handleEdit(index)}>Edit</button>
                    <button>Delete</button>
                </li>
  );
})}
        </ul>
    </div>
  )
}
export default ToDoApp;