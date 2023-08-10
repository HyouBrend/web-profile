import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_ac0uyeo',
      'template_theo',
      form.current,
      'Mdb7UsIiXHvRpBo5_'
    )
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div id='contact'>
      <div className="container">
        <h1 className="text-center" style={{ marginTop: '120px', color: '#8B4513' }}><b>Contact Me</b></h1>
        <div className="row align-items-center">
          <div className="col-md-6">
            <img src="../contact.png" alt="" width="800" height="700" className="d-inline-block align-text-top mx-auto my-4" style={{ maxWidth: '100%' }} />
          </div>
          <div className="col-md-6">
            <form ref={form} onSubmit={sendEmail}>
              <label className="form-label" style={{ marginTop: '15px', color: '#8B4513' }}><strong>Name</strong></label>
              <input
                className="form-control"
                name="user_name"
                type="text"
                required
                placeholder="Your Name"
              />
              <label className="form-label" style={{ marginTop: '15px', color: '#8B4513' }}><strong>Email</strong></label>
              <input
                className="form-control"
                name="user_email"
                type="email"
                required
                placeholder="Your Email"
              />
              <label className="form-label" style={{ marginTop: '15px', color: '#8B4513' }}><strong>Message</strong></label>
              <textarea
                className="form-control"
                name="user_message"
                rows="5"
                required
                placeholder="Your Message"
              ></textarea>
              <br />
              <input type="submit" className="btn btn-danger" value="Send" style={{ marginTop: '20px', color: '#F5F5DC' }}></input>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;