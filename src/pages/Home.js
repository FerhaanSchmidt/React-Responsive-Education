import Navbar from "../components/navbar/Navbar";
import HeroImg from '../components/hero/HeroImg';
import Footer from './../components/footer/Footer';
import Work from './../components/cards/Work';


const Home = () => {
  return (
    <div>
      <Navbar />
      <HeroImg />
      <Work />
      <Footer />
    </div>
  );
};

export default Home;
