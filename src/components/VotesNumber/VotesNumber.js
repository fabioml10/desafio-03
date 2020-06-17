import React from 'react'
import CountUp from 'react-countup';
import css from './votesNumber.module.css'

export default function VotesNumber({ votesNumber, previousVote }) {
  return (
    <div>
      <CountUp
        className={css.numbers}
        start={previousVote}
        end={votesNumber}
        duration={0.6}
        separator="."
        decimals={0}
        decimal=","
        suffix=""
      ></CountUp>
    </div>
  )
}
