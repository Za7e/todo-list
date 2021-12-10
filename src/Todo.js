import { Component } from "react";

class Todo extends Component {
    render() {
        return (
            <div className="Todo">{this.props.text}</div>
        )
    }
}
export default Todo