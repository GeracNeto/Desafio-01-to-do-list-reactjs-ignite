import { Header } from './components/Header'
import { NewTask } from './components/NewTask'
import { Info } from './components/Info'
import { NoTasks } from './components/NoTasks'

import './global.css'
import styles from './App.module.css'



export function App() {


  return (
    <div>
      <Header />

      <NewTask />

      <main className={styles.wrapper}>
        <Info />

        <NoTasks />

      </main>


    </div>
  )
}

