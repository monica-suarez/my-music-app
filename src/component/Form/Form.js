import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField , Button } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
        margin: theme.spacing(3),
        width: '25ch',
    },
  },
}));

const LoginForm = () =>{
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-username-input"
          label="Username"
          type="username"
      />
      <br/>
      <TextField id="standard-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"/>
      <br/>
      <Button variant="contained" size="small" color="primary" className={classes.margin} disableElevation>Log In</Button>
      
    </form>
  );
}


  export default LoginForm