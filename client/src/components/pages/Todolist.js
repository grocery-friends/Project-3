import React, { Component } from "react";
import Todos from "../todo/Todo";
import AddTodo from "../todo/AddTodo";
import uuid from "uuid";
import "./App.css";
import API from "../../utils/API";



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
          <div className="container">
            
            <AddTodo loadTodos={this.loadTodos} addTodo={this.addTodo} />
            <Todos
              todos={this.state.todos}
              
              markComplete={this.markComplete}
              delTodo={this.delTodo}
            />
          </div>
    );
  }
}

export default Members;
