import React from 'react'
import Position from '../Position/Position'
import Name from '../Name/Name'
import Photo from '../Photo/Photo'
import VotesNumber from '../VotesNumber/VotesNumber'
import VotesPercentual from '../VotesPercentual/VotesPercentual'
import Stars from '../Stars/Stars'

export default function Card({ votes }) {
  return (
    <div>
      {votes.map(({ id, name, votes, percentage, popularity }) => {
        return (
          <div key={id} className="card">
            <Position id={id} />
            <Photo name={name} photo={"https://dab1nmslvvntp.cloudfront.net/wp-content/uploads/2015/12/1450973046wordpress-errors.png"} />
            <div className="infos">
              <Name name={name} />
              <VotesNumber votesNumber={votes} />
              <VotesPercentual votesPercentual={percentage} />
              <Stars popularity={popularity} />
            </div>
          </div>
        )
      })}
    </div>
  )
}
