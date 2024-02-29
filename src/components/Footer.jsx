import styles from './Footer.module.css'

const Footer = ({completeTasks, allTasks}) => {

    return <>
        <div className={styles.container}>
            <div className={styles.taskTracker }>
                <h3>All Available Tasks:</h3>
                <h3>{allTasks}</h3>
            </div>

            <div className={styles.taskTracker}>
                <h3>Completed Tasks:</h3>
                <h3>{completeTasks}</h3>
            </div>
        </div>

    </>
}

export default Footer