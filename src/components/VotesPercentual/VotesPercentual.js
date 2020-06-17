import React from 'react'
import CountUp from 'react-countup';
import css from './votesPercentual.module.css'

export default function VotesPercentual({ votesPercentual, previousPercentage }) {
  return (
    <div>
      <CountUp
        className={css.numbers}
        start={previousPercentage}
        end={votesPercentual}
        duration={0.25}
        decimals={2}
        decimal=","
        suffix="%"
      ></CountUp>
    </div>
  )
}
