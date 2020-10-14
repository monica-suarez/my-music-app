import React from 'react'
import { Slider } from '@material-ui/core'


const SliderBar = (props) =>{
    const valuetext=()=>{
        return `${props.volume}`;
      }
      const handleChange = (e, newVolume) => {
        e.preventDefault()
        props.setVolume(newVolume)
}
    return(    
        <Slider
            defaultValue={props.volume}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={10}
            marks
            min={0}
            max={100}
            onChange={handleChange}
            setVolume={props.setVolume}
        />
    )
}
export default SliderBar