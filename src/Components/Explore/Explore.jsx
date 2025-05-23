import React from 'react';
import Title from '../Title/Title';
import Footer from '../Footer/Footer';
import template from '../../assests/template.png'; // Corrigé "assests" en "assets"
import './Explore.css'
import Navbar from '../Navbar/Navbar';

const Explore = () => {
  return (
    <div>
       <div className='dark-nav '>
        <Navbar />
       </div>
      <div className="containerr">
      <Title subtitle="Our Template" title="Choose a Template and View" />

        <div className="template-card">
          <img src={template} alt="Template Preview" className="template-image" />
          <h3>Secure Hosting</h3>
          <a href="/template" className="btn-view-template">View Template</a>
          <a href="/update"className="btn-view-template">Update Template</a>
        </div>
        update
        <Footer />
      </div>
    </div>
  );
};

export default Explore;
