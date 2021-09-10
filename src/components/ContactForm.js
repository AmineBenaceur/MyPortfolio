import React from "react";
import emailjs from "emailjs-com";

import "./ContactUs.css";

export default function ContactUs() {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_6u2vmkd",
        "template_x27ndlk",
        e.target,
        "user_6p6fHe1b6mWbkUnMaCFgL"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset(); //TODO: add send confirmation
  }

  return (
    <div className="form-box">
      <form className="contact-form" onSubmit={sendEmail}>
        <div>
          <input type="hidden" name="contact_number" />
          {/* <label className="field-labels">Name</label> */}
          <input
            className="one-line-input"
            placeholder="Your Name"
            type="text"
            name="user_name"
          />
          {/* <label className="field-labels">Email</label> */}
          <input
            className="one-line-input"
            placeholder="E-mail"
            type="email"
            name="user_email"
          />
          {/* <label className="field-labels">Message</label> */}
          <textarea
            className="message-text-area"
            placeholder="Message"
            name="message"
          />
        </div>
        <input className="send-button" type="submit" value="Send" />
      </form>
    </div>
  );
}
