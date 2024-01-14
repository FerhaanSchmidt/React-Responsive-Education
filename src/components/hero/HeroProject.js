import "./HeroImg.css"



const HeroProject = (props) => {
  return (
    <div className="hero-project-img">
        <div className="heading">
            <h1>{props.heading}</h1>
            <p>{props.text}</p>
        </div>
    </div>
  )
}

export default HeroProject