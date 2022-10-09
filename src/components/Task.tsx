import styles from './Task.module.css'

import { Trash } from 'phosphor-react'

export function Task() {

    return (
        <div className={styles.task}>
            <div>
                <p>
                    Passear com as cachorras
                </p>
            </div>
            <Trash size={24} className={styles.trash} />
        </div>
    )
}