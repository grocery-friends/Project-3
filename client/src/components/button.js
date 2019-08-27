import React from 'react';
// import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';

const useStyles = makeStyles(theme => ({  
  fab: {
  },
  putLeft: {
    position:"absolute",
    right: "10px",
    top: "15px"
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

export default function FloatingActionButtons(props) {
  const classes = useStyles();

  return (
    <div className={classes.putLeft}>
      {/* <Button size="small" onClick={props.onClick} variant="contained" color={props.color} className={classes.button}>
        {props.btnName}
        <DeleteIcon className={classes.rightIcon} />
      </Button> */}

      <Fab color={props.color} size="small" onClick={props.onClick} aria-label="delete" className={classes.fab}>
      <DeleteIcon />
      </Fab>
    </div>
  );
}