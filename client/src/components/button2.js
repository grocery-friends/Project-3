import React from 'react';
// import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import LocalGroceryStoreIcon from '@material-ui/icons/LocalGroceryStore';
import Fab from '@material-ui/core/Fab';


const useStyles = makeStyles(theme => ({  
  fab: {
    top: "20px",
    left: "5px"
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

      <Fab color={props.color} size="small" onClick={props.onClick} aria-label="delete" type={props.type} value={props.value} className={classes.fab}>
      <LocalGroceryStoreIcon />
      </Fab>
    </div>
  );
}