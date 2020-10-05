import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar'
import Dashboard from './component/Dashboard/Dashboard'
import LoginForm from './component/Form/Form'


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      loggedIn: false
    }
  }
  
  render(){
  return this.state.loggedIn ? <Dashboard /> :(
   <div className="App">
     <Navbar />
      <LoginForm />
   </div>
  );
  }
}






export default App;