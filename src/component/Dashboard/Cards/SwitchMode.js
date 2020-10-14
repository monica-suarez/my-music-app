import React from 'react'
import { Switch } from '@material-ui/core'

const SwitchMode = () =>{
    const [state, setState] = React.useState({
        checkedA: true
        // checkedB: false,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
      return(
        <Switch checked={state.checkedA}
        onChange={handleChange}
        name="checkedA"
        inputProps={{ 'aria-label': 'secondary checkbox' }}/>
      )
}

export default SwitchMode