
import axios from 'axios'

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import baseUrl from '../Api';

const Registeradmin = () => {
const history=useNavigate();

const [email,setEmail]=useState('')
const [password,setPassword]=useState('')

async function submit(e){
  e.preventDefault();

try{

  await axios.post( baseUrl+"/register",{ 
    email,password
})

  .then(res=>{
    if(res.data=="exist") {
     alert("User alredy exists")
    }

    else if(res.data=="notexist"){
      alert("registered")
     history("",{state:{id:email}})
    
     }
  })

.catch(e=>{
  alert("Wrong details")
  console.log(e);
})

}
catch(e){
    console.log(e);
}

}


  return (
    <div className='container'>
      <h1>Signup</h1><br></br>

      <form action="POST">

        Email  <br></br><input type="email" onChange={(e) => {setEmail(e.target.value) }} placeholder='Email'/>
        <br></br>
       
        <br></br>
        Password <br></br><input type="password" onChange={(e) => {setPassword(e.target.value) }} placeholder='Password' />
        <br></br>
        <input type="submit" value="Register" onClick={submit}/>

      </form>

      <br></br>



     <p> OR</p>
      <div className="link">
      <Link to="/">Login</Link></div>

    </div>
  )
}

export default Registeradmin