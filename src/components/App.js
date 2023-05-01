import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";
console.log("Here's the data you're working with");
console.log({ CATEGORIES, TASKS });

function App() {

const [tasks, setTasks] = useState(TASKS)
const [category, setCategory] = useState("All")

const visibleTasks = tasks.filter(
  (task) => category === 'All' || task.category === category
)

function handleDelete(deletedTaskText) {
  setTasks(tasks.filter((task) => task.text !== deletedTaskText));
}

function handleAddTask(newTask) {
  setTasks([...tasks, newTask])
}

  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter categories={CATEGORIES} selectedCategory={category} onSelectCategory={setCategory}/>
      <NewTaskForm onTaskFormSubmit={handleAddTask} categories={CATEGORIES.filter((category) => category !== "All")}/>
      <TaskList onHandleDelete={handleDelete} tasks={visibleTasks}/>
    </div>
  );
}

export default App;
