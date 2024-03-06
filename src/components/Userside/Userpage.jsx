import React from 'react'

import UserNavbarlogout from './UserNavbarlogout';
import { Link } from 'react-router-dom';

import './uhome.css'; 
const Userpage = () => {
  return (
    <div >
      <UserNavbarlogout />
      <div >
        <div className='image-container'>
      
        <div >
        <h1 className='heading'>Our services</h1>
        </div>
        </div>
        <p className='paragraph'>
        Event management involves planning, organizing, and executing various types of events, ranging from corporate conferences and trade shows to weddings, festivals, and concerts. It encompasses a wide range of tasks and responsibilities, including venue selection, budgeting, logistics, marketing, scheduling, coordinating vendors, managing staff, and ensuring the overall success of the event.

Event managers typically work closely with clients to understand their objectives and requirements, then develop a strategic plan to bring those ideas to life within the specified budget and timeframe. They coordinate with various stakeholders, such as vendors, sponsors, speakers, entertainers, and venue staff, to ensure that everything runs smoothly on the day of the event.
         </p>
        <div className='htext'> 
        
         
       
        </div>
        <Link to="/order">
          <button className="green-button">Book your Order</button>
        </Link>
      </div>
    </div>
  )
}

export default Userpage
