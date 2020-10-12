import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Card, CardContent, CardActions, Box }from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Slider from '@material-ui/core/Slider';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';

import './cards.css'

   const Cards = () =>{
 
    return(
        <Box display="flex" justifyContent="center"  m={1} p={1} bgcolor="background.paper"
        align-items="center"
        marginTop="50px">
            <Box>
             <Card className="mediaCard" p={1} elevation={3} style={{padding: '10px 0px 3px 0px'}}>  
                    <CardHeader title="Online Mode" style={{paddingBottom: '2'}}/>
                        <Typography  variant="body2" style={{marginBottom: '25px'}}>
                        Is this application connected <br /> to the internet?
                        </Typography>
            <CardActions>
                <FormControlLabel
                    style={{paddingLeft: '5px'}}
                        control={
                            <Switch />
                        }
                />
            </CardActions>     
                </Card>
                    </Box>

            <Box>
            <Card className="mediaCard" p={1} elevation={3}>
                <CardHeader title="Master Volume" style={{paddingBottom: '2'}}/>
                    <Typography  variant="body2" style={{marginBottom: '25px'}}>
                     Overrides all other sound settings <br /> in this application
                    </Typography>
            <CardActions>
                <Slider
                defaultValue={30}
                aria-labelledby="discrete-slider"
                valueLabelDisplay="auto"
                step={10}
                marks
                min={0}
                max={100} />
            </CardActions>

                </Card>
                     </Box>
            <Box>
                <Card className="mediaCard" p={1} elevation={3}>
                <CardHeader title="Master Volume" style={{paddingBottom: '2'}}/>
                    <Typography>
                    Manually control the music quality in the event of poor connection
                    </Typography>
                    <CardActions>
          <FormControl fullWidth>
                <Select>
                    <MenuItem value={1}>Low</MenuItem>
                    <MenuItem value={2}>Normal</MenuItem>
                    <MenuItem value={3}>High</MenuItem>
                </Select>
          </FormControl>
        </CardActions>
                </Card>
            </Box>
        </Box>
    )
   }

   export default Cards