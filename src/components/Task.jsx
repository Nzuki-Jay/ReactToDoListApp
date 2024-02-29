import { FaTimes, FaCheck, FaSquare } from 'react-icons/fa';
import styles from './Task.module.css';

const Task = ({ taskItem, remove, update, taskIndex }) => {

    // events on buttons

    const removeTask = () => {

        remove(taskIndex);
    }

    const updateTask = () => {

        update(taskIndex);

    }

    return <div className={styles.container}>
        <h4 style={{ textDecoration: taskItem.complete ? 'line-through' : 'none', textDecorationColor: taskItem.complete ? '#1F3B4D': 'transparent' }} className={styles.itemtext}>{taskItem.taskName}</h4>

        <div className={styles.itembuttonsdiv}>
            <button onClick={removeTask } className={styles.itemButtons}><FaTimes /> <span>Remove</span></button>
            <button onClick={updateTask} className={styles.itemButtons}>
                {taskItem.complete ? <>< FaSquare /> <span>Uncheck</span></> : <>< FaCheck /> <span>Check</span> </>}
            </button>
        </div>

    </div>
};

export default Task