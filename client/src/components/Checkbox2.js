import React from 'react';
// import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

import AssignmentSharpIcon from '@material-ui/icons/AssignmentSharp';
import AssignmentTurnedInSharpIcon from '@material-ui/icons/AssignmentTurnedInSharp';



export default function CheckboxLabels(props) {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });



  return (
      <FormControlLabel
        control={<Checkbox icon={<AssignmentSharpIcon fontSize="large" />} checkedIcon={<AssignmentTurnedInSharpIcon color="primary" fontSize="large" />} onChange={props.onChange} value="checkedG" />}
        
      />
      
  );
}

//   const handleChange = name => event => {
//     props.onChange()
//     setState({ ...state, [name]: event.target.checked });
//   };

//   return (
//           <Checkbox
//             checked={state.checkedB}
//             onChange={handleChange('checkedB')}
//             value="checkedB"
//             color="primary"
//           />
//   );
