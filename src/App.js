import React, { Component } from 'react';
import Candidates from './components/Candidates/Candidates';
import Header from './components/Header/Header';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      candidates: [],
      previousVotes: []
    }
  }

  async componentDidMount() {
    await this.fetchData()
    setInterval(() => this.fetchData(), 1000);
  }

  async fetchData() {
    const res = await fetch('http://localhost:8080/votes')
    const json = await res.json()

    const previousVotes = this.state.candidates.map(({ id, votes, percentage }) => {
      return { id, votes, percentage }
    })

    this.setState({
      candidates: json.candidates,
      previousVotes
    })
  }

  render() {
    const { candidates, previousVotes } = this.state
    return (
      <div className="container">
        <Header>Votação</Header>
        <Candidates candidates={candidates} previousVotes={previousVotes} />
      </div>
    )
  }
}
