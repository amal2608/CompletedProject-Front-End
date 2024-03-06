
import axios from 'axios'
import './login.css';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import baseUrl from '../../Api';

const Userlogin = () => {


  const history=useNavigate();





  const [email,setEmail]=useState('')
  const [password, setPassword]=useState('')

  const checkData = (e) => {
    e.preventDefault();

    try {
      axios.post(baseUrl+"/userlogin", {
        email,password
      })
        .then(res=>{
          if (res.data === "exist"){
            history("/userpage",{state:{id:email}})
          }
          else if (res.data === "notexist") 
          {
            alert("Invalid User")
          }
        })

        .catch(e=>{
          alert("Wrong details")
          console.log(e);
        })

    }
    catch (e) {
      console.log(e);
    }

  }


  return (
    <div className="container">
      <form action="POST">
      
      <h1>User Login</h1>
      <label>Email</label>
       <input type="email" onChange={(e)=> {setEmail(e.target.value) }} /><br></br>
      <div >
      <br></br>
      
         <br></br>
         <label>Password</label>
         <input type="password" onChange={(e)=>{setPassword(e.target.value) }}  />
        </div>
        <div className='form button'>
        <input type="submit" value="Login" onClick={checkData} />
        </div>
        <div className="link">
          <p>Not a Registered User?</p>
      <Link  to="/signup">Sign Up</Link>
       </div>
      </form>
      
      



      







    </div>
  )
}

export default Userlogin