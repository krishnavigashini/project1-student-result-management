import React, { useState } from 'react';
import { connect } from 'react-redux';
import './Contact.css';
import Navbar from './NavBar';
import { sendMessage } from './redux/contactActions';

function Contact({ sendMessage }) {
  const [name, setName] = useState('');
  const [rollNo, setRollNo] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const contactData = {
      name,
      rollNo,
      email,
      message,
    };
    sendMessage(contactData);
    // Clear form fields
    setName('');
    setRollNo('');
    setEmail('');
    setMessage('');
  };

  return (
    <div className="container-con">
      <span>
        <Navbar />
      </span>
      <div className="wrapper-con">
        <h2 className="null-con">Contact</h2>
        <div className="form-box-con login">
          <form onSubmit={handleSubmit}>
            <div className="input-box-con">
              <span className="icon-con"></span>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              <label>Name</label>
            </div>
            <div className="input-box-con">
              <span className="icon-con"></span>
              <input
                type="text"
                value={rollNo}
                onChange={(e) => setRollNo(e.target.value)}
                required
              />
              <label>Roll No</label>
            </div>
            <div className="input-box-con">
              <span className="icon-con"></span>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <label>Email</label>
            </div>
            <div className="mess">
              <span className="mess"></span>
              <label>Message</label>
              <br />
              <br />
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <br />
            <button type="submit" className="btn-con">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    message: state.message,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: (contactData) => dispatch(sendMessage(contactData)),
  };
};


export default connect(null, mapDispatchToProps)(Contact);
