import styles from './Info.module.css'

export function Info() {

    return (
        <section className={styles.info}>
            <p className={styles.tasksCreated}>
                Tarefas criadas
                <span className={styles.counter}>0</span>
            </p>
            <p className={styles.tasksCompleted}>
                Concluídas
                <span className={styles.counter}>2 de 5</span>
            </p>
        </section>
    )
}