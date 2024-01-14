import "./WorkCards.css";
import { NavLink } from "react-router-dom";

const WorkCards = (props) => {
  return (
    <div className="project-card">
    <img src={props.imgsrc} alt="img3" />
    <h2 className="project-title">{props.title}</h2>
    <div className="project-details">
      <p>{props.text}</p>
      <div className="project-btns">
        <NavLink to={props.view} className="btn">View</NavLink>
        <NavLink to="url.com" className="btn">Source</NavLink>
      </div>
    </div>
  </div>
  );
};

export default WorkCards;
