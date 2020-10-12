import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar'
import Dashboard from './component/Dashboard/dashboard'
import LoginForm from './component/Form/Form'


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={
      loggedIn: false
    }
  }

  handleClick=(e)=>{
    e.preventDefault()
    this.setState({
      loggedIn: true
    })
  }
  
  render(){
  return this.state.loggedIn ? <div> <Navbar /> <Dashboard /> </div> :(
   <div className="App">
     <Navbar />
      <LoginForm onClick={this.handleClick} />
   </div>
  );
  }
}






export default App;