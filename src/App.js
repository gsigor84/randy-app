import { useRef } from 'react'
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

      <div className="main">
 

        <form ref={form} onSubmit={sendEmail} >
          <p className="title"> Team Randy Form</p>
          <div class="row">
            <p>Full Name:
              <input type="text"

                name="name"
              /></p>
          </div>

          <div class="row">
            <p>Age:
              <input type="text"

                name="age"
              /></p>
          </div>
          <div class="row">
            <p>Email Address:
              <input type="text"
                name="email"
              /></p></div>
          <div class="row">
            <p>Phone Number Contact:
              <input type="text"
                name="phone"
              /></p>
          </div>

          <div class="row">
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
          </div>
          <div class="row">


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
          </div>
          <div class="row">

            <p>What is your goal?</p>
            <input type="text"
              name="goal"
            />
            <p>Why are you choosing me?</p>
            <input type="text"
              name="why"
            />
          </div>
          <p><button type="submit">Click Me!</button></p>
        </form>

      </div>
    </div>
  )
}

export default App
