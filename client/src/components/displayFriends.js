import React, { Component } from "react";
import API from "../utils/API";
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles(theme => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));

class Friends extends Component {
    // Setting our component's initial state
    state = {
        users: [],
        email: "",
        modal: false,
        friendList: "",
        styles: useStyles
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

    getFriendList = (event) => {
        console.log(event.target.textContent)
        this.props.friendList(event.target.textContent).then(data => {
            console.log("Setting modal to true")
            this.setState({ friendList: data })
            this.props.handleModal(data)
        }
        )
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
                    return (
                        <>

                            <ListItem button onClick={this.getFriendList} key={user.email}>
                                <ListItemText name={user.email} primary={user.email} />
                            </ListItem>
                        </>

                    )
                })}
            </div>
        );
    }
}

export default Friends;
