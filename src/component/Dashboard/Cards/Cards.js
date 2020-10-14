import React from 'react';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Card, Typography, Box }from '@material-ui/core';
// import CardMedia from '@material-ui/core/CardMedia';
// import IconButton from '@material-ui/core/IconButton';
import './cards.css'
import SliderBar from './SliderBar'
import SwitchMode from './SwitchMode'
import SoundSelector from './SoundSelector'

   const Cards = (props) => {
    console.log(props)
    return(
            <Box display="flex" justifyContent="center"  m={1} p={1} bgcolor="background.paper"
            align-items="center"
            marginTop="50px">
                <Box>
                    <Card className="mediaCard" p={5} elevation={3}>
                        <div className="onlineMode">
                        <Typography variant="h5" style={{fontWeight: "bold"}}>
                            Online Mode
                        </Typography>
                        <br/>
                        <Typography>
                            Is this application connected to the internet?
                        </Typography>
                        </div>
                        <br/>
                        <br/>
                        <SwitchMode toggle={props.toggle} handleToggle={props.handleToggle}/>
                    </Card>
                </Box>
                <Box>
                    <Card className="mediaCard" p={1} elevation={3}>
                        <Typography className="volumeText" variant="h5" style={{fontWeight: "bold"}}>
                            Master Volume
                        </Typography>
                        <br/>
                        <Typography className="volumeText">
                            Overrides all other sound settings in this application
                        </Typography>
                        <br/>
                        <SliderBar volume={props.volume} setVolume={props.setVolume}/>
                    </Card>
                </Box>
                <Box>
                    <Card className="mediaCard" p={1} elevation={3}>
                        <Typography className="soundText" variant="h5" style={{fontWeight: "bold"}}>
                            Sound Quality
                        </Typography>
                        <br/>
                        <Typography className="soundText">
                            Manually control the music quality in event of poor connection
                        </Typography>
                        <br/>
                        <br/>
                        <SoundSelector volumeQuality={props.volumeQuality} setVolumeQuality={props.setVolumeQuality}/>
                    </Card>
                </Box>
            </Box>
        )
   }

   export default Cards