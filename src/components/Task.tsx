import styles from './Task.module.css'

import clsx from 'clsx'

import { useState } from 'react'

import { Trash, Check } from 'phosphor-react'

import * as Checkbox from '@radix-ui/react-checkbox'

import { ITask } from '../App'

interface TaskProps {
    task: ITask;
    onDeleteTask: (id: string) => void;
}

export function Task({ task, onDeleteTask }: TaskProps) {

    const [checked, setChecked] = useState<boolean>(false);

    function handleCheck() {
        setChecked(!checked)

        
    }

    return (
        <div className={styles.task}>
            <Checkbox.Root
                checked={checked}
                className={clsx(styles.checkbox,
                    { [styles.checkboxChecked]: checked },
                    { [styles.checkboxUnchecked]: !checked }
                )}
                onCheckedChange={handleCheck}
            >
                <Checkbox.Indicator className={styles.checkboxIndicator}>
                    <Check size={12} weight="bold" />
                </Checkbox.Indicator>
            </Checkbox.Root>
            <p className={checked ? styles.checked : styles.normal}>
                {task.task}
            </p>
            <Trash className={styles.trash} onClick={() => onDeleteTask(task.id)}/>
        </div>
    )
}