import React, { useState } from "react";

const TasksPage: React.FC = () => {
  const [tasks, setTasks] = useState<string[]>([]);
  const [newTask, setNewTask] = useState("");
  const [error, setError] = useState("");

  const handleAddTask = () => {
    if (newTask.trim().length < 3) {
      setError("Task description must be at least 3 characters.");
      return;
    }
    setTasks([...tasks, newTask]);
    setNewTask("");
    setError("");
  };

  return (
    <div className="max-w-7xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Tasks</h2>
      <div className="mb-4">
        <input
          type="text"
          className="border rounded w-full p-2"
          placeholder="Enter a new task"
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        {error && <p className="text-red-500">{error}</p>}
        <button
          className="mt-2 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
          onClick={handleAddTask}
        >
          Add Task
        </button>
      </div>
      <div>
        <h3 className="font-bold mb-2">Task List</h3>
        <ul>
          {tasks.map((task, index) => (
            <li key={index} className="border-b py-2">
              {task}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TasksPage;
