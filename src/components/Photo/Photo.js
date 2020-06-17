import React from 'react'
import css from './photo.module.css'

export default function Photo({ name, photo }) {
  return (
    <div className={`${css.imgContainer} col s2`}>
      <img src={photo} alt={name} title={name} />
    </div>
  )
}
