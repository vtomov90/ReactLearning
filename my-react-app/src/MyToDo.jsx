import React, {useState} from 'react';
function MyToDo(){

    const [tasks, setTasks] = useState(["Eat", "Sleep", "Walk"]);
    const [newTask, setNewTask] = useState("");
    
    function handleInputChange(e){
        setTasks(e.target.value);
    }
    function addTask(){
        if(newTask.trim() !== ""){
            setNewTask(t => [...t, newTask]);
            setNewTask("");
        }
    }
    function removeTask(index){
        const updateTasks = tasks.filter((_, i) => i !== index);
        setTasks(updateTasks);
    }
    function moveUp(index){
        if(index > 0){
            const updateTasks = [...tasks];
            [updateTasks[index], updateTasks[index - 1]] = [updateTasks[index - 1], updateTasks[index]];
        }
    }
    function moveDown(index){   
        if(index < tasks.length - 1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <div className='container'>
            <h1>My To Do List</h1>

            <div className='do-container'>
                <input type="text" placeholder='Add Task' value={newTask} onChange={handleInputChange} />
                <button className='add-button' onClick={addTask}>Add Task</button>

            </div>

            <ol>
                {tasks.map((task, index) => 
                    <li key={index}>
                        <span>{task}</span>
                        <button className='delete-button' onClick={() => deleteTask(index)}>
                            Delete
                        </button>
                        <button className='move-button' onClick={() => moveTaskUp(index)}>
                            Up
                        </button>
                        <button className='move-button' onClick={() => moveTaskDown(index)}>
                            Down
                        </button>
                    </li>
                )}
            </ol>
        </div>
    )
}
export default MyToDo