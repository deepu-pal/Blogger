import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


// Toastify method use

const notify = () => {
    toast.success('Thanks For Subscribing Our Newsletter', {
      position: 'top-center',
      autoClose: 3000, // Close the notification after 3 seconds
      hideProgressBar: false,
      closeOnClick: true,
      
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      style: { backgroundColor: 'white', color: 'Black', width: '400px', fontSize: '1.1rem'} // Customize the color
    });
  };

const NewsletterForm = () => {
  const [email, setEmail] = useState('');

  const handleInputChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("Thanks For Subscribing Our Newsletter")
    notify();
    console.log(`Subscribing ${email} to the newsletter!`);
    // Reset the email input after submission
    setEmail('');
  };
//   const SubmitAlert =() =>{
//     alert ("Welcome to")
//   }

  return (
    <div className="container">
      <h3 className="text-center mb-4">Subscribe To Our Newsletter</h3>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
         
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            placeholder='Enter Your Email'
            value={email}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="text-center mt-4">
          {/* <button type="submit" className="btn btn-primary" >Subscribe</button> */}
          <button type="submit" className="btn btn-primary">Subscribe</button>
          <ToastContainer />
        </div>
      </form>
    </div>
  );
};

export default NewsletterForm;
