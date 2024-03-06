import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Card, CardContent } from '@mui/material';
import './Main.css';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import axios from 'axios';
import { Buffer } from 'buffer';
import Food from './Food';

const Foodedit = (props) => {
  const [inputs, setinputs] = useState(props.data);
  var [Eventview, setEventview] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  var [Foodview, setFoodview] = useState([]);
  const[update,setUpdate]=useState(false);
  const[selected,setSelected]=useState();
  const navigate = useNavigate();

  useEffect(()=>{

    axios.get("http://localhost:4005/eventview")
    .then(response =>{
        console.log(response.data)
        setEventview(response.data)
    })
    .catch(err=>console.log(err))

    axios.get("http://localhost:4005/Foodview")
    .then(response =>{
        console.log(response.data)
        setFoodview(response.data)
    })
    .catch(err=>console.log(err))
},[])

  const inputsHandler = (Food) => {
    const { name, value } = Food.target;
    setinputs((inputs) => ({ ...inputs, [name]: value }));
  };

  const saveData = () => {
    const formData = new FormData();

    formData.append('Foodname', inputs.Foodname);
    formData.append('Foodtype', inputs.Foodtype);
    formData.append('Amount', inputs.Amount);    
    formData.append('Description', inputs.Description);
    formData.append('Eventid', inputs.Eventid);
    formData.append('Status', inputs.Status);
    formData.append('Foodimage', selectedImage);

    fetch(`http://localhost:4005/Foodedit/${inputs._id}`,
    { method: 'put', body: formData, })
    .then((response) => response.json())
    .then((data) => {
        alert("record saved")
        navigate('/foodview')
    })
    .catch((err) => {
        console.log("error", err)
    })
    navigate('/home')


   
   
  };

  const handleImage = (Food) => {
    const file = Food.target.files[0];
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
            <center><h1>Food Details</h1></center>
             
              Food Name:
              <br/>
              <input type='text' name='Foodname' id='p2' value={inputs.Foodname} onChange={inputsHandler} />
              <br />
              <br />
              Food Type:
              <br/>
              <select name='Foodtype' value={inputs.Foodtype} onChange={inputsHandler}>
                <option value="Veg">Veg</option>
                <option>NonVeg</option>
                <option>Desert</option>
                <option>Snacks</option>
              </select>
              <br />
              <br />
              Amount:
              <br/>
              <input type='number' name='Amount' id='p6' value={inputs.Amount} onChange={inputsHandler} />
              <br />
              <br />
              Food Image:
              <br/>
              <img src={`data:image/jpeg;base64, ${Buffer.from(inputs.Foodimage.data)}`}
                      width="50" height="50" alt="Error" />
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
              Event Name: 
              <br/>
      
              <select name="Eventid" value={inputs.Eventid} onChange={inputsHandler}  >
            {
            Eventview.map((value,index)=>{
                return(
                    <option key={index} value={value._id}>{value.Eventname}</option>
                )


            })
        }
    </select><br/>
    <br/>
              Status:
              <br/>
              <select name='Status' value={inputs.Status} onChange={inputsHandler}>
                <option value="ACTIVE">ACTIVE</option>
                <option value="INACTIVE">INACTIVE</option>
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
    result=<Food data={selected} method='put'/>
      return (result);
  
};

export default Foodedit;
