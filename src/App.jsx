import TaskItem from "./Components/TaskItem";
import { useState } from "react";
import "./App.css";

function App() {
  const [newTask, setNewTask] = useState("");
  const [myTask, setMyTask] = useState(["Writing Notes", "Reading Books", "Learning New Things", "Recording Videos", "Editing", "Attending an Event"]);
  const [completedTask, setCompletedTask] = useState([])
  function handleInput(e) {
    let newValue = e.target.value;
    setNewTask(newValue);
  }

  function addTask() {
    if (newTask.trim() === "") {
      return;
    }
    setMyTask(prev => [...prev, newTask]);
    setNewTask("");
  }

  function deleteTask(indexToDelete) {

    let afterDeletion = myTask.filter((task, index) =>
      index !== indexToDelete
    );

    setMyTask(afterDeletion)
  }

  function completeTask(indexToComplete) {
    let completed = myTask[indexToComplete];

    let afterFiltering = myTask.filter((task, index) =>
      index !== indexToComplete
    );
    setMyTask(afterFiltering);

    setCompletedTask(prev => [...prev, completed]);
  }

  function deleteCompletedTask(indexToDelete) {

    let afterDeletion = completedTask.filter((task, index) =>
      index !== indexToDelete
    );

    setCompletedTask(afterDeletion);
  }


  return (
    <div className="main-body d-flex justify-content-center w-500 align-items-center">
      <div className="main-todo-list">
        <h3 className="text-center">My TODO List</h3>
        <div>
          <div className="todo-items">
            <div className="form-floating w-100">
              <input type="text" className="form-control" id="floatingInput" placeholder="Todo Task" onChange={(e) => {
                handleInput(e)
              }} value={newTask} />
              <label htmlFor="floatingInput">Todo Task</label>
            </div>
            <button className="btn btn-primary" id="add" onClick={() => { addTask() }}>+</button>
          </div>
          <h6>To be Completed</h6>
          <ul className="task-list">
            {
              myTask.map((task, index) =>
                <TaskItem taskName={task} key={index} deleteTask={() => deleteTask(index)} completeTask={() => completeTask(index)} />
              )
            }
          </ul>
          <hr />
          <br />
          <h6>Completed Tasks</h6>
          <ul className="task-list">
            {
              completedTask.map((task, index) =>
                <TaskItem taskName={task} key={index} deleteTask={() => deleteCompletedTask(index)} />
              )
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App;