import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Todolist from "./pages/Todolist";
import "./paper.css";
import Autocomplete from "./Autocomplete";
import Button3 from "./button3";
import FriendsTest from "./friendsTest"
const useStyles = makeStyles(theme => ({
  root: {
    padding: theme.spacing(3, 2),
  },
}));

export default function PaperSheet() {
  const classes = useStyles();

  return (
    <div className="paperCont">
      <Paper className={classes.root}>
        <Autocomplete />
        {/* <Button3 /> */}
        <FriendsTest />
      </Paper>
    </div>
  );
}