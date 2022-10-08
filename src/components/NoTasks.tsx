import styles from './NoTasks.module.css'

import { ClipboardText } from 'phosphor-react'

export function NoTasks() {

    return (
        <div className={styles.empty}>
            <ClipboardText size={56} className={styles.clipboard} />

            <div className={styles.texts}>
                <p>
                    Você ainda não tem tarefas cadastradas
                </p>
                <p>
                    Crie tarefas e organize seus itens a fazer
                </p>
            </div>

        </div>
    )
}