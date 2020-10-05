import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {TextField , Button} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(3),
      width: '25ch',
    },
  },
}));

const LoginForm = () =>{
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="standard-basic" label="Username" />
      <br/>
      <TextField id="standard-basic" label="Password" />
      <br/>
      <Button variant="contained" color="primary" disableElevation>Log In</Button>
      
    </form>
  );
}


  export default LoginForm