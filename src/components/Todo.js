import React from "react";

const Todo = (props) => {
    const clicked = (e) => {
        if (e.target.className !== "through") {
          e.target.className = "through";
          console.log(e);
          props.setIsDone(true);
          const newTodos = props.text.filter((item) => {
            return item !== e.target.innerText
          });
          props.setTodos(newTodos);
          props.setFinished(oldArray => [...oldArray,e.target.textContent])
        }
        else {
          props.setIsDone(false);
          e.target.className = ""
        }
      }
  

    let todoElement;  
    let d = new Date();
    let date = d.getDate();
    let month = d.getMonth();
    let hours = d.getHours();
    let mins = d.getMinutes();

    
        todoElement = props.text.map( item => {
        // return <li onClick={clicked}>{` ${item} - added ${date}.${month+1}. ${hours}:${mins}`}</li>
        return (
          <>
          {props.tick}
          <li className="doneTodos" onClick={clicked}>{item}</li><br></br>
          </>
        )
        
        
      })
    


    return (
      <>
        {todoElement}<br></br>
      </>
    )
}

export default Todo;
