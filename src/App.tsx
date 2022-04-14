import React, {useState, useEffect} from 'react';
import './App.css';
import TodoInputForm from './components/TodoInputForm';
import ListTask from "./components/ListTask";


function App(){

    const [arrayListTask, setArrayListTask] = useState<any[]>(() => {
        const saved = localStorage.getItem("arrayListTask");
        const initialValue = JSON.parse(saved);
        return initialValue || "";
    });

    useEffect(() => {
        localStorage.setItem("arrayListTask", JSON.stringify(arrayListTask));
    }, [arrayListTask]);



    const addTodo = (props: any) => {
        setArrayListTask([...arrayListTask, props]);
        localStorage.setItem("arrayListTask", JSON.stringify(arrayListTask));
    }

    const toggleTask = (props: any) => {
        const updatedTodos = (arrayListTask.map(task => {
            if (task.key === props.key) {
                task.ifDone = props.checkedState;
                props.formTask.classList.toggle("crossed-line");
            }
            return task;
        }));
        setArrayListTask(updatedTodos);
    };

    const deleteTask = (props) => {
        const updatedArray = [...arrayListTask].filter(task => task.key !== props.key);
        setArrayListTask(updatedArray);
    };

    return (
        <div className="main-content">
            <TodoInputForm onSubmit={addTodo}/>
            <ListTask arrayTasks={arrayListTask} onClickDelete={deleteTask} onClickToggle={toggleTask}/>
        </div>
    );
}
export default App;
