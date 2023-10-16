import React from 'react'
import './UserAssignments.css';
import Navbar from './NavBar';

export default function UserAssignments() {
  return (
    <div className='container-ass'>
    <span><Navbar/></span>
    <div class="wrapper-ass">
    <h2 className='null-ass'>Assignments</h2>
    <div class ="form-box-ass login">
      <form action="a">
      <div class="input-box-ass">
        <span class="icon-ass"></span>
        <input type="text" required/>
        <label>Name</label>
      </div>
      <div class="input-box-ass">
        <span class="icon-ass"></span>
        <input type="text" required/>
        <label>Roll No</label>
      </div>
        <div class="input-box-ass">
          <span class="icon-ass"></span>
          <input type="email" required/>
          <label>Email</label>
        </div>
        <label>Upload File</label>
        <div class="input-box-ass">
        <span class="icon-ass"></span>
        <input type="file" required/>
      </div>
        <button type="submit" class="btn-ass">Submit</button>
        </form>
        </div>
        </div>
        </div>
    )
  }
