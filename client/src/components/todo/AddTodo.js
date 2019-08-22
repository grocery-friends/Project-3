import React, { Component } from "react";
import API from "../../utils/API"
export class AddTodo extends Component {

    state = {
        title: ''
    }

    onChange = (e) => this.setState({   title: e.target.value});


    onSubmit = event => {
      event.preventDefault();
      if (this.state.title) {
        API.PostShoppingList({
          title: this.state.title,
        })
          .then(res => this.props.loadTodos())
          .catch(err => console.log(err));
      }
    };


  render() {
    return (
      <form onSubmit={this.onSubmit} style={{    display: 'flex'  }}>
        <input 
        type="text" 
        name="title" 
        style= {{   flex: '10', padding: '5px'}}
        placeholder="add grocery ..."
        value={this.state.title}
        onChange={this.onChange} 
        />
        <input
        type="submit"
        value="Submit"
        className="btn"
        style={{flex: '1'}}/>
      </form>
    );
  }
}

export default AddTodo;
