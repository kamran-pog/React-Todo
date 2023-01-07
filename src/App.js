import React from 'react';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import "./components/Todo.css";
const todolist =
[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todolist
    };
  }

  toggleTodo = (todoId) => {
    console.log(todoId);
    this.setState({
      todolist: this.state.todolist.map((todo) => {
        if (todoId === todo.id) {
          return {
            ...todo,
            completed: !todo.completed
          }
        }
        return todo;
      })
    });
  };

  addTodo = (todoName) => {
    const newTodo = {
      task: todoName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      ...this.state,
      todolist: [
        ...this.state.todolist,
        newTodo
      ]
    });
  };

  clearCompleted = e => {
    e.preventDefault();
    this.setState({
      ...this.state,
      todolist: this.state.todolist.filter((todo) => !todo.completed)
    });
  };
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  render() {
    return (
      <div>
        <h1>My Todo List</h1>
        <TodoForm addTodo={this.addTodo}/>
        <TodoList toggleTodo={this.toggleTodo} 
          todolist={this.state.todolist}
          clearCompleted={this.clearCompleted}/>
      </div>
    );
  }
}

export default App;
