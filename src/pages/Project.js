import Navbar from "./../components/navbar/Navbar";
import Footer from "./../components/footer/Footer";
import HeroProject from "./../components/hero/HeroProject";
import PricingCards from "./../components/cards/PricingCards";
import Work from "./../components/cards/Work";


const Project = () => {
  return (
    <div>
      <Navbar />
      <HeroProject heading="PROJECTS." text="SOME OF MY RECENT WORKS" />
      <PricingCards />
      <Work />
      <Footer />
    </div>
  );
};

export default Project;
