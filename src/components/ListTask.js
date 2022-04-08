import React from "react";
import deleteSymbol from '../image/deleteSymbol.png';

function ListTask( tasks ) {

    //const tasks = value ;
    for (let i = 0; i < tasks.length; i++) {
        console.log(tasks.at(i))
    }
    const testNum = tasks.value.length;
    console.log("test" + tasks.value.length);

    if(tasks.value.length>0) {
        const listTasks = tasks.value.map((value) =>
            <li className="list-tasks" key={value.id}>
                <form>
                    <input type="checkbox" className="list-checkbox"/>
                    {value.text}
                </form>

            </li>
        );
        return(
            <div>
                <ul className="list-tasks-container">{listTasks}</ul>
            </div>
        );
    }else{
        return(

            <div>
                <h1>Lista tom {testNum}</h1>
            </div>
        )
    }


}
export default ListTask;