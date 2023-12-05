import { useState, useRef } from 'react'
import emailjs from '@emailjs/browser';
import './App.css'



function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_c2cak0k', 'template_ti4lxvb', form.current, 'dwZ72_Rlb6bMrP3-M')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };





  return (
    <div className="App">
      <div className="parent">
        <div className="child">

        </div>
      </div>
      <div className="main">

        <form ref={form} onSubmit={sendEmail} >
          <p className="title"> Team Randy Form</p>

          <p>Full Name:
            <input type="text"

              name="name"
            /></p>
          <p>Age:
            <input type="text"

              name="age"
            /></p>
          <p>Email Address:
            <input type="text"
              name="email"
            /></p>
          <p>Phone Number for WhatsApp Contact:
            <input type="text"
              name="phone"
            /></p>

          <p>Which services are you interested in?</p>


          <input type="checkbox"

          />
          <label > Nutrition + Training</label><br></br>

          <input type="checkbox"

            name="nutritio+training"
          />
          <label > Training</label><br />

          <input type="checkbox"

            name="nutrition"
          />
          <label > Nutrition</label><br />

          <input type="checkbox"

            name="randyExperience"
          />
          <label > Randy Experience (Training together + discussion)</label><br />
          <p>Other: <input type="text"

            name="other"
          /></p>


          <p>Have you followed a coaching plan before?</p>
          <p>
            <input type="checkbox"

              name="yesCoaching" />
            <label > Yes</label> </p>
          <p>
            <input type="checkbox"

              name="noCoaching"
            />
            <label > No</label></p>


          <p>What is your goal?</p>
          <input type="text"
            name="goal"
          />
          <p>Why are you choosing me?</p>
          <input type="text"
            name="why"
          />
          <p><button type="submit">Click Me!</button></p>
        </form>

      </div>
    </div>
  )
}

export default App
