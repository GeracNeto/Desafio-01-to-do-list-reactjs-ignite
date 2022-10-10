import styles from './Info.module.css'

import { ITask } from '../App'
import { useState } from 'react';

interface TasksInfo {
    tasks: ITask[];
}

export function Info({ tasks }: TasksInfo) {

    const totalTasks = tasks.length
    const completedTasks = tasks.filter(task => task.isComplete === true)
    const totalCompletedTasks = completedTasks.length

    return (
        <section className={styles.info}>
            <p className={styles.tasksCreated}>
                Tarefas criadas
                <span className={styles.counter}>{totalTasks}</span>
            </p>
            <p className={styles.tasksCompleted}>
                Concluídas
                <span className={styles.counter}>{totalCompletedTasks} de {totalTasks}</span>
            </p>
        </section>
    )
}