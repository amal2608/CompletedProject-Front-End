import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardContent } from '@mui/material';
import './Main.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

const Event = () => {
  const [inputs, setinputs] = useState({
            Eventid:'',
            Eventname:'',
             Amount:'', 
             Description:'',
             Eventtype:'',
             Status:'ACTIVE'
  });

  const [selectedImage, setSelectedImage] = useState(null);

  const navigate = useNavigate();

  const inputsHandler = (event) => {
    const { name, value } = event.target;
    setinputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const saveData = () => {
    const formData = new FormData();
    formData.append('Eventid', inputs.Eventid);
    formData.append('Eventname', inputs.Eventname);
    formData.append('Amount', inputs.Amount);    
    formData.append('Description', inputs.Description);
    formData.append('Eventtype', inputs.Eventtype);
    formData.append('Status', inputs.Status);
    formData.append('Eventimage', selectedImage);

    fetch('http://localhost:4005/Eventnew', {
      method: 'POST',
      body: formData
    })
      .then((response) => response.json())
      .then(() => {
        alert('Record saved');
        navigate('/Eventview');
      })
      .catch((err) => {
        console.error('Error:', err);
      });
  };

  const handleImage = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setinputs((inputs) => ({ ...inputs, image: file }));
  };

  return (
    
    <div>
    <Navbar/>
      <Sidebar/>
    <div className='background-3'>
      
      <form>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <center><h1>Event Details</h1></center>
             
              Event Code:
              <br/>
              <input type='text' name='Eventid' value={inputs.Eventid} onChange={inputsHandler} />
              <br />

              Event Name:
              <br/>
              <input type='text' name='Eventname'  value={inputs.Eventname} onChange={inputsHandler} />
              <br />

              Event Type:
              <br/>
              <select name='Eventtype' value={inputs.Eventtype} onChange={inputsHandler}>
                <option value='INDOOR'>INDOOR</option>
                <option>OUTDOOR</option>
              </select>
              <br />

              Amount:
              <br/>
              <input type='number' name='Amount' value={inputs.Amount} onChange={inputsHandler} />
              <br />

              Event Image:
              <br/>
              <input type='file' onChange={handleImage} />
              <br />

              Description:
              <br/>
              <textarea
                rows='4'
                name='Description'
                id='p7'
                value={inputs.Description}
                onChange={inputsHandler}
              />
              <br />

             
              Status:
              <br/>
              <select name='Status' value={inputs.Status} onChange={inputsHandler}>
                <option>ACTIVE</option>
                <option>INACTIVE</option>
              </select>
              <br />

              <Button variant='contained' onClick={saveData}>
                SAVE
              </Button>
         
          </CardContent>
        </Card>
      </form>
    </div>
    </div>
  );
};

export default Event;
