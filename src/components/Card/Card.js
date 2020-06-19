import React from 'react'
import Position from '../Position/Position'
import Name from '../Name/Name'
import Photo from '../Photo/Photo'
import VotesNumber from '../VotesNumber/VotesNumber'
import VotesPercentual from '../VotesPercentual/VotesPercentual'
import Stars from '../Stars/Stars'

import css from './card.module.css'

export default function Card({ candidate, position, previousVote, previousPercentage }) {

  const { id, name, votes, percentage, popularity } = candidate
  return (
    <div className="col s12">
      <div className={css.card}>
        <Position id={position} />
        <Photo name={name} photo={`${id}.jpg`} />
        <div className={`${css.infos} col s9`}>
          <Name name={name} />
          <VotesNumber votesNumber={votes} previousVote={previousVote} />
          <VotesPercentual votesPercentual={percentage} previousPercentage={previousPercentage} />
          <Stars popularity={popularity} />
        </div>
      </div>
    </div>
  )
}
