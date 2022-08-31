import "./Contact.css";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";





const Contact = () => {

  const [submitMessage, setSubmitMessage] = useState(false);
  
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();

   
  };

  const handleClick = (e) => {
    setSubmitMessage(true)
  }
  
  return (
    <div className="contact" id="contact">
    <h1>Contact</h1>
    <span className="line"></span>
      <div className="form">
        <form ref={form} onSubmit={sendEmail}>
          <label>Name:</label>
          <input type="text" name="user_name" />
          <label>Email:</label>
          <input type="email" name="user_email" />
          <label>Message:</label>
          <textarea rows='5' name="message" />
          <button onClick={handleClick} className="button">Send</button>
          
          {submitMessage ? (
          <h3 style={{margin : '2rem'}}> Thank you for your message!</h3>
        ) : null}
        
        </form>
      </div>
    </div>
  );
  // );
};

export default Contact;
