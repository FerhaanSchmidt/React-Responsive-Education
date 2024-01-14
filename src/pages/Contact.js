

import Navbar from './../components/navbar/Navbar';
import Footer from './../components/footer/Footer';
import HeroProject from './../components/hero/HeroProject';
import ContactC from '../components/contact/ContactC';

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroProject heading="CONTACT." text="Lets Have A Chat"/>
      <ContactC />
      <Footer />
    </div>
  )
}

export default Contact