import React,  { useEffect } from 'react'
import WellLight from '../assets/WellLight.png'
import 'aos/dist/aos.css';
import AOS from 'aos';
import './AboutUs.css';
const AboutUs = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000, 
      easing: 'ease', 
      once: false, 
    });
  }, []);
  return (
    <div>
      <section className="hero-section">
        <h2>About Us</h2>
      </section>
   
      <section className="new-section">
        <div className="box-container">
          <div className="box">
            
            <p>"Discover Beauty with Divine Secrets"</p>
          </div>
          <div className="box1">
            <h3>Who We Are:</h3>
            <p>At Divine-Secrets Skincare, we believe in the importance of skin care. We take pride in offering high-quality products designed for all our customers. Our mission is to make skin care enjoyable and unique, helping you maintain healthy, radiant skin. Join us today to explore a variety of products that will help you achieve beautiful skin."</p>
          </div>
        </div>

        
      </section>
      <section className="image-section">
        <div className="image-box">
          <img src="https://img.freepik.com/free-photo/top-view-natural-cosmetics-concept_23-2148565323.jpg" alt="Sample Image" ></img>
          <div className="image-text">
            <h3>About Our Product</h3>
         <p>Our products are designed with care to provide you with the best in skincare. We offer a range of high-quality skincare products tailored to your unique needs. Whether you need gentle cleansers, nourishing moisturizers, or age-defying treatments, we've got you covered.

We believe that taking care of your skin should be enjoyable and rejuvenating. With our products, you'll not only look beautiful but also feel confident in your own skin.

Explore our product range and start your skincare journey with Divine-Secrets today.

Thank you for choosing Divine-Secrets Skincare, where your beauty and skin's well-being are our top priorities.</p>
          </div>
        </div>
      </section>
      <section data-aos="zoom-in" className='flex flex-col items-center justify-center justify-items-center bg-[#5C5C42] bg-contain pt-12 pb-12 '>
        <h3 className='text-[4rem] text-[#FEFAF0] '>Our Mission</h3>
        <p className='text-[#FEFAF0] py-10'>We believe in ethical and smart shopping. All of our products are carefully selected to ensure they align with our core values.</p>
        <div className='flex flex-row justify-between gap-24'>
            <div className='flex flex-col flex-wrap justify-center content-center items-center	'> 
                <img data-aos="zoom-in" src={WellLight} alt="" className=' w-24 align-self-center' />
                <p data-aos="zoom-in" className='text-center w-40 text-[#FEFAF0] py-10'>Aromatherapy and essential oil treatments</p>
            </div>
            <div className='flex flex-col justify-center'> 
                <img data-aos="zoom-in" src={WellLight} alt="" className='w-24' />
                <p data-aos="zoom-in" className='text-center w-40 text-[#FEFAF0] py-10'>Chemical peels for skin renewal</p>
            </div>
            <div className='flex flex-col justify-center'> 
                <img data-aos="zoom-in" src={WellLight} alt=""  className='w-24'/>
                <p data-aos="zoom-in" className='text-center w-40 text-[#FEFAF0] py-10'>Customized facials for different skin types</p>
            </div>

        </div>

    </section>    </div>
    
  );

};
export default AboutUs;
