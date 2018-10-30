import React, { Component } from 'react'
import Player from './Player'
import './Scoreboard.css'

const players = [
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

export default class Scoreboard extends Component {
    renderPlayer(player) {
        return <Player 
            key={player.id}
            name={player.name}
            score={player.score}
        />
    }
    
    render() {
        return (
            <div className='scoreboard'>
                <h1>Scoreboard</h1>
                <ul>
                    {
                        players
                            .sort((a, b) => b.score - a.score)
                            .map(this.renderPlayer)
                    }
                </ul>
            </div>
        )
    }
}