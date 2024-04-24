// Navbar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { HiMenu } from 'react-icons/hi';
import catslogo from '../pages/images/catsofnepal-logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-gray-800 text-white p-4 fixed w-full top-0 z-10">
      <div className="container mx-auto flex justify-between items-center">
      <Link to="/" className="text-xl font-bold">
          <img src={catslogo} alt="Cats of Nepal" className="h-10 rounded-full" />
        </Link>
        <div className="block md:hidden">
          <button onClick={toggleMenu} className="text-white focus:outline-none">
            <HiMenu className="w-6 h-6" />
          </button>
        </div>
        <nav className="hidden md:flex md:items-center">
          <ul className="md:flex md:items-center md:space-x-4">
            <li>
              <Link to="/adoption">Adoption</Link>
            </li>
            <li>
              <Link to="/lost-and-found">Lost & Found</Link>
            </li>
            <li>
              <Link to="/donation">Donate</Link>
            </li>
            <li>
              <Link to="/volunteer">Volunteer</Link>
            </li>
          </ul>
        </nav>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800">
          <nav className="container mx-auto py-4">
            <ul className="flex flex-col items-left">
              <li>
                <Link to="/adoption" className="text-white" onClick={() => setIsMenuOpen(false)}>Adoption</Link>
              </li>
              <li>
                <Link to="/lost-and-found" className="text-white" onClick={() => setIsMenuOpen(false)}>Lost & Found</Link>
              </li>
              <li>
                <Link to="/donation" className="text-white" onClick={() => setIsMenuOpen(false)}>Donate</Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-white" onClick={() => setIsMenuOpen(false)}>Volunteer</Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
