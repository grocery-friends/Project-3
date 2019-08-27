import React from 'react';
// import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({  
  fab: {
  },
  putLeft: {

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

      <Button color={props.color} size="small"  onClick={props.onClick} aria-label="delete" value={props.value} className={classes.fab}>
      {props.text}<PersonAddIcon />
      </Button>
    </div>
  );
}