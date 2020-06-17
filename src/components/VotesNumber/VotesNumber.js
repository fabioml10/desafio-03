import React from 'react'
import formatNumber from '../../helpers/formatter'
import css from './votesNumber.module.css'

export default function VotesNumber({ votesNumber }) {
  return (
    <div>
      <span className={css.numbers}>{formatNumber(votesNumber)}</span>
    </div>
  )
}
