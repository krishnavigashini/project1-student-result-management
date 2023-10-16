import React from 'react'
import "./CheckResult.css"
import Navbar from './NavBar'
export default function UserLogin() {
 

  return (
    <div class="container2" >
    <Navbar/>
    <div class="wrapper2">
    <h2 className='null2'>Login</h2>
    
    <div class ="form-box2 login">
      <form action="a">
        <div class="input-box2">
          <span class="icon2"></span>
          <input type="email" required/>
          <label>Email</label>
        </div>
        <label>Date Of Birth</label>
        <div class="input-box2">

          <span class="icon2"></span>
          <input type="date" required/>
        </div>
        
        <button type='submit' class="btn1" href='/Result'>Login
        </button>
        
  
       
        </form>
        </div>
       
        </div>
        </div>
        )
  }
