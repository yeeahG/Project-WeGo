import React from 'react'

const PlaceDatails = ( {places} ) => {
  console.log(places);

  return (
    <div>
      <h1>{places.name}</h1>
    </div>
  )
}

export default PlaceDatails