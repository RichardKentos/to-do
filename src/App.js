import './App.css';
import React, {useEffect, useState} from "react";
import Todolist from "./components/Todolist";
import Todo from "./components/Todo";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'

function App() {
const changeInput = (e) => {  
  setTodoInput(e.target.value);
  setInputValue(e.target.value)
}

const enterSubmit = (e) => {
  if (e.key === "Enter") {
    addTodo()
  }
}

useEffect(() => {
  window.addEventListener("keypress", enterSubmit)
  return () => window.removeEventListener("keypress", enterSubmit)
  
})


const [todoInput, setTodoInput] = useState("");
const tick = <FontAwesomeIcon className="doneTodos" icon={faCheckCircle} />
const [isDone, setIsDone] = useState(false);
let [todos, setTodos]= useState(JSON.parse(localStorage.getItem("todos")));
const [inputValue, setInputValue] = useState()
let [finished, setFinished] = useState([]);


useEffect(() => {
  localStorage.setItem('todos', JSON.stringify(todos));
}, [todos])


const addTodo = () => {
  setTodos(oldTodo => [...oldTodo, todoInput]);
  setInputValue("")
}

const delTodos = () => {
  setTodos([]);
  setFinished([])
}

  return (
    <div>
      <ul className="to-do">
        <h1>To do</h1>
        <div className="add">
          <input value={inputValue} placeholder="What you need to do" onChange={changeInput} type="text"/>
          <input onClick={()=> addTodo()} value="Add" type="submit"/>
          <input onClick={()=> delTodos()} value="Delete" type="submit"/>
        </div>
      <Todolist setIsDone={setIsDone} isDone={isDone} setFinished={setFinished} setTodos={setTodos} todos={todos} />
      </ul>
    
      <ul className="done">
        <h1>Done</h1>
          {isDone ? <Todo tick={tick} text={finished} /> : null}
      </ul>

  
      

    </div>
  );
}

export default App;
