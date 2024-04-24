import React from 'react';

const CatDetails = ({ cat }) => {
  return (
    <div>
      <h2>{cat.name}</h2>
      <p>Age: {cat.age}</p>
      <p>Sex: {cat.sex}</p>
      <p>Coat Pattern: {cat.coatPattern}</p>
      <p>Picture:{cat.picture} </p>
    </div>
  )
}

export default CatDetails;