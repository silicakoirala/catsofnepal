// HeroSection.jsx
import React from 'react';
import catImage from '../pages/images/cat-hero.jpg'; // Import the image

const HeroSection = () => {
  return (
    <section className=" text-white py-60 relative">
      {/* Background Image */}
      <img src={catImage} alt="Cats of Nepal" className="absolute inset-0 w-full h-full object-cover opacity-70" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Cats of Nepal</h1>
          <p className="text-lg md:text-xl mb-8">Find your purrfect companion and make a difference in a cat's life.</p>
          <button className="bg-white text-black-600 py-2 px-6 rounded-full text-lg font-semibold hover:bg-black-100 transition duration-300">Browse Cats for Adoption</button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
