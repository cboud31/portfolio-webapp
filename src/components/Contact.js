import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { useForm } from 'react-hook-form';

const Contact = () => {
  const [confirmMessage, setConfirmMessage] = useState('');
  const { register, handleSubmit, errors } = useForm();

  const serviceID = 'service_hkdlj7l';
  const templateID = 'template_8qt9y2g';
  const userID = 'user_zzOadigkVOrvFfxU9grud';

  const onSubmit = (data, r) => {
    sendEmail(
      serviceID,
      templateID,
      {
        name: data.name,
        phone: data.phone,
        email: data.subject,
        description: data.description,
      },
      userID
    );
    r.target.reset();
  };

  function sendEmail(serviceID, templateID, variables, userID) {
    emailjs
      .send(serviceID, templateID, variables, userID)
      .then(() => {
        setConfirmMessage(`Form sent successfully!`);
      })
      .catch((err) => console.error(`Something went wrong: ${err}`));
  }

  return (
    <div id="contact" className="contacts">
      <div className="text-center">
        <h1>Contact Me</h1>
        <p>Please fill out the form and I'll reply to you shortly.</p>
        <span className="success-message">{confirmMessage}</span>
      </div>

      <div className="container">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="row">
            <div className="col-md-6 col-xs-12">
              {/* Name Input */}
              <input
                id="name"
                type="text"
                className="form-control"
                placeholder="Name"
                name="name"
                ref={register({
                  required: 'Required field(s) missing!',
                  maxLength: {
                    value: 30,
                    message: 'Character limit reached!',
                  },
                })}
              />
              <span className="error-message">
                {errors.name && errors.name.message}
              </span>
              {/* Phone Number */}
              <input
                id="phone"
                type="text"
                className="form-control"
                placeholder="Phone"
                name="phone"
                ref={register({
                  required: 'Required field(s) missing!',
                })}
              />
              <span className="error-message">
                {errors.phone && errors.phone.message}
              </span>
              {/* Email */}
              <input
                id="email"
                type="email"
                className="form-control"
                placeholder="Email"
                name="email"
                ref={register({
                  required: 'Please enter a valid email!',
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: 'Please enter a valid email!',
                  },
                })}
              />
              <span className="error-message">
                {errors.email && errors.email.message}
              </span>
              {/* Subject */}
              <input
                id="subject"
                type="text"
                className="form-control"
                placeholder="Subject"
                name="subject"
                ref={register({
                  required: 'Required field(s) missing!',
                })}
              />
              <span className="error-message">
                {errors.subject && errors.subject.message}
              </span>
            </div>

            <div className="col-md-6 col-xs-12">
              {/* Description */}
              <textarea
                id="description"
                type="text"
                className="form-control"
                placeholder="Your Message"
                name="description"
                ref={register({
                  required: 'Required field(s) missing!',
                })}
              />
              <span className="error-message">
                {errors.description && errors.description.message}
              </span>
              <button className="button-main contact-btn" type="submit">
                CONTACT ME
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
