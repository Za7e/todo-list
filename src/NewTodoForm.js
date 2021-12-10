import { Component } from "react";

class NewTodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todo: ""
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(evt) {
        this.setState({ [evt.target.name]: evt.target.value });
    }

    handleSubmit(evt) {
        evt.preventDefault();
        this.props.addTodo(this.state.todo);
        this.setState({ todo: "" });
    }

    render() {
        return (
            <form className="newTodoForm" onSubmit={this.handleSubmit}>
                <label htmlFor="todo">New Todo:</label>
                <input
                    type="text"
                    name="todo"
                    id="todo"
                    placeholder="New Todo"
                    value={this.state.todo}
                    onChange={this.handleChange}>
                </input>
                <button>Add Todo</button>
            </form>
        )
    }
}

export default NewTodoForm