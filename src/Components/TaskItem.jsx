import React from "react";

function TaskItem({ taskName,deleteTask,completeTask}) {
  return (
    <>
      <li className="task d-flex justify-content-between">
        {taskName}

        <div className="task-btns w-25">
          <button className="btn btn-sm btn-success" onClick={completeTask}>Complete</button>
          <button className="btn btn-sm btn-danger" onClick={deleteTask}>Delete</button>
        </div>
      </li>
    </>
  );
}

export default TaskItem;