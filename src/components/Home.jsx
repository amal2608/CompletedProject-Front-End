import React from 'react'
import './Main.css'
import LocalFloristIcon from '@mui/icons-material/LocalFlorist';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
import FoodBankOutlinedIcon from '@mui/icons-material/FoodBankOutlined';

const Home = () => {
  return (
  
        <div className='background-container'>
     
     <center>

      <FoodBankOutlinedIcon style={{ fontSize:100 , color:'inherit'}}/>
       <h1 style={{ fontFamily : 'Cursive ', color : 'inherit'}}>ACP Event Management</h1>
       <h3 style={{ fontFamily : 'Lucida Handwriting ', color : 'inherit'}}>
       enjoy the events</h3>
       <br />
       <Link to="/login"
       style={{color:'white'}}
       hoverable>
       <Button variant="text" color='inherit'>LOGIN</Button>
       </Link>
       
     </center>

    </div>

  )
}

export default Home