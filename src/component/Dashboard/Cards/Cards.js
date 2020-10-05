import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Card, CardContent, CardActions, Typography }from '@material-ui/core';
// import CardMedia from '@material-ui/core/CardMedia';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// import PlayArrowIcon from '@material-ui/icons/PlayArrow';
// import SkipNextIcon from '@material-ui/icons/SkipNext';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
    },
    details: {
      display: 'flex',
      flexDirection: 'column',
    },
    content: {
      flex: '1 0 auto',
    },
    cover: {
      width: 151,
    },
    // controls: {
    //   display: 'flex',
    //   alignItems: 'center',
    //   paddingLeft: theme.spacing(1),
    //   paddingBottom: theme.spacing(1),
    // },
    // playIcon: {
    //   height: 38,
    //   width: 38,
    // },
  }));

   const Cards = () =>{
    const classes = useStyles();
     const theme = useTheme();
    return(
     <Card className={classes.root}>
         <div className={classes.detail}>
         <CardContent className={classes.content}>
          <Typography component="h5" variant="h5">
            Testing Card
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            What in the card is this
          </Typography>
        </CardContent>
         </div>
         <CardActions>
         </CardActions>
     </Card>
    )
   }

   export default Cards