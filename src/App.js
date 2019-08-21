import React, { Component } from "react";
import Header from "./components/layout/Header";
import Todos from "./components/Todo";
import Nav from "./components/layout/LoginList";
import AddTodo from "./components/AddTodo";
import uuid from "uuid";

import "./App.css";

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: "2 apple",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "cup of noodle",
        completed: false
      },
      {
        id: uuid.v4(),
        title: "steak",
        completed: false
      }
    ]
  };
  markComplete = id => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if (todo.id === id) {
          todo.completed = !todo.completed;
        }
        return todo;
      })
    });
  };

  delTodo = id => {
    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id)]
    });
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
        <Nav className="App">
          <div className="container">
            <AddTodo addTodo={this.addTodo} />
            <Todos
              todos={this.state.todos}
              markComplete={this.markComplete}
              delTodo={this.delTodo}
            />
          </div>
        </Nav>
    );
  }
}

export default App;
