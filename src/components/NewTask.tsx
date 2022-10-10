import styles from './NewTask.module.css'

import { PlusCircle } from 'phosphor-react'

import { ITask } from '../App'

import { ChangeEvent, FormEvent, useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

interface CreateTask {
    onCreateTask: (task: ITask) => void;
}

export function NewTask({ onCreateTask }: CreateTask) {

    const [newTask, setNewTask] = useState<string>("");

    function handleSubmit(event: FormEvent) {
        event.preventDefault();

        const task: ITask = {
            id: uuidv4(),
            task: newTask!,
            isComplete: false
        };

        onCreateTask(task);

        setNewTask("");
    }

    function handleChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTask(event.target.value);
    }

    return (
        <form className={styles.newTask} onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder='Adicione uma nova tarefa'
                onChange={handleChange}
                value={newTask}
                required
            />
            <button type='submit'>
                Criar
                <PlusCircle size={16} />
            </button>
        </form>
    )
}