import React from 'react'
import ReactStars from "react-rating-stars-component"
// import StarRatings from '/Users/fmuller/IGTI/desafio-03/node_modules/react-star-ratings'

export default function Stars({ popularity }) {
  return (
    <div>
      <ReactStars
        count={10}
        size={20}
        color2={"#ffd700"}
        edit={false}
        value={popularity}
      />
    </div>
  )
}
