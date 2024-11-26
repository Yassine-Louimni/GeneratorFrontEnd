import React from 'react'
import './Contact.css'
import msg_icon from '../../assests/msg-icon.png'
import mail_icon from '../../assests/mail-icon.png'
import phone_icon from '../../assests/phone-icon.png'
import location_icon from '../../assests/location-icon.png'
import white_arrow from '../../assests/white-arrow.png'

const Contact = () => {

    const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "5dcf7a19-8acf-466b-9235-1f9ec1b5de1c");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className='contact'>
      <div className="contact-col">
        <h3>Send us a message <img src={msg_icon} alt='' /></h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nisi ad accusantium eos magnam a, fugiat odio amet soluta quos ipsum consequuntur id enim qui nobis, voluptatibus incidunt recusandae quam aperiam?</p>
        <ul>
            <li> <img src={mail_icon} alt="" />Contact@Yam.com</li>
            <li><img src={phone_icon} alt="" />+212 657 165091</li>
            <li> <img src={location_icon} alt="" />FSTG , Marrakech</li>
        </ul>
      </div>
      <div className="contact-col">
        <form onSubmit = {onSubmit} >
            <label>Your name</label>
            <input type="text " name='name' placeholder='Enter your name' required/>
            <label>Email</label>
            <input type="email " name='email' placeholder='Enter your email' required/>
            <label>phone number</label>
            <input type="tel " name='phone' placeholder='Enter your mobile number' required/>
            <label>Write your message</label> 
            <textarea name="message"  rows="6" placeholder='Enter your message' required></textarea>       
            <button type='submit' className='btn dark-btn'>
                Submit now <img src= {white_arrow} alt="" />
            </button>
        </form>
        <span>{result}</span>
      </div>
    </div>
  )
}

export default Contact
