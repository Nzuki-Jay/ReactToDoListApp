import { useState, useEffect } from 'react'
import ToDoFunctionality from './components/ToDoFunctionality';
import Header from './components/Header';
import styles from './App.module.css';
import Footer from './components/Footer';

function App() {

    // task tracker states
    const [numTasks, setNumTasks] = useState(0);
    const [numCompleteTasks, setNumCompleteTasks] = useState(0);

    const updateTaskTrackers = () => {
        let tasks = JSON.parse(localStorage.getItem("toDoList"))
        let newNumTasks = tasks ? tasks.length : 0;

        let completeTasks = tasks ? tasks.filter(task => task && task.complete) : [];
        let newNumCompleteTasks = completeTasks ? completeTasks.length : 0;

        setNumCompleteTasks(newNumCompleteTasks);
        setNumTasks(newNumTasks);
    }

    // Update task trackers initially
    useEffect(() => {
        updateTaskTrackers();
    }, []);

    return (
        <>
            <div className={styles.app }>
                <Header />
                <ToDoFunctionality taskTrackers={updateTaskTrackers} />
                <Footer completeTasks={numCompleteTasks} allTasks={numTasks} />
        </div>
    </>
    )
}

export default App
