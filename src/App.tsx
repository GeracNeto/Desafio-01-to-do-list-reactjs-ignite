import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Info } from './components/Info'
import { NoTasks } from './components/NoTasks'
import { Task } from './components/Task'

import './global.css'
import styles from './App.module.css'

export function App() {

  const showTask = true


  return (
    <div>
      <Header />

      <NewTask />

      <main className={styles.wrapper}>
        <Info />

        {showTask ? <Task /> : <NoTasks />}


      </main>


    </div>
  )
}

