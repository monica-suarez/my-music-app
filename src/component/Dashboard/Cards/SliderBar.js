import React from 'react'
import { Slider } from '@material-ui/core'


const SliderBar = (props) =>{
    const valuetext=(value)=>{
        return `${value}`;
      }
      const handleChange = () => {
        //   console.log(props.volume)
        // props.handleVolume(props.volume)
}
    return(    
        <Slider
            defaultValue={20}
            getAriaValueText={valuetext}
            aria-labelledby="discrete-slider"
            valueLabelDisplay="auto"
            step={10}
            marks
            min={0}
            max={100}
            onChange={handleChange}
            
        />
    )
}
export default SliderBar