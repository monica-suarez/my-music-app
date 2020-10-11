import React from 'react';
// import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Card, CardContent, CardActions, Typography, Box, Switch }from '@material-ui/core';
// import CardMedia from '@material-ui/core/CardMedia';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import SkipNextIcon from '@material-ui/icons/SkipNext';
import './cards.css'

   const Cards = () =>{
    const [state, setState] = React.useState({
        checkedA: true,
        checkedB: true,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
      };
 
    return(
        <Box display="flex" justifyContent="center"  m={1} p={1} bgcolor="background.paper"
        align-items="center"
        marginTop="50px">
            <Box>
                <Card className="mediaCard" p={5} elevation={3}>
                    <div className="onlineMode">
                    <Typography variant="h5">
                        Online Mode
                    </Typography>
                    <br/>
                    <Typography>
                        Is this application connected to the internet?
                    </Typography>
                    </div>
                    <br/>
                    <br/>
                    <Switch checked={state.checkedA}
                        onChange={handleChange}
                        name="checkedA"
                        inputProps={{ 'aria-label': 'secondary checkbox' }}/>
                </Card>
            </Box>
            <Box>
                <Card className="mediaCard" p={1} elevation={3}>
                    <Typography>
                        Woot
                    </Typography>
                </Card>
            </Box>
            <Box>
                <Card className="mediaCard" p={1} elevation={3}>
                    <Typography>
                        Woot
                    </Typography>
                </Card>
            </Box>
        </Box>
    )
   }

   export default Cards