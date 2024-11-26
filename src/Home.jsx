import React from 'react';

import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Features from './Components/Features/Features';
import Testimonials from './Components/Testimonials/Testimonials';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Title from './Components/Title/Title';


const Home = () => {
  return (

      <div>
        <Navbar />
        <Hero />
        <div className="container">
          <Title subtitle="Our Features" title="What We Offer" />
          <Features />
          <Title subtitle="TESTIMONIALS" title="What People Says" />
          <Testimonials />
          <Title subtitle="Contact Us" title="Get in Touch" />
          <Contact />
          <Footer />
        </div>
        </div>

  );
};

export default Home;
