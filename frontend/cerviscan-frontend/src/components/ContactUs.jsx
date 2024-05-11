import React, { useState } from 'react';
import '../css files/contactus.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';


const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [resultObtained, setResultObtained] = useState(false);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log(formData);
  //   setFormData({
  //     name: '',
  //     email: '',
  //     phone: '',
  //     message: ''
  //   });
  // };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    });

    fetch('http://127.0.0.1:8000/contact-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setResult(data.result);
        setResultObtained(true);
      })
      .catch(error => {
        console.error('There was a problem with the submission:', error);
        setError(error.message);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <>
      <div className="contact-container">
        <div className="get-in-touch">
          <div className="contacttitle">
        <h1>Contact Us</h1>
        </div>
        <div className="contactinfo">
        <p><FontAwesomeIcon icon={faEnvelope} style={{ marginRight: '8px'}} /> official@cerviscan.com</p>
        <p><FontAwesomeIcon icon={faPhone} style={{ marginRight: '8px' }} /> +977 9870150245</p>
        </div>

        </div>
        <div className="contact-form">
          <div className="contact-head">
          <h1>Get in Touch</h1>
          <span>Feel free to drop a line below!</span>
          </div>
          
          <form onSubmit={handleSubmit}>
            <div className="grid">
              <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required />

              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required />
          
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Your Phone (optional)" />
            </div>
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows="4" required />
            <button type="submit" id="sendFeedback">Send</button>
          </form>
        </div>
      </div>
    </>
  );
};

export {ContactUs};
