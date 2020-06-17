import React from 'react'
import CountUp from 'react-countup';
import css from './votesPercentual.module.css'

export default function VotesPercentual({ votesPercentual }) {
  return (
    <div>
      <CountUp
        className={css.numbers}
        start={0.00}
        end={votesPercentual}
        duration={0.25}
        decimals={2}
        decimal=","
        suffix="%"
      ></CountUp>
    </div>
  )
}
