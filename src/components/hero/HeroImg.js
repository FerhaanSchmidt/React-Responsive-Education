import "./HeroImg.css"
import intro from "../../assets/intro.jpg";
import { Link } from "react-router-dom";

const HeroImg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img  className="into-img" src={intro} alt="intro" />
      </div>
      <div className="content">
        <p>Hi, I'm a Freelancer from Ferhaan</p>
        <h1>React Devloper.</h1>
        <div>
          <Link to="/project" className="btn">Projects</Link>
          <Link to="/contact" className="btn btn-light">Contact</Link>
        </div>
      </div>
    </div>
  )
}

export default HeroImg