import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt , FaPaperPlane} from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4567cac0-aa37-46c9-9051-2e4523bde6fa");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    } catch (error) {
      console.error("Fetch Error:", error);
      setResult("Something went wrong. Please try again.");
    }
  };

  return (
    <div className="contact">
      <h1>Get In Touch</h1>
      <div className="contact-container">
        <div className="contact-left">
          <h1>Let's Talk</h1>
          <p>
            I'm currently available to take on new projects, so feel free to
            send me a message about anything that you want me to work on. You
            can contact me anytime.
          </p>
          <div className="social">
            <ul>
              <li>
                <FaEnvelope className="icon" /> thapamilan9762@gmail.com
              </li>
              <li>
                <FaPhoneAlt className="icon" /> +977 9762415657
              </li>
              <li>
                <FaMapMarkerAlt className="icon" /> PatanDhoka, Lalitpur
              </li>
            </ul>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <div className="input">
            <input type="text" name="name" placeholder="Enter your Name" required />
          </div>
          <div className="input">
            <input type="email" name="email" placeholder="Enter your Email" required />
          </div>
          <div className="input">
            <textarea
              required
              name="message"
              id="message"
              placeholder="Write a message here.."
            ></textarea>
          </div>

          <button className="btn submit-btn" type="submit">

            Submit now
            <FaPaperPlane className="submit-icon"/>
          </button>
          <br />
          <br />
          <span>{result}</span>
        </form>
      </div>
    </div>
  );
};

export default Contact;
