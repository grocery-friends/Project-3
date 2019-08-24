import React, { Component } from "react";
import API from "../utils/API";
import Button3 from "./button3";
import Checkbox2 from "./Checkbox2"

class Books extends Component {
    // Setting our component's initial state
    state = {
        users: [],
        email: ""
    };

    // When the component mounts, load all books and save them to this.state.books
    componentDidMount() {
        this.loadUsers();
    }

    // Loads all books  and sets them to this.state.books
    loadUsers = () => {
        API.getNonFriends()
            .then(users => {
                this.setState({ users, email: "" })
                console.log(users, "users")
            }
            )
            .catch(err => console.log(err));
    };
    onClick = event => {
        event.preventDefault();
        
          API.addFriends({
            email: this.state.email,
          })
            .then(res => this.props.loadUsers())
            .catch(err => console.log(err));
        
      };

    render() {
        return (
            <div>

                {this.state.users.map(user => {
                    return (
                        <ul>
                        <Button3 text={user.email} value={user.email} onClick={this.onClick}  />
                        </ul>
                    );
                })}

            </div>
        );
    }
}

export default Books;
