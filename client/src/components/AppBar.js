import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { useStoreContext } from "../utils/GlobalState";
import { LOADING, CLEAR_CURRENT_USER } from "../utils/actions";
import API from "../utils/API";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  // appBar:{
  //   background: "pink"
  // }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  const [state, dispatch] = useStoreContext();

  const handleOnClick = event => {
    event.preventDefault();
    dispatch({ type: LOADING });
    API.logout()
      .then(user => {dispatch({ type: CLEAR_CURRENT_USER, user });
      window.location.replace("/")})
      .catch(err => console.log(err));
  
  };


  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
          </IconButton> */}
          <Typography variant="h4" className={classes.title}>
          Grocery Pals
          </Typography>
          <Button onClick={handleOnClick} color="inherit">Logout</Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}