import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardContent } from '@mui/material';
import './Main.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import Event from './Event';
import { Buffer } from 'buffer';

const Eventedit = (props) => {
  const [inputs, setinputs] = useState(props.data);
  const [selectedImage, setSelectedImage] = useState(null);
const[update,setUpdate]=useState(false);
const[selected,setSelected]=useState();

  const navigate = useNavigate();

  const inputsHandler = (event) => {
    const { name, value } = event.target;
    setinputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const updatevalues = (value) => {
  setSelected(value);
  setUpdate(true);
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

    fetch(`http://localhost:4005/Eventedit/${inputs._id}`,
    { method: 'put', body: formData, })
    .then((response) => response.json())
    .then((data) => {
        alert("record saved")
       
    })
    .catch((err) => {
        console.log("error", err)
    })

    navigate('/home')
   
  };

  const handleImage = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    setinputs((inputs) => ({ ...inputs, image: file }));
  };
var result=
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
        <input type='text' name='Eventid' id='p1' value={inputs.Eventid} onChange={inputsHandler} />
        <br />
        <br />
        Event Name:
        <br/>
        <input type='text' name='Eventname' id='p2' value={inputs.Eventname} onChange={inputsHandler} />
        <br />
        <br />
        Event Type:
        <br/>
        <select name='Eventtype' value={inputs.Eventtype} onChange={inputsHandler}>
          <option>INDOOR</option>
          <option>OUTDOOR</option>
        </select>
        <br />
        <br />
        Amount:
        <br/>
        <input type='number' name='Amount' id='p6' value={inputs.Amount} onChange={inputsHandler} />
        <br />
        <br />
        Event Image:
        <br/>
        <img src={`data:image/*;base64,${Buffer.from(inputs.Eventimage.data).toString('base64').toString()}`} width="50" height="50" alt='Error' />
        <input type='file' onChange={handleImage} />
        <br />
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
        <br />
       
        Status:
        <br/>
        <select name='Status' value={inputs.Status} onChange={inputsHandler}>
          <option>ACTIVE</option>
          <option>INACTIVE</option>
        </select>
        <br />
        <br />
        <Button variant='contained' onClick={saveData}>
          SAVE
        </Button>
   
    </CardContent>
  </Card>
</form>
</div>
</div>
if(update)
result=<Event data={selected} method='put'/>
  return (result);
};

export default Eventedit;
