import React from 'react';
import { Link } from 'react-router-dom';

const CatCard = ({ cat }) => {
  return (
    <div className="max-w-xs mx-auto bg-white shadow-lg rounded-lg overflow-hidden">
      <Link to={`/cat/${cat.id}`}>
        <img className="w-full h-48 object-cover object-center" src={cat.image} alt={cat.name} />
      </Link>
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{cat.name}</h2>
        <p className="text-gray-700">{cat.age} years old</p>
        <p className="text-gray-700">Sex: {cat.sex}</p>
        <p className="text-gray-700">Coat Pattern: {cat.coatPattern}</p>
        <Link to={`/cat/${cat.id}`} className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          View Details
        </Link>
      </div>
    </div>
  );
};

export default CatCard;
