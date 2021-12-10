import { Component } from "react";
import './Todo.css';

class Todo extends Component {
    constructor(props) {
        super(props);
        this.handleRemove = this.handleRemove.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
    }
    handleRemove(e) {
        this.props.removeTodo(this.props.id);
    }
    handleEdit(e) {
        this.props.editTodoForm(this.props.id);
    }

    render() {
        return (
            <div className="Todo">
                <p>{this.props.text}</p>
                <button onClick={this.handleEdit}>EDIT</button>
                <button onClick={this.handleRemove}>X</button>
            </div>
        )
    }
}
export default Todo