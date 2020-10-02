import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, IconButton, Typography } from '@material-ui/core'
import MenuIcon  from '@material-ui/icons/Menu'


 const Navbar = () =>{

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 0.05,
  },
  title: {
    flexGrow: 0.05,
  },
}));
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h5" className={classes.title}>
            Nicole and Monica's Music App
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default Navbar