import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import "./paper.css";
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
          <h1>Add Friends</h1>
        {/* <Autocomplete /> */}
        {/* <Button3 /> */}
        <FriendsTest />
      </Paper>
    </div>
  );
}