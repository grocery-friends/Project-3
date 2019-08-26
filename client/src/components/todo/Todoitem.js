import React, { Component } from "react";
import Proptypes from "prop-types";
import Button from "../button";
import "./todo.css"
import Checkbox from "../Checkbox"


export class Todoitem extends Component {
  getStyle = () => {
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: this.props.todo.completed ? "line-through" : "none",
      position:"relative"
    };
  };

  render() {
    const {id, title } = this.props.todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <Checkbox
            
            onChange={this.props.markComplete.bind(this, this.props.todo)}
          />{" "}
          {title}
          <Button className="Bbttnn" onClick={this.props.delTodo.bind(this, id)} style={btnstyle}  color="secondary" />
          
        </p>
      </div>
    );
  }
}

Todoitem.propTypes = {
  todo: Proptypes.object.isRequired
};

const btnstyle = {
    background: '#ff0000',
    color: '#fff',
    border: "none",
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}


export default Todoitem;
