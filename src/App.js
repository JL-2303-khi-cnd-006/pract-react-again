import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck, faPen, faTrashCan  
} from '@fortawesome/free-solid-svg-icons'
import './App.css';


function App() {

  const [todo, setTodo] = useState([
    {"id": 1, "title": "Task 1", "status": false},
    {"id": 2, "title": "Task 2", "status": false}
  ]);

  const [newTask, setNewTask] = useState('');
  const [updateTask, setUpdateTask] = useState('');


  const addTask = () => {

  }

  const deleteTask = (id) => {

  }

  const markDone = () => {

  }


  return (
    <div className="container App">

      <br /> <br/>
      <h2> To DO List App </h2>
      <p> Let's Get Started </p>
      <br /> 
        {todo && todo.length ? '':'No Tasks...'}
    </div>
  );
}

export default App;
