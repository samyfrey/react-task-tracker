import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState ([
		{
			id: 1,
			text: 'Do Homework',
			day: 'Feb 5th at 2:30pm',
			reminder: true,
		},
    {
      id: 2,
      text: 'Make dinner',
      day: "Mar 3rd at 7pm",
      reminder: false
    }
	])
// add Task
// the new object newTask will contain the id newly created, and whatever is passed in the function (task) which is the text, day&time and reminder. 
 
const addTask = (task) => {
  const id = Math.floor(Math.random() * 10000) + 1
  const newTask = { id, ...task }
  setTasks([...tasks, newTask])
}


// delete a task
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
  }

// toggle reminder
  const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? { ...task, reminder: !task.reminder} : task))
  }

  return (
    <div className="container">
      <Header onAdd={() => setShowAddTask(!showAddTask)} showAdd={showAddTask} title="Task Tracker" />
      {/* if showAddTask is truthy then all expression is true and AddTask is shown, otherwise nothing is shown as expression is false */}
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask}/> : 'No Tasks to Show'}
    </div>
  );
}

export default App;
