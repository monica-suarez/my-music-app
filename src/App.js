import React from 'react';
import './App.css';
import Navbar from './component/Navbar/Navbar'


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={

    }
  }
  
  render(){
  return (
   <div className="App">
     <Navbar />
   </div>
  );
  }
}

export default App;