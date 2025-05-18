import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import {use, useState} from 'react';


const  App = ()=> {

  const [showAddTask,setShowAddTask] =useState(false); 
  const [tasks,setTasks] = useState([
    {
        id:1,
        text: 'Doctors Appointment',
        day :'Feb 5th at 2.30pm',
        remainder :true
    },
    {
        id:2,
        text: 'Meeting at school',
        day :'Feb 6th at 1.30pm',
        remainder :true
    },
    {
        id:3,
        text: 'Food Shooping',
        day :'Feb 5th at 2.30pm',
        remainder :false
    }
])

//adding a new task   
const addNewTask = (newTask)=>{
  const id = Math.floor(Math.random()* 10000)+1;

//  let newTask = {
//     id:id,
//     text:taskText,
//     day :day,
//     remainder :rem
//   }

 let newTaskobj = {id,...newTask};
  setTasks([...tasks,newTaskobj]);

  console.log(tasks);
}

//delete task 

const deleteTask = (id)=>{
 setTasks(tasks.filter((task)=>task.id !== id));
}

//ToggleRemainder

const toggleRemaider =(id)=>{
  setTasks(
    tasks.map((task)=>
    task.id ===id ? {...task,remainder :!task.remainder} : {...task}
  ))
  console.log(tasks)
 }
return (
    <div className="App container"> 
    <Header  title ='Task Tracker' onADDClick ={()=>{
  setShowAddTask(!showAddTask);}}  showAddTask={showAddTask}/>
    {showAddTask &&  <AddTask onADDNewTask = {addNewTask}/>}
   
    {tasks.length>0 ? <Tasks tasks ={tasks} onDeleteTask ={deleteTask} onToggle = {toggleRemaider}/> :  'no Pending tasks'}
    </div>
  );
}

export default App;
