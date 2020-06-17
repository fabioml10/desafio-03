import React from 'react'
import Card from '../Card/Card'
import FlipMove from 'react-flip-move'

export default function Candidates({ candidates, previousVotes }) {
  return (
    <div className="row">
      <FlipMove
        duration={1000}
        typeName="ul">
        {candidates.map((candidate, index) => {
          const previousVoteObject = previousVotes.find(item => item.id === candidate.id)
          const previousVote = !!previousVoteObject ? previousVoteObject.votes : 0
          const previousPercentage = !!previousVoteObject ? previousVoteObject.percentage : 0

          return (
            <div key={candidate.id}>
              <Card key={candidate.id} candidate={candidate} position={index + 1} previousVote={previousVote} previousPercentage={previousPercentage} />
            </div>
          )
        })}
      </FlipMove>
    </div>
  )
}
