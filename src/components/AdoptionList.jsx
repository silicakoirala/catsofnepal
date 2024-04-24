import React from 'react';
import { Link } from 'react-router-dom';

const AdoptionList = ({ cats }) => {
  // Sample data (replace with actual data or API call)
  const cat = [
    { id: 1, name: 'Whiskers', age: 2, sex: 'male', coatPattern: 'Tabby', image: 'whiskers.jpg' },
    { id: 2, name: 'Peppa', age: 1, sex: 'female', coatPattern: 'White mixed tabby', image: 'peppa.jpg' },
  ];

  return (
    <div className='container mx-auto px-4 py-8'>
      <h2>Adoption List</h2>
      <ul>
        {cat.map(cat => (
          <li key={cat.id}>
            <Link to={`/cat/${cat.id}`}>
              <img src={cat.image} alt={cat.name} />
              <p>{cat.name}</p>
            </Link>
          </li>
        ))}
      </ul>
      <Link to="/adoption/form">Apply for Adoption</Link>
    </div>
  )
}

export default AdoptionList;
