import React, {useState} from 'react';
import './App.css';
import TodoInputForm from './components/TodoInputForm';
import ListTask from "./components/ListTask";


function App(){

    const [arrayListTask, setArrayListTask] = useState<any[]>([]);

    const addTodo = (props: any) => {
        setArrayListTask([...arrayListTask, props]);
    }
    return (
        <div className="main-content">
            <TodoInputForm onSubmit={addTodo}/>
            <ListTask value={arrayListTask}/>
        </div>
    );
}
export default App;






/*const name = 'Josh Perez';


class testClass extends React.Component<{}, {  itemsList: undefined[];
    itemTask: { text: string; key: string; }; }>{

    constructor(props) {
        super(props);

        const container = document.getElementById('root');
        console.log(container)

        /*this.state={
            itemTask:""
        }*/
        /*this.state={
            itemsList:[],
            itemTask:{text:"", key:""}
        }

        this.handelTextChange = this.handelTextChange.bind(this);
        this.addItemToList = this.addItemToList.bind(this);
    }

    handelTextChange = (event) => {
        this.setState({
            itemsList:{
                text:event.target.value,
                key:Date.now()
            }
        })
        console.log("change : ")
    };

    addItemToList(event) {

        const newItem = this.state.itemTask;
        console.log(newItem)
        /*testFunction(this.testVar);*/
     /* }

        render() {
            return (
                <div className="main-content">
                    <h1 id="testText">Test text :</h1>;
                    <form id="new-task-container">
                        <input type="text" placeholder="Skapa ny uppgift"
                               onChange={this.handelTextChange}
                               value={this.state.itemTask.text}
                    />
                    <button type="button" onClick={this.addItemToList} id="addTaskButton">Lägg till!</button>
                </form>
            </div>
        )
    }
}
export default testClass;

/*
function addItemToList() {
    console.log("button" + name);
    this.setState({
        text: 'clicked 2'
    });

}*/

/*
function Welcome(props) {
return <h1>Hello, {props}</h1>;
}*/






/*class TodoApp extends React.Component  {
public testVar: string;

constructor(props) {
super(props);

this.testVar = "emmapemmma";

/*this.state={
    itemsList:[],
    itemTask:{text:"", key:""}
}*//*

    this.state={
      itemTask:""
    }

    this.handelTextChange = this.handelTextChange.bind(this);
  }

  handelTextChange = (event) => {
    this.setState({itemTask: event.target.itemTask});
    console.log("change : " + this.state.itemTask)
  };

  addItemToList() {
    console.log("button")
    /*testFunction(this.testVar);*/
    /*testFunction("test");
  }

  render() {
    return (
        <div className="main-content">
          <form id="new-task-container" >
            <input type="text" placeholder="Skapa ny uppgift"
                   onChange={this.handelTextChange}
                   value={this.state.itemTask}
            />
            <button type="button" onClick={this.addItemToList} id="addTaskButton">Lägg till!</button>
          </form>
        </div>
    )
  }
}
export default TodoApp;

function testFunction(props: any) {
  console.log("test" + props)
}*/
