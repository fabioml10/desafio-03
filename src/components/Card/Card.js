import React from 'react'
import Position from '../Position/Position'
import Name from '../Name/Name'
import Photo from '../Photo/Photo'
import VotesNumber from '../VotesNumber/VotesNumber'
import VotesPercentual from '../VotesPercentual/VotesPercentual'
import Stars from '../Stars/Stars'

import css from './card.module.css'

export default function Card(candidate) {
  const { id, name, votes, percentage, popularity } = candidate.candidate
  return (
    <div className="col s12">
      <div className={css.card}>
        <Position id={id} />
        <Photo name={name} photo={`${id}.jpg`} />
        <div className={`${css.infos} col s9`}>
          <Name name={name} />
          <VotesNumber votesNumber={votes} />
          <VotesPercentual votesPercentual={percentage} />
          <Stars popularity={popularity} />
        </div>
      </div>
    </div>
  )
}
