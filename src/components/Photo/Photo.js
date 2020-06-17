import React from 'react'

export default function Photo({ name, photo }) {
  return (
    <div>
      <img src={photo} alt={name} />
    </div>
  )
}
