import React from 'react'
import { Todo } from '../Model';
import SingleTodo from './SingleTodo';


interface Props{
    todos:Todo[];
    settodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

const TodoList:React.FC<Props> = ({todos,settodos}:Props) => {
  return (
    <div className='todo'>
        {todos.map((todo)=>(
                <SingleTodo 
                todo={todo}
                key={todo.id}
                todos={todos}
                settodos={settodos}
                />
        ))}
    </div>
  )
}


export default TodoList
