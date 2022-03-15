import React from 'react';
import ReactDOM from 'react-dom';
import './GameBox.css';
import PlayerBox from '../PlayerBox/PlayerBox';

class GameBox extends React.Component {
    render = () => {
        return(<div data-testid="Gamebox">
            <PlayerBox />
            <PlayerBox />
        </div>)
    }
}

export default GameBox
