import React, { useRef } from "react";
import "./Contact.css";
import emailjs from "emailjs-com";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_lux22z4",
        "template_q6e0mfj",
        form.current,
        "qz3o7FzKHSUeKzOZ_"
      )
      .then(
        (result) => {
          e.target.reset();
          console.log(result.text);
          toast.success("Thanks! Message sent successfully");
        },
        (error) => {
          console.log(error.text);
          toast.error("Something wrong! Try again");
        }
      );
  };
  return (
    <div id="contact">
      <div className="form-container">
        <div className="contact-box">
          <div className="right">
            <h2>Contact Us</h2>
            <form ref={form} onSubmit={sendEmail}>
              <input
                type="text"
                name="name"
                placeholder="Your Full Name"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Your Email Address"
                required
              />
              <textarea
                name="message"
                rows="7"
                placeholder="Your Message"
                required
              />
              <button type="submit" className="btn btn-primary">
                Send Message
              </button>
              <ToastContainer />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
