import React from 'react'
import { Select, FormControl, MenuItem } from '@material-ui/core'
import './cards.css'

const SoundSelector = (props) =>{
 const handleChange = (e) => {
      props.setVolumeQuality(e.target.value);
    };
    return(
        <FormControl className="soundQuality">
            <Select
                value={props.volumeQuality}
                onChange={handleChange}
                >
                <MenuItem value="normal">Normal</MenuItem>
                <MenuItem value="low">Low</MenuItem>
                <MenuItem value="high">High</MenuItem>
            </Select>
      </FormControl>
    )
}

export default SoundSelector