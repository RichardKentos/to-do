import React, { useEffect, useState } from "react";
import Todo from "./Todo";

const Todolist = (props) => {

    if (props)


    return (
        <ul>
            <Todo setFinished={props.setFinished} 
                    setIsDone={props.setIsDone} 
                    setTodos={props.setTodos} 
                    text={props.todos}
                    isDone={props.isDone} />
        </ul>
    )
}

export default Todolist;