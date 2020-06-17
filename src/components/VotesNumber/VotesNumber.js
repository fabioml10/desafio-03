import React from 'react'
import CountUp from 'react-countup';
import css from './votesNumber.module.css'

export default function VotesNumber({ votesNumber }) {

  return (
    <div>
      <CountUp
        className={css.numbers}
        start={0.00}
        end={votesNumber}
        duration={0.25}
        separator="."
        decimals={0}
        decimal=","
        suffix=""
      ></CountUp>
    </div>
  )
}
