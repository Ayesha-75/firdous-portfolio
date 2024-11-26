import React from 'react'
import Swal from 'sweetalert2'
import './Contact.css'

const Contact = () => {

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "165dd7a1-2384-4e00-9048-b1ac8602b646");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
      },
      body: json
    }).then((res) => res.json());

    if (res.success) {
      Swal.fire({
        title: "Success!",
        text: "Message sent successfully!",
        icon: "success"
      });
    }
  }

  return (
    <>
    <h1 className='contact-heading'>Contact Form</h1>
    <form className='form-container' onSubmit={onSubmit}>
      <div>
      <label>Full Name</label>
      <br/>
      <input className='input' type='text' 
      placeholder='Enter your name'
      name='fullName' required/>
      </div>
      <div >
      <label>Email</label>
      <br/>
      <input className='input' type='email' 
      placeholder='Enter your email' 
      name='email' required/>
      </div>
      
      <div>
      <label>Message</label>
      <br/>
      <textarea className='text-area' cols="63" 
      placeholder='Enter your message'
      name='message' required></textarea>
      </div>
      <button type='submit' className='submit-btn'>Submit</button>
    </form>
    </>
  )
}

export default Contact