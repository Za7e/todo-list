import { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import { v4 as uuidv4 } from 'uuid';

class ToDoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        }
        this.addTodo = this.addTodo.bind(this);
        this.createTodos = this.createTodos.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
    }
    addTodo(newText) {
        let newTodo = { text: newText, id: uuidv4() };
        this.setState(state => ({
            todos: [...state.todos, newTodo]
        }));
    }
    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    }
    createTodos() {
        return (
            this.state.todos.map(todo => (
                <Todo text={todo.text} key={todo.id} id={todo.id} removeTodo={this.removeTodo} />
            ))
        )
    }
    render() {
        return (
            <div className="ToDoList">
                <h1>HELLO!</h1>
                {this.createTodos()}
                <NewTodoForm addTodo={this.addTodo} />
            </div>
        )
    }
}

export default ToDoList