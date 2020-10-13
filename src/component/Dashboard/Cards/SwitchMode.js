import React from 'react'
import { Switch } from '@material-ui/core'

const SwitchMode = (props) =>{
      const handleChange = () => {
          console.log(props.toggle)
        props.handleToggle(!props.toggle)
      };

      return(
        <Switch 
        onChange={handleChange}
        checked={props.toggle}
        name="toggle"
       />
      )
}

export default SwitchMode