import React from "react";
import "../index.css";

const MyDailyTaskList = () => {
  const [tasks, setTasks] = React.useState([]);
  const [newTask, setNewTask] = React.useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };
  const handleAddTask = (e) => {
    if (newTask.trim() !== "") {
      setTasks((t) => [...t, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };
  const handleCompleteTask = (index) => {
    setTasks(
      tasks.map((task, i) =>
        i === index ? { ...task, completed: !task.completed } : task
      )
    );
  };
  const handleRemoveTask = (index) => {
    setTasks((t) => t.filter((_, i) => i !== index));
  };

  return (
    <div className="container">
      <h1 className="title">MDTL - My Daily Task List</h1>
      <div className="tasksContainer">
        <input
          className="tasksInput"
          type="text"
          value={newTask}
          placeholder="Enter your task..."
          onChange={handleInputChange}
        />
        <button className="addBtn" onClick={handleAddTask}>
          ADD
        </button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className={task.completed ? "taskDoneList" : ""}>
            <span
              className={task.completed ? "taskText taskDoneText" : "taskText"}
            >
              {task.text}
            </span>
            <div className="tasksBtn">
              <button
                className="completeBtn"
                onClick={() => handleCompleteTask(index)}
              >
                {task.completed ? "UNDO" : "DONE"}
              </button>
              <button
                className="removeBtn"
                onClick={() => handleRemoveTask(index)}
              >
                REMOVE
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MyDailyTaskList;
