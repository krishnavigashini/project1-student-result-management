import React from 'react'
import './Contact.css';
import Navbar from './NavBar1'
export default function AdminContact() {
  return (
    <div className='container-con'>
    <span>
    <Navbar/>
    </span>
    <div class="wrapper-con">
    <h2 className='null-con'>Login</h2>
    <div class ="form-box-con login">
      <form action="a">
      <div class="input-box-con">
        <span class="icon-con"></span>
        <input type="text" required/>
        <label>Name</label>
      </div>
      <div class="input-box-con">
        <span class="icon-con"></span>
        <input type="text" required/>
        <label>Roll No</label>
      </div>
        <div class="input-box-con">
          <span class="icon-con"></span>
          <input type="email" required/>
          <label>Email</label>
        </div>
        <div class="mess">
        <span class="mess"></span>
        <label>Message</label><br></br><br></br>
        <textarea/>
      </div>
      <br></br>
        <button type="submit" class="btn-con">Submit</button>
        </form>
       
        
        </div>
        </div>
        </div>
    )
  }
