
import React from 'react'
import { Todo } from '../Model';

type Props = {
    todo:Todo;
    todos:Todo[];
    settodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({todo,todos,settodos}:Props) => {
  return (
    <div>
      
    </div>
  )
}

export default SingleTodo
