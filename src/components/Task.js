import {FaTimes} from 'react-icons/fa';

const Task =({task,onDeleteTask,onToggle})=>{
    return(
        <div className={`task ${task.remainder ? 'reminder': ''}`} onDoubleClick={onToggle}>
        <h3>{task.text}<FaTimes style ={{color :'red',cursor :'pointer'}} onClick={onDeleteTask} /></h3>
        <p>
            {task.day}
        </p>
        </div>
    )

}
export default Task;