import React, { Component } from 'react';
import './tictakto.css';
import Player from './chosePlayer';

class Game extends Component {
    constructor(props) {
        super(props)
        this.state = {
            board: Array(9).fill(null),
            player: null,
            winner: null,
        }
    }

    checkWinner() {
        let winLine = [
            ["0", "1", "2"],
            ["3", "4", "5"],
            ["6", "7", "8"],
            ["0", "3", "6"],
            ["1", "4", "7"],
            ["2", "5", "8"],
            ["0", "4", "8"],
            ["2", "4", "6"],
        ]

        for (let index = 0; index < winLine.length; index++) {
            const [a, b, c] = winLine[index];
            if (this.state.board[a] && this.state.board[a] === this.state.board[b] && this.state.board[a] === this.state.board[c]) {
                this.setState(
                    {
                        winner: this.state.player
                    }
                )
            }
        }
    }

    handleClick(index) {
        if (this.state.player && !this.state.winner) {
            let newBoard = this.state.board
            if (this.state.board[index] === null) {
                newBoard[index] = this.state.player
                this.setState({
                    board: newBoard,
                    player: this.state.player === "x" ? "o" : "x"
                })
                this.checkWinner()
            }
        }
    }
    setPlayer(player) {
        //console.log(player);
        this.setState({
            player
        })
    }
    reset() {
        this.setState({
            player: null,
            board: Array(9).fill(null),
            winner: null

        })
    }
    render() {
        const Box =
            this.state.board.map((box, index) =>
                <div key={index} onClick={() => this.handleClick(index)}
                    className="box">
                    {box}
                </div>)
        let status =
            this.state.player ?
                <h2>Next player is {this.state.player}</h2>
                : <Player player={(e) => this.setPlayer(e)} />

        return (
            <div className="container">
                <h1>Welcome to Tictagitkto Game.</h1>

                {status}
                <div className="board">
                    {Box}
                </div>
                <div>
                    <button disabled={!this.state.winner} onClick={() => this.reset()}>Reset</button>
                </div>
            </div>
        );
    }
}
export default Game;