import React, { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
// import { reserveTable } from '../store';
import './AdminAssignments.css';
const BookingPage = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  // const [lastname, setlName] = useState('');
  // const [search, setSearch] = useState('');
  const [regno, setRegno] = useState('');
  const [email, setEmail] = useState('');
  // const [address, setAddress] = useState('');
  // const [college, setCollege] = useState('');
  const [course, setCourse] = useState('');
  

 

  // e.preventDefault();
    const handleSubmit = (e) => {
      const data1 =
      {
     
        name:name,
        regno:regno,
        email:email,
        course:course
       
      };
      axios.post('http://localhost:9090/post',data1);
      alert("REGISTERED")
    }
  

  return (
    
    <div className='he1'>
     
      
      <div className='back'>
      <marquee behavior='alternate' direction='right'>
        <h1>
          REGISTER HERE 
        </h1>
      </marquee>
    <div className='bod9'>
<p>STUDENTS MUST REGISTER FOR ATTENDING</p>
    <form className="reservation-form">
      <div className='clr'>
  
      <div className="form-group">
        <label >Name </label>
        <input
          type="text"
          id="name"
          placeholder='Name'
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label >Register No</label>
        <input
          type="number"
          id="regno"
          placeholder='regno'
          value={regno}
          onChange={(e) => setRegno(e.target.value)}
          required
        />
      </div>
      <div className="form-group">
        <label >Email<br/></label>
        <input
          type="email"
          id="Email"
          placeholder='Email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
    
      <div className="form-group">
        <label >COURSE </label>
        <input
          type="text"
          id="course"
          placeholder='course'
          value={course}
          onChange={(e) => setCourse(e.target.value)}
          required
        />
      </div>
      
      <br></br>
      <div className="form-group">
      <div className="reg">
        <button type="submit"  onClick={handleSubmit}>Register</button>
        </div>
      </div>
      </div>
    </form>
  <br/><br/>
    </div>
    </div>
    </div>
  );
  };

export default BookingPage;