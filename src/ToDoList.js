import { Component } from "react";
import Todo from "./Todo";
import NewTodoForm from "./NewTodoForm";
import EditTodoForm from "./EditTodoForm";
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
        this.editTodoForm = this.editTodoForm.bind(this);
        this.editTodo = this.editTodo.bind(this);
    }
    addTodo(newText) {
        let newTodo = { text: newText, isEditing: false, id: uuidv4() };
        this.setState(state => ({
            todos: [...state.todos, newTodo]
        }));
    }
    removeTodo(id) {
        this.setState({
            todos: this.state.todos.filter(todo => todo.id !== id)
        });
    }
    editTodoForm(id) {
        let newTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.isEditing = true
                return todo
            } else return todo
        })
        this.setState({
            todos: newTodos
        })
    }
    editTodo(text, id) {
        let newTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                todo.text = text
                todo.isEditing = false
                return todo
            } else return todo
        })
        this.setState({
            todos: newTodos
        })
    }

    createTodos() {
        return (
            this.state.todos.map(todo => {
                if (todo.isEditing === false) {
                    return (<Todo
                        text={todo.text}
                        key={todo.id}
                        id={todo.id}
                        removeTodo={this.removeTodo}
                        editTodoForm={this.editTodoForm} />)
                } else {
                    return (<EditTodoForm
                        editTodo={this.editTodo}
                        text={todo.text}
                        key={todo.id}
                        id={todo.id}
                    />)
                }
            })
        )
    }
    render() {
        return (
            <div className="ToDoList">
                <h1>TODO LIST!</h1>
                {this.createTodos()}
                <NewTodoForm addTodo={this.addTodo} />
            </div>
        )
    }
}

export default ToDoList