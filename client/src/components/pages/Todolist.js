import React, { Component } from "react";
// import Header from "./components/layout/Header";
import Todos from "../todo/Todo";
// import Nav from "./layout/LoginList";
import AddTodo from "../todo/AddTodo";
import uuid from "uuid";
import "./App.css";
import AppBar from "../AppBar";
import API from "../../utils/API"
// import nameDisplay from "./nameDisplay"
import Drawer from "../Drawer"
class Members extends Component {
  state = {
    todos: [],
    title: "",
  };

  componentDidMount() {
    this.loadTodos();
  }

  loadTodos = () => {
    API.GetShoppingList()
      .then(todos =>
        {this.setState({ todos, title: ""})
      console.log(todos,"todos")}
      )
      .catch(err => console.log(err));
  };


  markComplete = todo => {
    var newTodo = {
      id: todo.id,
      completed: !todo.completed
    }
    API.UpdateShoppingList(newTodo)
    .then(() => this.loadTodos())
      .catch(err => console.log(err));
  };


  delTodo = id => {
    API.DeleteShoppingList(id)
      .then(() => this.loadTodos())
      .catch(err => console.log(err));
  };

  addTodo = title => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completeted: false
    };

    this.setState({ todos: [...this.state.todos, newTodo] });
  };

  render() {
    return (
// <Nav className="App">
          <div className="container">
            {/* <AppBar />
            <Drawer /> */}
            <AddTodo loadTodos={this.loadTodos} addTodo={this.addTodo} />
            <Todos
              todos={this.state.todos}
              
              markComplete={this.markComplete}
              delTodo={this.delTodo}
            />
          </div>
// </Nav>
    );
  }
}

export default Members;
