import React, { Component } from "react";
import API from "../utils/API";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

class Friends extends Component {
    // Setting our component's initial state
    state = {
        users: [],
        email: ""
    };

    // When the component mounts, load all books and save them to this.state.books
    componentDidMount() {
        this.loadfriends();
    }

    // Loads all books  and sets them to this.state.books
    loadfriends = () => {
        API.getFriends()
            .then(users => {
                this.setState({ users, email: "" })
                console.log(users, "users")
            }
            )
            .catch(err => console.log(err));
    };

    getFriendList = (event) =>{
        console.log(event.target.textContent)
        this.props.friendList(event.target.textContent)
    }
    // onClick = email => event => {
    //     event.preventDefault();

    //     API.addFriends({
    //         email
    //     })
    //         .then(res => window.location.replace("/members"))
    //         .catch(err => console.log(err));

    // };

    render() {
        return (
            <div>
                {this.state.users.map(user => {
                    return(
            
                    
                        <ListItem button onClick={this.getFriendList} key={user.email}>
                            <ListItemText name={user.email} primary={user.email} />
                        </ListItem>
                    
                
                    )
                })}
            </div>
        );
    }
}

export default Friends;
