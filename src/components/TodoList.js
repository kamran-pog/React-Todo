// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react';
import Todo from './Todo';

const TodoList = (props) => {
    return (
        <div>
            {props.todolist.map((todo) => (
                <Todo key={todo.id} todo={todo} toggleTodo={props.toggleTodo}/>
            ))
        }
        <button onClick={props.clearCompleted} className="clearbutton">Clear Completed</button>
        </div>
    )
};

export default TodoList;