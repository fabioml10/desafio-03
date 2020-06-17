import React from 'react'
import css from './votesPercentual.module.css'

export default function VotesPercentual({ votesPercentual }) {
  return (
    <div>
      <span className={css.numbers}>{votesPercentual.toFixed(2)}%</span>
    </div>
  )
}
