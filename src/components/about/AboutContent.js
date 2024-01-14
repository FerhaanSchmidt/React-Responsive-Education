import { Link } from "react-router-dom";
import "./About.css";

import img6 from '../../assets/img6.jpg';
import img7 from '../../assets/img7.jpg';

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>Im a react font-end developer. I create responsive secure websites for my clients.</p>
        <Link to="/contact">
          <button className="btn">Contact</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
          <div className="img-stack top">
            <img src={img6} className="img" alt="img6" />
          </div>
          <div className="img-stack bottom">
            <img src={img7} className="img" alt="img7" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutContent;
