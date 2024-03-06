
import axios from 'axios'

import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import baseUrl from '../Api';

const Login = () => {


  const history=useNavigate();





  const [email,setEmail]=useState('')
  const [password, setPassword]=useState('')

  async function submit(e){
    e.preventDefault();

    try {


      await axios.post(baseUrl+"/admlogin", {
        email,password
      })

        .then(res=>{
          if (res.data=="exist"){
            history("/home",{state:{id:email}})
          }
          else if (res.data==="notexist") {
            alert("user have not signup")
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
    <br></br>

      <form action="POST">
      <h1>AdminLogin</h1>

       
       <br></br> <input type="email" onChange={(e)=> {setEmail(e.target.value) }} placeholder='Email' /><br></br>
      <div >
      <br></br>
      
         <br></br><input type="password" onChange={(e)=>{setPassword(e.target.value) }} placeholder='Password' />
        </div>
        <div className='form button'>
        <input type="submit" value="AdminLogin" onClick={submit} />
        </div>
      </form>

      <br></br>



      <p></p>
      
      <div className="link">
     
       </div>







    </div>
  )
}

export default Login