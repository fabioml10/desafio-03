import React from 'react'
import css from './name.module.css'

export default function Name({ name }) {
  return (
    <div>
      <span className={css.nameText}>{name}</span>
    </div>
  )
}
