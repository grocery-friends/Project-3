import React, { useEffect } from "react";
import AppBar from "../AppBar";
import API from "../../utils/API";
import { useStoreContext } from "../../utils/GlobalState";
import { LOADING, SET_CURRENT_USER } from "../../utils/actions";
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

  state ={
    modal: false,
    currentUser: {email: "dummy"},
    classes: useStyles,
    friendList: []
  }

  handleModal = (info)=>{
    this.setState({modal:!this.state.modal})
    this.setState({friendList:info})
    console.log(info)
  }

   handleFriendList (friend){
    return API.GetShoppingListFriend(friend).then(data=>{
    {return data}
    })
  }
  handleClose = ()=>{
    this.setState({modal:false})
  }

 render(){
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
      <Drawer friendList={this.handleFriendList} handleModal = {this.handleModal}/>
      <div className="text-center">{this.state.currentUser && this.state.currentUser.email}</div>
      </div>
      <Paper />
      <Paper2 />
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.state.modal}
        onClose={this.handleClose}
      >
        <div  className={"friendModal"}>
          <h2 id="simple-modal-title">Text in a modal</h2>
          
          <div id="simple-modal-description">
   {this.state.friendList.length? this.state.friendList.map(listItem=>{
             return <p>{listItem.title}</p>
           }): (<div>no items</div>)}
           
          </div>
          {/* <SimpleModal /> */}
        </div>
      </Modal>
    </div>
  );
 }
  
}

export default Members;
