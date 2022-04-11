import React, {useState} from "react";

function TodoInputForm (props){
    const [input, inputState] = useState("");

    const handelChange = (e) => {
        inputState(e.target.value);
    };


    
    const handelSubmit = (e) => {
        e.preventDefault();

        props.onSubmit({
            key:Date.now(),
            text:input,
            ifDone:false
        });

        inputState("")
    }

    return(
        <form id="new-task-container" onSubmit={handelSubmit}>
            <input
                type="Text"
                placeholder="Skriv in en uppgift"
                value={input}
                name="name"
                className="todoInput"
                onChange={handelChange}/>
            <button id="addTaskButton">Lägg till</button>
        </form>
    )
}
export default TodoInputForm;