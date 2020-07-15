import React, {useEffect ,useState} from 'react';
import Header from '../Header/Header';
import TaskList from '../TaskList/TaskList';
import './todo.scss';

const Todo = () => {
    const [tasks,setTasks] = useState([]);

    // add to new taks to tasks Array
    const addToTask = (value) => {
        const newTasks = [...tasks, value]; 
        setTasks(newTasks);

        let tempArr = JSON.parse(localStorage.getItem('tasks'));
        let newArr = {};
        newArr.array = [...tempArr.array, value];
        
        localStorage.setItem('tasks', JSON.stringify(newArr));
    }


    // delete task from array
    const handleDeleteTask = (idx) => {
        let tempTasks = [...tasks];
        tempTasks.splice(idx,1); 
        localStorage.setItem('tasks', JSON.stringify({array : tempTasks})); 
        setTasks(tempTasks);
    }


    // check for local storage and create if not exiest
    useEffect(() => {
    let initTasks = JSON.parse(localStorage.getItem('tasks'));
    
        if(initTasks) {
            setTasks(initTasks.array);
            return;
        } else {
            const newTasks = {};
            newTasks.array = [];
            localStorage.setItem('tasks', JSON.stringify(newTasks)); 
        }
  },[]);


    return ( 
        <div className="todo">
            <Header addTasks={addToTask} />
            <TaskList tasks={tasks} removeItem={handleDeleteTask}/>
        </div>
    )
}

export default Todo;