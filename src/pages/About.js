

import Navbar from './../components/navbar/Navbar';
import Footer from './../components/footer/Footer';
import HeroProject from './../components/hero/HeroProject';
import AboutContent from '../components/about/AboutContent';

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroProject heading="ABOUT." text="Im a Friendly Front-end And Back-End Devloper." />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About