import React, { Component } from 'react'
import Player from './Player'
import AddPlayer from './AddPlayer'
import './Scoreboard.css'

export default class Scoreboard extends Component {
    state = {
        players: [
            {
                id: 1,
                name: 'Real Madrid',
                score: 4
            },
            {
                id: 2,
                name: 'Barcelona',
                score: 3
            },
            {
                id: 3,
                name: 'Ronaldo',
                score: 8
            },
            {
                id: 4,
                name: 'Messi',
                score: 10
            }
        ]
    }

    updatePlayerScore = (id, score) => {
        const updatedPlayers = this.state.players.map(
            player => {
                if (player.id === id) {
                    return {
                        ...player,
                        score
                    }
                }
                else {
                    return player
                }
            }
        )
        this.setState({ players: updatedPlayers })
    }

    addPlayer = (name) => {
        const player = {
          id: Math.round(Math.random()*100000),
          name,
          score: 0
        }
        this.setState({
          players: this.state.players.concat(player)
        })
    }

    renderPlayer = (player) => {
        return (
            <Player
                id={player.id}
                name={player.name}
                score={player.score}
                key={player.id}
                updatePlayerScore={this.updatePlayerScore}
            />
        )
    }

    render() {
        return (
            <div className='scoreboard'>
                <h1>Scoreboard</h1>
                <ul>
                    {
                        this.state.players
                            .sort((a, b) => b.score - a.score)
                            .map(this.renderPlayer)
                    }                    
                </ul>
                <h3><AddPlayer addPlayer={this.addPlayer} /></h3>
            </div>
        )
    }
}