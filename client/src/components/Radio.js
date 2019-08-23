import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import Radio from '@material-ui/core/Radio';

const GreenRadio = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})(props => <Radio color="default" {...props} />);

export default function RadioButtons(props) {
  const [selectedValue, setSelectedValue] = React.useState('a');

  function handleChange(event) {
    setSelectedValue(event.target.value);
  }

  return (
    <div>
      <GreenRadio
        checked={selectedValue === 'c'}
        onChange={props.onChange}
        value="c"
        name="radio-button-demo"
        inputProps={{ 'aria-label': 'C' }}
      />
    </div>
  );
}