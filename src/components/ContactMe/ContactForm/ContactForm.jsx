import React, { useRef } from "react";
import "./ContactForm.css";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  // const form = useRef;
  // const sendEmail = (e) => {
  //   e.preventDefault();

  //   emailjs
  //     .sendForm("service_w6ojv3p", "template_nz14fwg", form.current, {
  //       publicKey: "Sg67re6xVcBt5QRXCBx1f",
  //     })
  //     .then(
  //       () => {
  //         console.log("SUCCESS!");
  //       },
  //       (error) => {
  //         console.log("FAILED...", error.text);
  //       }
  //     );
  // };

  return (
    <div className="contact-form-content">
      {/* ref={form} onSubmit={sendEmail} */}
      <form className="contactform">
        <div className="name-container">
          <input
            type="text"
            className="name"
            name="your_name"
            placeholder="Your Name"
          />
          <input
            type="email"
            className="email-ipt"
            name="your_email"
            placeholder="Email"
          />
        </div>
        <textarea
          type="text "
          className="msg"
          name="massage"
          placeholder="Massage"
          rows={3}
        ></textarea>
        <button type="submit" value="send" className="submitBtn">
          SEND
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
