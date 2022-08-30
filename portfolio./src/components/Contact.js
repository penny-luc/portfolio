import "./Contact.css";
import { useRef } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  // return (
    // <div className="contact" id='contact'>
    //   <div className="container">
    //     <div className="col-1">
    //       <p>Main heading</p>
    //       <p>heading</p>
    //       <p>paragraph of text</p>
    //       <button className="button">button</button>
    //     </div>
    //     <div className="col-2">
    //     </div>
    //   </div>
    // </div>
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
  // );
};

export default Contact;
