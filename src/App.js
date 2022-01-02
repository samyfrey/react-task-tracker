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
	])

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Tasks tasks={tasks}/>
    </div>
  );
}

export default App;
