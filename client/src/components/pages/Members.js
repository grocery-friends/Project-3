import React, { useEffect } from "react";
import AppBar from "../AppBar";
import API from "../../utils/API";
import Drawer from "../Drawer";
import Paper from "../paper";
import "./member.css";
import Paper2 from "../paper2";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

// getModalStyle is not a pure function, we roll the style only on the first render
// const [state, dispatch] = useStoreContext();

// useEffect(() => {
//     dispatch({ type: LOADING });
//     API.getCurrentUser(props.match.params.id)
//       .then(user => dispatch({ type: SET_CURRENT_USER, user }))
//       .catch(err => console.log(err));
//   }, []);
const useStyles = makeStyles(theme => ({
  paper: {
    position: 'absolute',
    width: 800,
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));
// const [open, setOpen] = React.useState(false);

class Members extends React.Component {

  state = {
    modal: false,
    user: { email: "" },
    classes: useStyles,
    friendList: []
  }

  componentDidMount() {
    this.loadCurrentUsers();
  }

  // Loads all books  and sets them to this.state.books
  loadCurrentUsers = () => {
    API.getCurrentUser()
      .then(user => {
        this.setState({ user, email: "" })
        console.log(user, "user")
      }
      )
      .catch(err => console.log(err));
  };

  handleModal = (info) => {
    this.setState({ modal: !this.state.modal })
    this.setState({ friendList: info })
    console.log(info)
  }

  handleFriendList(friend) {
    return API.GetShoppingListFriend(friend).then(data => {
      { return data }
    })
  }
  handleClose = () => {
    this.setState({ modal: false })
  }

  render() {
    return (

      <div className="cont">
        {/* <Modal
                aria-labelledby="simple-modal-title"
                aria-describedby="simple-modal-description"
                open={this.state.modal}
                // onClose={handleClose}
            >
                <div className={this.state.classes.paper}>
                    <h2 id="simple-modal-title">Text in a modal</h2>
                    <p id="simple-modal-description">
                        Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </p>
                </div>
            </Modal> */}
        <AppBar />
        <div className="contcont">
          <Drawer friendList={this.handleFriendList} handleModal={this.handleModal} />
          <div className="text-center"></div>
          {/* <NameCard /> */}
          <h1> Welcome, {this.state.user.email} </h1>
        </div>
        <Paper />
        <Paper2 />
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.modal}
          onClose={this.handleClose}
        >
          <div className={"friendModal"}>
            <br />
            <h2>Friend's Items</h2>
            <br></br>
            <div id="simple-modal-description">
              {this.state.friendList.length ? this.state.friendList.map(listItem => {
                return <p>{listItem.title}</p>
              }) : (<div>No items currently on list!</div>)}
            </div>
            {/* <SimpleModal /> */}
          </div>
        </Modal>
      </div>
    );
  }

}

export default Members;
