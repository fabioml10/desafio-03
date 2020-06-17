import React from 'react'
import css from './position.module.css'

export default function Position({ id }) {
  return (
    <div className={`col s1`}>
      <span className={css.idText}>{id}</span>
    </div>
  )
}
