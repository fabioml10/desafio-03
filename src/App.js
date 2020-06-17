import React, { Component } from 'react';
import Card from './components/Card/Card';

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      votes: []
    }
  }

  async componentDidMount() {
    await this.fetchData()
    // setInterval(() => this.fetchData(), 5000);
  }

  async fetchData() {
    const res = await fetch('http://localhost:8080/votes')
    const json = await res.json()

    this.setState({
      votes: json.candidates
    })
  }

  render() {
    const { votes } = this.state
    return (
      <div className="container">
        <h1 className="align-center">Votação</h1>
        <div className="row">
          {votes.map(candidate => {
            return <Card key={candidate.id} candidate={candidate} />
          })}
        </div>
      </div>
    )
  }
}
