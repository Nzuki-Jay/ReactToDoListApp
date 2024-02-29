// the component for adding to do items

import { useState, useEffect } from "react"
import Task from './Task';
import styles from './ToDoFunctionality.module.css';
import AddTasks from "./AddTasks";

const ToDoFunctionality = ({taskTrackers }) => {

    // state for input when the user types 
    const [task, setTask] = useState("");

    // set state for adding the item to the todolist after form submission
    const [toDoList, setToDoList] = useState([]);

    // Load tasks from local storage when component mounts/renders
    useEffect(() => {
        const storedToDoList = JSON.parse(localStorage.getItem('toDoList')) || [];
        setToDoList(storedToDoList);
    }, []);


    // function to handle form data 
    const handleFormData = (e) => {
        e.preventDefault();

        const newTask = { taskName: task, complete: false };

        // Update the toDoList state with the new item
        setToDoList([...toDoList, newTask]);

        // Save updated task list to local storage
        localStorage.setItem('toDoList', JSON.stringify([...toDoList, newTask]));

        // clear input
        setTask("");

        //updates the tasktrackers
        taskTrackers();

    }

    // update complete status of a task

    const updateTask = (index) => {

        const tasks = [...toDoList];

        tasks[index].complete = tasks[index].complete ? false : true;

        setToDoList(tasks);

        localStorage.setItem('toDoList', JSON.stringify(tasks));

        //updates the tasktrackers
        taskTrackers();

    }

    // remove task from the list

    const removeTask = (index) => {
        const tasks = [...toDoList];

        tasks.splice(index, 1);

        setToDoList(tasks);

        localStorage.setItem('toDoList', JSON.stringify(tasks));

        //updates the tasktrackers
        taskTrackers();

    }

   
    return <>
        <div className={styles.container }>

            <AddTasks task={task} setTask={setTask} handleFormData={handleFormData} />
            <div>
                {toDoList.map((task, index) => <Task key={index} taskItem={task} remove={removeTask} update={updateTask} taskIndex={index} />)}
            </div>
        </div>

    </>
}

export default ToDoFunctionality