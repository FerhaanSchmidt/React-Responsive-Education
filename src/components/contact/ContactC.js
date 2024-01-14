import "./Contact.css";
import { Link } from "react-router-dom";

const ContactC = () => {
  return (
    <div className="contact">
      <form className="contact-form">
        <label>Your Name</label>
        <input type="text" placeholder="Your Name" />
        <label>Your Email</label>
        <input type="email" placeholder="Your Email" />
        <label>Your Subject</label>
        <input type="text" placeholder="Your Subject" />
        <label>Your Massage</label>
        <textarea rows="6" placeholder="Type Your Massage Here ..."/>
        <Link to="">
          <button className="btn">Submit</button>
        </Link>
      </form>
    </div>
  );
};

export default ContactC;
