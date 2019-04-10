import React, { Component } from 'react';

class Player extends Component {

    handleForm(e) {
        e.preventDefault();
        // console.log(e.target.Player.value)
        this.props.player(e.target.player.value)
    }

    render() {
        return (
            <form onSubmit={(e) => this.handleForm(e)}>
                <label>
                    Player X
                    <input type="radio" name="player" value="x" />
                </label>
                <label>
                    Player O
                    <input type="radio" name="player" value="o" />
                </label>
                <input type="submit" value="Start" />
            </form>
        );
    }
}
export default Player;