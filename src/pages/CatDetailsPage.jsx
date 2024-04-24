import React from 'react'

const CatDetailsPage = () => {
  const { id } = useParams();
  return (
    <div>
      <h2>Cat Details</h2>
      <CatDetails catId={id} />
    </div>
  )
}

export default CatDetailsPage;