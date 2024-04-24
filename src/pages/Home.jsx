// Home.jsx
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import HeroSection from '../components/HeroSection';

const Home = () => {
  return (
    <div>
      <Header />
      <HeroSection />
      <div className="container mx-auto mt-20">
        <h1 className="text-4xl font-bold mb-4">Welcome to Cats of Nepal!</h1>
        <p className="text-lg mb-8">Discover adorable cats available for adoption, donate to support our cause, and find lost pets.</p>
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-bold mb-4">Together, let's help cats!</h2>
          <p className="text-lg mb-4">At Cats of Nepal, we believe in making a difference in the lives of cats. You can join us in our mission by:</p>
          <ul className="list-disc list-inside">
            <li>Adopting a cat in need of a loving home</li>
            <li>Fostering a cat until they find their forever home</li>
            <li>Donating to support our efforts in caring for cats</li>
            <li>Volunteering your time and skills to help cats in various ways</li>
          </ul>
          <p className="text-lg mt-4">Together, let's make a positive impact on the lives of cats!</p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
