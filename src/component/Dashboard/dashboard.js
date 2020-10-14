import React from 'react';
import Cards from './Cards/Cards'
import './Cards/cards.css'


 const Dashboard = (props) =>{
    const [state, setState] = React.useState({
        online: true,
        notifications: []
      });
    }
//    const online = () => {
//         this.setState({online:!this.state.online})
console.log(props.state.checkedA)
    return(
        <div className="dashboard">
        <h1 className="greeting">Welcome User!</h1>
        <Cards />
        <h2 className="system-notification">System Notifications:</h2>
        <p>{props.checked === true? "": "Your application is offline. You won't be able to share or stream music to other devices." } </p>
        <p>{}</p>
        <p>{}</p>
        </div>
    )

    }

export default Dashboard