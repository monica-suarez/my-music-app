import React from 'react';
import Cards from './Cards/Cards'
import './Cards/cards.css'


 const Dashboard = () =>{
    return(
        <div className="dashboard">
        <h1 className="greeting">Welcome User!</h1>
        <Cards />
        <h2 className="system-notification">System Notifications:</h2>
        </div>
     <Cards />
    )
    }


export default Dashboard