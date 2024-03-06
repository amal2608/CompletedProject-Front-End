
import axios from 'axios'
import './Signup.css';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import baseUrl from '../../Api';

const Signup = () => {
const history=useNavigate();

const [email,setEmail]=useState('')
const [password,setPassword]=useState('')

async function submit(e){
  e.preventDefault();

try{

  await axios.post( baseUrl+"/signup",{ 
    email,password
})

  .then(res=>{
    if(res.data === "exist") {
     alert("User alredy exists")
    }

    else if(res.data === "notexist"){
      alert("registered")
     history('/userhome',{state:{id:email}})

    
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
      
      <form action="POST">
      <h1>Sign Up</h1>
      <label>Email</label>
        <input type="email" onChange={(e) => {setEmail(e.target.value) }} />
        <br></br>
       
        <br></br>
        <br></br>
        <label>Password</label>
        <input type="password" onChange={(e) => {setPassword(e.target.value) }}  />
        <br></br>
        <input type="submit" value="Register" onClick={submit}/>
        <p> OR</p>
      <div className="link">
      <Link to="/userlogin">Login</Link></div>

      </form>

   



     

    </div>
  )
}

export default Signup