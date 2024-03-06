import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import Eventedit from './Eventedit';
import { Buffer } from 'buffer';
import Navbar from './Navbar';
import Sidebar from './Sidebar';
import { useNavigate } from 'react-router-dom';

const Eventview = () => {


  var [Eventview, setEventview] = useState([]);
  var [selected, setSelected] = useState();
  var [update, setUpdate] = useState(false);
  const navigate = useNavigate();
  
  useEffect(()=>{
    axios.get("http://localhost:4005/eventview")
    .then(response =>{
        console.log(response.data)
        setEventview(response.data)
    })
    .catch(err=>console.log(err))
},[])


  const deletevalues = (id) => {
    console.log("Deleting", id);
    axios.put("http://localhost:4005/eventupdatestatus/"+id)
      .then(() => {
        console.log("Deleted successfully");
        alert("DELETED");
        navigate('/Eventview');
      })
      .catch(error => {
        console.error("Error deleting record:", error);
        alert("Error deleting record. Please check console for details.");
      });
  };

  const updatevalues = (value) => {
    console.log("Updating", value);
    setSelected(value);
    setUpdate(true);
  };

  var result =

    <div >
      <Navbar />
      <Sidebar />

      <TableContainer style={{ marginLeft: '12vw', width: "85vw", marginTop:'5vw' }}>
        
      <center>
        
        <Typography><h3><b>Event Details view</b></h3></Typography>
      </center>
      <br />
        <Table>
          <TableHead>
            <TableRow>
              
              <TableCell><b>Event ID</b></TableCell>
              <TableCell><b>Event Name</b></TableCell>
              <TableCell><b>Event Type</b></TableCell>
              <TableCell><b>Amount</b></TableCell>

              <TableCell><b>Description</b></TableCell>


              <TableCell><b>Image</b></TableCell>
              <TableCell><b>Status</b></TableCell>
              <TableCell><b>Edit</b></TableCell>
              <TableCell><b>Delete</b></TableCell>
             
            </TableRow>
           
          </TableHead>

          <TableBody>
            {Eventview.map((value, index) => {
              return (
                <TableRow key={index}>
                  <TableCell>{value.Eventid}</TableCell>
                  <TableCell>{value.Eventname}</TableCell>
                  
                  <TableCell>{value.Eventtype}</TableCell>
                  <TableCell>{value.Amount}</TableCell>

                  <TableCell>{value.Description}</TableCell>

                  <TableCell>
                    <img src={`data:image/jpeg;base64, ${Buffer.from(value.Eventimage.data).toString('base64')}`}
                      width="50" height="50" alt="Error" />
                  </TableCell>
                  <TableCell>{value.Status}</TableCell>
                  <TableCell>
                    <ModeEditOutlineIcon color='secondary' onClick={() => updatevalues(value)} />
                  </TableCell>
                  <TableCell>
                    <DeleteForeverIcon color='error' onClick={() => deletevalues(value._id)}>
                    </DeleteForeverIcon>
                  </TableCell>
                </TableRow>
              )
            })}
          </TableBody>

        </Table>
      </TableContainer>


    </div>

  if (update) {
    result = <Eventedit data={selected} method='put' />
  }

  return (result)
}



export default Eventview
