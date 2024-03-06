
import Login from './components/Login';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Welcomepage from './components/Welcomepage';

import Order from './components/Userside/Order';


import Signup from './components/Userside/Signup';
import UserNavbar from './components/Userside/UserNavbar';
import About from './components/Userside/About';
import Contact from './components/Userside/Contact';
import Navbar from './components/Navbar';
import Address from './components/Userside/Address';
import Addressview from './components/Addressview';
import { Orderview } from './components/Orderview';
import Registeradmin from './components/Registeradmin';
import { Uhome } from './components/Userside/Uhome';
import Food from './components/Food';
import Foodview from './components/Foodview';
import Eventview from './components/Eventview';
import Event from './components/Event';
import UserLogin from './components/Userside/Userlogin';
import Userpage from './components/Userside/Userpage';
import Fooddetails from './components/Userside/Fooddetails';




function App() {
  return (
    <div>

      
      <BrowserRouter>
      <Routes>
        {/* admin */}
        <Route path='/' element={<Login/>}></Route>
        <Route path='/home' element={<Welcomepage/>}></Route>
        <Route path="/Eventnew" element={<Event method='post'/>}></Route>
        <Route path="/Eventview" element={<Eventview method='get'/>}></Route>
        <Route path="/food" element={<Food/>}/>
         <Route path="/foodview" element={<Foodview/>}/>

        {/* userside */}
        <Route path="/userhome" element={<Uhome/>}/>
        <Route path="/about" element={<About></About>}/> 
        <Route path="/contact" element={<Contact></Contact>}/>
        <Route path="/signup" element={<Signup/>}/>
        <Route path="/userlogin" element={<UserLogin/>}/>
        <Route path="/userpage" element={<Userpage/>}/>
        <Route path="/order" element={<Order/>}/>
        <Route path="/fooddetails/:id" element={<Fooddetails/>}/>
        <Route path="/address/:id" element={<Address/>}/>
        <Route path="/addressview" element={<Addressview/>}></Route>
        
        {/* <Route path="/navbar" element={<Navbar/>}></Route>
        <Route path="/addressview" element={<Addressview/>}></Route>
        <Route path="/orderview" element={<Orderview/>}></Route>
        <Route path="/register" element={<Registeradmin/>}/>

     
        <Route path="/packageedit/:id" element={<Foodedit />} /> */}
{/* user side */}
        {/* <Route path="/order" element={<Order method='get'/>}></Route>
        <Route path="/userlogin" element={<Userlogin/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/userhome" element={<Uhome/>}/>
      <Route path="/nav" element={<UserNavbar/>}/>
      <Route path="/about" element={<About></About>}/> 
       <Route path="/contact" element={<Contact></Contact>}/>
       <Route path="/address/:id" element={<Address/>}/>
       */}

     
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
