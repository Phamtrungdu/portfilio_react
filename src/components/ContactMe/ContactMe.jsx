import React from "react";
import "./ContactMe.css";
import ContactInfocard from "./ContactInfocard/ContactInfocard";
import ContactForm from "./ContactForm/ContactForm";

const ContactMe = () => {
  return (
    <section id="contact-me" className="contact-container">
      <h5>Contact Me</h5>
      <div className="contact-content">
        <div className="git-fb-email" style={{ flex: 1 }}>
          <div className="github">
            <div className="git-icon">
              <a href="https://github.com/Phamtrungdu">
                <i class="fa-brands fa-github"></i>
              </a>
            </div>
            <span>https://github.com/Phamtrungdu</span>
          </div>

          <div className="facebook">
            <div className="facebook-icon">
              <a href="https://www.facebook.com/du.trung.pham.01">
                <i class="fa-brands fa-facebook"></i>
              </a>
            </div>
            <span>https://www.facebook.com/du.trung.pham.01</span>
          </div>
          <div className="email">
            <div className="email-icon">
              <a href="#">
                <i class="fa-solid fa-envelope"></i>
              </a>
            </div>
            <span>phamdu.01012001@gmail.com</span>
          </div>
        </div>
        <div style={{ flex: 1 }}>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactMe;
