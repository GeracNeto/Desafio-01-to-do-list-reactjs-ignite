import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Info } from './components/Info'
import { NoTasks } from './components/NoTasks'
import { Task } from './components/Task'

import './global.css'
import styles from './App.module.css'

import { useState } from 'react'

export interface ITask {
  id: string;
  task: string;
  isComplete: boolean;
}

export function App() {

  const [todos, setTodos] = useState<ITask[]>([])

  function createTask(task: ITask) {
    setTodos([...todos, task]);
  }

  function deleteTask(id: string) {
    const newTodo = todos.filter((todo) => todo.id !== id);

    setTodos(newTodo);
  }

  function completedTask(id: string) {
    const completedTask = todos.map(task => task.id === id ? {
      ...task,
      isComplete: !task.isComplete
    } : task);
    
    setTodos(completedTask)
  }
  console.log(todos)

  return (
    <div>
      <Header />

      <NewTask
        onCreateTask={createTask}
      />

      <main className={styles.wrapper}>
        <Info
          tasks={todos}
        />

        {todos.length >= 1 ? (
          todos.map(todo => (
            <Task
              key={todo.id}
              task={todo}
              onDeleteTask={deleteTask}
              onCompletedTask={completedTask}
            />
          ))
        ) : (
          <NoTasks />
        )}
      </main>


    </div>
  )
}

