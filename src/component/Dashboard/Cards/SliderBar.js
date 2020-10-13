import React, { useState }  from 'react'
import { Slider } from '@material-ui/core'


const SliderBar = () =>{
    const valuetext=(value)=>{
        return `${value}`;
      }
      const [volumeControl, setVolumeControl] = useState();
      const changeVolume = (e) => {
        e.preventDefault()
        setVolumeControl(e.target.value)
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
            onChange={changeVolume}
            volumecontrol={volumeControl}
        />
    )
}
export default SliderBar