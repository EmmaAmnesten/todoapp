import React, {useState} from "react";

function TodoInputForm (props){
    const [input, inputState] = useState("");

    const handelChange = (e) => {
        inputState(e.target.value);
    };
    
    const handelSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            id:Date.now(),
            text:input
        });

        inputState("")
    }

    return(
        <form id="new-task-container" onSubmit={handelSubmit}>
            <input
                type="Text"
                placeholder="Ny todo"
                value={input}
                name="name"
                className="todoInput"
                onChange={handelChange}/>
            <button id="addTaskButton">Lägg till</button>
        </form>
    )
}
export default TodoInputForm;