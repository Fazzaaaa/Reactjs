import React, { useState } from "react";

function TodoItem({ task, onDelete, onToggle, completed }) {
  return (
    <li style={{ textDecoration: completed ? "line-through" : "none" }}>
      <input type="checkbox" checked={completed} onChange={onToggle} />
      {task}
      <button onClick={onDelete} style={{ marginLeft: "10px" }}>Hapus</button>
    </li>
  );
}

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleInputChange = (e) => {
    setNewTask(e.target.value);
  };

  const handleAddTask = () => {
    if (newTask.trim() !== "") {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = tasks.filter((_, i) => i !== index);
    setTasks(updatedTasks);
  };

  const handleToggleTask = (index) => {
    const updatedTasks = tasks.map((task, i) =>
      i === index ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h2>Todo List</h2>
      <input
        type="text"
        placeholder="Tambah tugas baru..."
        value={newTask}
        onChange={handleInputChange}
      />
      <button onClick={handleAddTask}>Tambah</button>
      <ol>
        {tasks.map((task, index) => (
          <TodoItem
            key={index}
            task={task.text}
            completed={task.completed}
            onDelete={() => handleDeleteTask(index)}
            onToggle={() => handleToggleTask(index)}
          />
        ))}
      </ol>
    </div>
  );
}

export default TodoList;
