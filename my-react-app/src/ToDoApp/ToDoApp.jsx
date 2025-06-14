import styles from './ToDoApp.module.css';
import React,{useState} from 'react';
import upImage from '../assets/image.png';
import downImage from '../assets/arrow.png';
function ToDoApp(){
	const [task, setTask] = useState("");
    const [taskList,setTaskList]=useState([]);
    function handleInputChange(event){
        setTask(event.target.value);
    }
    function handleAddTask(){
        if(task.trim() !== ''){
            setTaskList((t=>([...t,task])));
            setTask('');
        }else{
            alert("Please enter some task first");
        }
    }
    function handleRemoveTask(index){
        setTaskList((taskList.filter((_,i) => i!==index)));
    }
    function handleUpMove(index){
        if(index===0){return;}
        const listElement=taskList[index];
        taskList[index]=taskList[index-1];
        taskList[index-1]=listElement;
        setTaskList([...taskList]);
    }
    function handleDownMove(index){
        if(index===taskList.length-1){return;}
        const listElement=taskList[index];
        taskList[index]=taskList[index+1];
        taskList[index+1]=listElement;
        setTaskList([...taskList]);
    }
	return (
		<div className={styles.myApp}>
            <h1 className={styles.appHeading}>To-Do App</h1>
            <div className={styles.inputContainer}>
            <input type="text" value={task} className={styles.taskInputElement} placeholder="Enter the task here..." onChange={(event)=>handleInputChange(event)} />
            <button className={styles.addButton} onClick={handleAddTask}>Add Task</button>
            </div>
            <ul className={styles.taskList}>
                {taskList.map((task,index) => <div className={styles.taskRow}>
                                              <li key={index} className={styles.taskElement}>{task}</li>
                                              <div className={styles.buttons}>
                                              <button className={styles.removeButton} onClick={()=>handleRemoveTask(index)}>Remove</button>
                                              <button className={styles.upButton} onClick={()=>handleUpMove(index)}><img src={upImage} /></button>
                                              <button className={styles.downButton} onClick={()=>handleDownMove(index)}><img src={downImage} /></button>
                                              </div>
                                              </div>
                                              )}
            </ul>
        </div>
	);
}
export default ToDoApp