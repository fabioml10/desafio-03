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
    // setInterval(() => this.fetchData(), 3000);
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
        <h1>Votação</h1>
        <Card votes={votes} />
      </div>
    )
  }
}
