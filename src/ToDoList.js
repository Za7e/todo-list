import { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        this.addTodo = this.addTodo.bind(this);
        this.createTodos = this.createTodos.bind(this);
    }
    addTodo(text) {
        let newTodos = this.state.todos;
        newTodos.push(text);
        this.setState({ todos: newTodos });
    }
    createTodos() {
        return (
            this.state.todos.map(text => (
                <Todo text={text} />
            ))
        )
    }
    render() {
        return (
            <div className="ToDoList">
                <h1>HELLO!</h1>
                <Todo text="hello there" />
                {this.createTodos()}
                <NewTodoForm addTodo={this.addTodo} />
            </div>
        )
    }
}

export default ToDoList