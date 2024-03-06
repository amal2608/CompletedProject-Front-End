import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { Button } from '@mui/material';

import CardContent from '@mui/material/CardContent';
import Card from '@mui/material/Card';


import baseUrl from '../../Api';



const Address = () => {
  const { id } = useParams()

  var [ptype, setPtype] = useState({
    "name": '',
    "address": '',
    "phone": '',
    "quantity":'',
    "date":'',
    "status":'ORDERED',
    "eventid": id
   
  });





  const navigate = useNavigate();

  const ptypehandler = (event) => {

    const { name, value } = event.target
    setPtype((ptype) => ({ ...ptype, [name]: value }))

  }

  const saveData = () => {
    axios.post(baseUrl + "/saveOrder", ptype)
      .then((response) => { 
        alert("Record Saved") 
        navigate('/userhome')})
      .catch(err => console.log(err))
      
  }

  return (
    <div className='background-3'>


      <form>
        <Card sx={{ minWidth: 275 }}>
          <CardContent>
            <center>
              <h1>Customer details</h1>

              Name : <input type="text" name="name" id='p1' value={ptype.name} onChange={ptypehandler} />
              <br /><br />
              Address : <input type="text" name="address" id="p2" value={ptype.address} onChange={ptypehandler} />
              <br /><br />
              Phone no : <input type="number" name="phone" id="p6" value={ptype.phone} onChange={ptypehandler} />
              <br /><br />
              Quantity : <input type="number" name="quantity" id="p7" value={ptype.ccount} onChange={ptypehandler} />
              <br></br>
              <br></br>
              Date : <input type="date" name="date" id="p8" value={ptype.date} onChange={ptypehandler}/>
              <br></br>
              <br></br>
              Time : <input type="time" name="time" id="p9" value={ptype.time} onChange={ptypehandler}/>
              <br/><br/>
              <input type="hidden" name="status" id="p9" value={ptype.status} onChange={ptypehandler}/>
            <br /><br />
              <Button variant='contained' onClick={saveData}>SAVE</Button>
            </center>
          </CardContent>
        </Card>
      </form>
    </div>

  )
}

export default Address
