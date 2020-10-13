import React, { useState } from 'react';
import Cards from './Cards/Cards'
import './Cards/cards.css'



 const Dashboard = (props) =>{
    const [toggle, setToggle] = useState(true);
    const [volume, setVolume] = useState(20);

    return(
        <div className="dashboard">
        <h1 className="greeting">Welcome User!</h1>
        <Cards toggle={toggle} handleToggle={setToggle} volume={volume}/>
        <h2 className="system-notification">System Notifications:</h2>
        <p>{toggle === false ? 'You are now offline' : ''}</p>
        <p>{volume > 80? `Listening to music at a high volume could cause long-term hearing loss.` : ''}</p>
        <p>{props.value === 'low'? `Music quality is degraded. Increase quality if your connection allows it.` : " "}</p>
        </div>
    )
    }


export default Dashboard