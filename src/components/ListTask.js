import React from "react";
import { TiDelete } from 'react-icons/ti';

function ListTask( props ) {

    /*tasks.value.map((value) =>
        console.log("task: " + value.text + " - " + value.ifDone)
    );*/

    const toggleTask = (key, e) => {
        props.onClickToggle({
            key: key,
            checkedState: e.checked,
            formTask: e.parentNode
        });
    }

    const deleteTask = (key) => {
        props.onClickDelete({
            key
        });
    }

    if(props.arrayTasks.length>0) {
        const listTasks = props.arrayTasks.map((task) =>
            <li key={task.key} >
                <form className="list-task">
                    <input
                        type="checkbox"
                        className="task-checkbox"
                        onChange={(e) => toggleTask(
                            task.key,
                            e.target)} />
                    <div className="task-text">{task.text}</div>
                    <TiDelete className="task-delete" onClick={() => deleteTask(task.key)}/>
                </form>
            </li>
        );
        return(
            <ul className="list-tasks-container">{listTasks}</ul>
        );
    }else{
        return(

            <div className="list-task">
                <div className="task-text">Woho! Inga uppgifter att göra just nu.</div>
            </div>
        )
    }


}
export default ListTask;