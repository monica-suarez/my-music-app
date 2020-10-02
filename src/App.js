import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar'
import Dashboard from './component/Dashboard/Dashboard'


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  
  render(){
  return this.state.loggedIn ? <Dashboard /> :(
   <div className="App">
     <Navbar />
   </div>
  );
  }
}

export default App;