import React from 'react'
import { Slider } from '@material-ui/core'


const SliderBar = () =>{
    const valuetext=(value)=>{
        return `${value}`;
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
        />
    )
}
export default SliderBar