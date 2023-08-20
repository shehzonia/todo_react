import React, { useState } from 'react'
import { Tasks } from './Tasks';
import styles from '../App.module.css';

const Add = () => {
const [todoList, settodoList] = useState([]);
const [newTask, setnewTask] = useState("");

function addSet() {

  const task =  {
    id:todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
    taskName:newTask,
  };
  settodoList([...todoList,task]);
}
// various methods 

// const deleteTask =(taskName) => {
//   const newTodo = todoList.filter((task)=> task !== taskName);
//   settodoList(newTodo);
// }

// const deleteTask =(taskName) => {
//   const newTodo = todoList.filter((task)=>{
//     if(task===taskName){
//       return false;
//     }
//     else{
//       return true;
//     }
//   });
//   settodoList(newTodo);
// }
function deleteTask(id) {
  settodoList(todoList.filter((task) => task.id !== id));
}

  return (
    <>
    <div className={styles.addTask}>
    <h1 className={styles.mainH1}>React Todo List </h1>
      <h4 className={styles.hText}>Start writing here...</h4>
      <input className={styles.inp} type='text' onChange={(e)=>setnewTask(e.target.value)} placeholder='Your Next task is...?'/>
      <button className={styles.btn} onClick={addSet}>Add Task</button>
      {todoList.map((task) => (
       <Tasks taskName={task.taskName} id={task.id} deleteTask={deleteTask}/>
      ))}
    </div>
    
    </>
  )
}

export default Add