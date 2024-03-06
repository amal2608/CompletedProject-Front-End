import React from 'react';
import './Sidebar.css';
import HomeIcon from '@mui/icons-material/Home';
import EditNoteIcon from '@mui/icons-material/EditNote';
import VisibilityIcon from '@mui/icons-material/Visibility';

const Sidebar = () => {
    
    return (
        <div className="sidebar">

            <ul>
                <li className='list-item'> 
                < HomeIcon className='icon' /> 
                < a href="\home">Home</a>
               </li>
                
            </ul>
            <br />
            <div className='list-item'>
                <EditNoteIcon className='icon' fontSize='large'/>Registrations
            </div>
            <br/>
            <ul>
                {/* <a href='/food'><li>Food Details</li></a> */}
                <a href='/Eventnew'><li>Event </li></a>
                <a href='/food'><li>Food</li></a>
            </ul>
            <br/>
            <br/>
            <div className='list-item'>
                <VisibilityIcon className='icon'/> View
            </div>
            <br/>
            <ul>
                {/* <a href="/foodview"><li>Food Details View</li></a> */}
                <a href="/Eventview"><li>Event View</li></a>
                <a href="/foodview"><li>Food View</li></a>
                <a href="/addressview"><li>Order Details</li></a>
                
            </ul>

        </div>
    );
};

export default Sidebar;