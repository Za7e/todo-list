import React, { Component } from "react";

class EditTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: this.props.text
        }
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }
    handleSubmit(e) {
        e.preventDefault();
        this.props.editTodo(this.state.todo, this.props.id);
    }

    render() {
        return (
            <form className="EditTodoForm" onSubmit={this.handleSubmit}>
                <label htmlFor="todo">Edit: </label>
                <input
                    type="text"
                    name="todo"
                    id="todo"
                    value={this.state.todo}
                    onChange={this.handleChange}>
                </input>
                <button>Done</button>
            </form>
        )
    }
}

export default EditTodoForm