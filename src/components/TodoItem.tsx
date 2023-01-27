import React from "react"
import Todo from "../models/todos"

const TodoItem:React.FC<{text: string}> = (props)=>{
  return <li>{props.text}</li>
}

export default TodoItem