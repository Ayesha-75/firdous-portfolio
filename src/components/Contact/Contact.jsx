import React from 'react'
import Swal from 'sweetalert2'
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";
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
    <div className='contact-container'>
      <div className='get-in-touch'>
        <h1 className='contact-heading'>GET IN TOUCH</h1>
        <div>
          <div className='contact-info-alignment'>
          <FaLocationDot size={25} className='contact-icon' />
          <p className='contact-location'>Khammam | Telangana</p>
          </div>
          <div className='contact-info-alignment'>
            <a href="tel:+91 9966736187"><IoCall size={25} className='contact-icon' /></a>
          <p title='Give me a call' className='contact-location contact-anchor'>9966736187</p>

          </div>
          <div className='contact-info-alignment'>
            <a href='mailto: firdousayeshashaik123@gmail.com' target='_blank'><IoMdMail size={25} className='contact-icon' /></a>
            <p title='Send me an email' className='contact-location contact-anchor'>firdousayeshashaik123@gmail.com</p>
          </div>
        </div>
      </div>

      <form className='form-container' onSubmit={onSubmit}>
        <div>
        <input className='input' type='text' 
        placeholder='Enter your name'
        name='fullName' required/>
        </div>
        <div >
        <input className='input' type='email' 
        placeholder='Enter your email' 
        name='email' required/>
        </div>
        
        <div>
        <textarea className='text-area' cols="63" 
        placeholder='Enter your message'
        name='message' required></textarea>
        </div>
        <button type='submit' className='submit-btn'>send message</button>
      </form>
    
    </div>
    </>
  )
}

export default Contact