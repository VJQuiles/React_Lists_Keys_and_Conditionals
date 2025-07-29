import { useState } from 'react'
import './App.css'
import type { TaskStatus } from './types'
import { TaskList } from './components/TaskList/TaskList'

function App() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: "1",
      title: "this needs to get done",
      description: "description of what needs to be done",
      status: "pending",
      dueDate: "1/2/2025"
    },
    {
      id: "2",
      title: "this also needs to get done",
      description: "description of what also needs to be done",
      status: "in-progress",
      dueDate: "1/3/2025"
    },
    {
      id: "3",
      title: "this too needs to get done",
      description: "description of what needs to be done too",
      status: "completed",
      dueDate: "1/2/2025"
    }
  ])

  const handleStatusChange = (taskId: string, newStatus: TaskStatus) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === taskId ? { ...task, status: newStatus } : task
      )
    )
  }

  const handleDelete = (taskId: string) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== taskId))
  }

  return (
    <div className='container m-4'>
      <TaskList
        tasks={tasks}
        onStatusChange={handleStatusChange}
        onDelete={handleDelete}
      />
    </div>
  )
}

export default App
