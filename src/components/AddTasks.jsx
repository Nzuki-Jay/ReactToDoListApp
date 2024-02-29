import styles from './AddTasks.module.css';
import { FaPlus } from 'react-icons/fa';

const AddTasks = ({ task, setTask, handleFormData }) => {

    return <>
        <div>
            <form className={styles.additemform} onSubmit={handleFormData}>
                <input className={styles.additeminput} onChange={(e) => setTask(e.target.value)} type="text" value={task } placeholder="Type a task here..." />
                <button className={styles.submitButton} type="submit">
                    <FaPlus /> <span>Add Item</span>
                </button>
            </form>
        </div>
    </>

};

export default AddTasks