import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'


function App() {

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
      <Header title="Task Tracker" />
      {tasks.length > 0 ? <Tasks tasks={tasks} onToggle={toggleReminder} onDelete={deleteTask}/> : 'No Tasks to Show'}
    </div>
  );
}

export default App;
