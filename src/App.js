import React, { useState, useEffect } from 'react';
import Candidates from './components/Candidates/Candidates';
import Header from './components/Header/Header';

export default function App() {

  const [candidates, setCandidates] = useState([])
  const [previousVotes, setPreviousVotes] = useState([])

  useEffect(() => {

    const fetchVotes = async () => {
      const res = await fetch('http://localhost:8080/votes')
      const json = await res.json()

      const previousVotes = candidates.map(({ id, votes, percentage }) => {
        return { id, votes, percentage }
      })

      setCandidates(json.candidates)
      setPreviousVotes(previousVotes)
    }

    const interval = setInterval(() => {
      fetchVotes()
    }, 1000)

    return () => {
      clearInterval(interval)
    }

  }, [candidates]) //variaveis que são utilizadas dentro do effect

  return (
    <div className="container">
      <Header>Votação</Header>
      <Candidates candidates={candidates} previousVotes={previousVotes} />
    </div>
  )
}
