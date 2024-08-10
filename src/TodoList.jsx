import { useState } from "react"

function TodoList(){

    const [tasks, setTasks] = useState(["test","test1"]);
    const [newTask, setNewTask] = useState("");

    const handelInputChange = (event)=>{
        setNewTask(event.target.value)
    }

    const addTask = ()=>{
        if(newTask.trim() !== ""){

            setTasks(t=>[...t,newTask]);
            setNewTask("");
        }
    }
    const deleteTask = (index)=>{
        setTasks( tasks.filter( (_,i)=> i!==index ) );
    }
    const moveTaskUp = (index)=>{
        if(index > 0){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index - 1]] = 
            [updatedTasks[index - 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }
    const moveTaskDown = (index)=>{
        if(index < tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index], updatedTasks[index + 1]] = 
            [updatedTasks[index + 1], updatedTasks[index]];
            setTasks(updatedTasks);
        }
    }

    return(
        <div className="todo-list">
            <h1>To Do List</h1>
            <div>
                <input  type="text" 
                        placeholder="Enter a task..." 
                        value={newTask} 
                        onChange={handelInputChange} />
                <button className="add-btn" onClick={addTask}>Add</button>
                
                <ol>
                    {tasks.map((task,index)=> 
                        <li key={index}>
                            <span className="text">{task}</span>
                            <button className="delete-btn" onClick={()=>deleteTask(index)}>X</button>
                            <button className="move-btn" onClick={()=>moveTaskUp(index)}>👆</button>
                            <button className="move-btn" onClick={()=>moveTaskDown(index)}>👇</button>
                        </li>
                    )}
                </ol>
            </div>
        </div>
    );
}
export default TodoList
