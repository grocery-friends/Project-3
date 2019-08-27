import React from 'react';

import { makeStyles } from '@material-ui/core/styles';

import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
  dense: {
    marginTop: 19,
  },
  menu: {
    width: 200,
  },
}));



export default function TextFields(props) {
  const classes = useStyles();
  const [values, setValues] = React.useState({
    name: 'Cat in the Hat',
    age: '',
    multiline: 'Controlled',
    currency: 'EUR',
  });

  // const handleChange = name => event => {
  //   props.onChange();
  //   setValues({ ...values, [name]: event.target.value });
  // };

  return (

      <TextField
        id="standard-name"
        name={props.name}
        label={props.placeholder}
        className={classes.textField}
        value={props.value}
        // {values.name}
        onChange={props.onChange}
        margin="normal"
      />

  );
}