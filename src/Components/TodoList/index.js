import React from "react";
import todoAction from "../../Redux/Actions";
import { connect } from "react-redux";
import "./style.css";
class TodoList extends React.Component {
  state = {
    todo: ""
  };
  add = (e) => {
    this.setState({
      todo: e.target.value
    });
  };
  addTodo = () => {
    if (this.state.todo) {
      this.props.dispatch({ type: "ADDTODO", payload: this.state.todo });
      this.setState({
        todo: ""
      });
    }
  };
  delete = (value) => {
    let newArray = this.props.newValues.filter((v, i) => v.id != value.id);
    this.props.dispatch({ type: "DELETETODO", payload: newArray });
    console.log(newArray);
    console.log(value);
  };
  render() {
    console.log(this.props);
    let TodoList = this.props.newValues.map((value, index) => {
      return (
        <div key={index}>
          <p onDoubleClick={() => this.delete(value)}>
            {" "}
            {index + 1 + "." + value.todo}{" "}
          </p>
        </div>
      );
    });

    return (
      <div>
        <div className="todo">
          <h2>Todo List </h2>
          <input
            type="text"
            value={this.state.todo}
            onChange={(e) => this.add(e)}
            placeholder="Enter Todo"
          />
          <br></br>
          <button onClick={() => this.addTodo()}>Add Todo </button>
        </div>
        <div className="HIGH">
          <h3 className="list">TODOLIST</h3>
          <div className="listValues">
            <p>{TodoList}</p>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    newValues: state.todos
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    dispatch: dispatch
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
