import React from 'react';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
            newTodo: ""
        };
    }

    handleChange = e => {
        this.setState({
            ...this.state, 
            newTodo: e.target.value
        });
    };

    submitTodo = e => {
        e.preventDefault();
        this.props.addTodo(this.state.newTodo);
        this.setState({ 
            ...this.state, 
            newTodo: "" 
        });
    };

    render() {
        return (
            <form onSubmit={this.submitTodo}>
                <input
                    type='text'
                    name='todo'
                    value={this.state.newTodo}
                    onChange={this.handleChange}
                ></input>
                <button className="todobutton" disabled={this.state.newTodo.length<1}>Add Todo</button>
            </form>
        )
    }
}

export default TodoForm;