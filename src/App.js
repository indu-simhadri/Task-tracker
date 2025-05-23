import Header from './components/Header';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';
import Footer from './components/Footer';
import About from './components/About';
import {useState,useEffect} from 'react';
import  {BrowserRouter,Route,Routes} from 'react-router-dom';


const  App = ()=> {
  const path =  window.location.pathname;
  const [showAddTask,setShowAddTask] =useState(false); 
  const [tasks,setTasks] = useState([]);
  useEffect (()=>{
    const getTasks = async()=>{
      const tasksFromserver = await fetchTasks();
      setTasks(tasksFromserver);
    } 
    getTasks();
  },[])


  //fetch task
  const fetchTask = async (id)=>{
    const result = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await result.json();
    return data;
  }

  //fetch tasks 
  const fetchTasks = async ()=>{
    const result = await fetch('http://localhost:5000/tasks')
    const data = await result.json();
    return data;
  }

//adding a new task   
const addNewTask = async (newTask)=>{

 // const id = Math.floor(Math.random()* 10000)+1;

//  let newTask = {
//     id:id
//     text:taskText,
//     day :day,
//     remainder :rem
//   }
 const res = await fetch('http://localhost:5000/tasks',{
  method :'POST',
  headers :{
    'Content-type' :'application/json'
  },
  body : JSON.stringify(newTask)
 })

 const data = await res.json();

 // console.log(data);

  setTasks([...tasks,data]);

 // console.log(tasks);
}

//delete task 

const deleteTask = async (id)=>{
  await fetch(`http://localhost:5000/tasks/${id}`,{
    method :'DELETE'
  })

 setTasks(tasks.filter((task)=>task.id !== id));
}

//ToggleRemainder

const toggleRemaider = async (id)=>{

  const taskToToggle = await fetchTask(id);
  const updTask =  {...taskToToggle,
    remainder: !taskToToggle.remainder}
    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method: 'PUT',
      headers:{
        'Content-type' :'application/json'
      },
      body: JSON.stringify(updTask)
    })
    const data = await  res.json();
  setTasks(
    tasks.map((task)=>
    task.id ===id ? {...task,remainder : data.remainder} : {...task}
  ))
  console.log(tasks)
 }
return (
  <BrowserRouter>
    <div className="App container"> 
    <Header  title ='Task Tracker' onADDClick ={()=>{
    setShowAddTask(!showAddTask);}}  showAddTask={showAddTask}/>
    <Routes>
      <Route path = '/' element={
        (()=>
          <>
          {showAddTask &&  <AddTask onADDNewTask = {addNewTask}/>} 
          {tasks.length>0 ? <Tasks tasks ={tasks} onDeleteTask ={deleteTask} onToggle = {toggleRemaider}/> :  'no Pending tasks'}
          </>
          )()
    }
        />
    <Route path ='/about' element={<About/>}/>
    </Routes>
    <Footer/>
    </div>
    </BrowserRouter>
    
  );
}

export default App;
