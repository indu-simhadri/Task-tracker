import Task from "./Task";
const Tasks =({tasks,onDeleteTask,onToggle})=>{
    return (
        <>
        {tasks.map((task)=>(<Task key = {task.id} task = {task} onDeleteTask ={()=>onDeleteTask(task.id)} onToggle ={()=>{onToggle(task.id)}}  />))}
        </>
    )
}

export default Tasks;