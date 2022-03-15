import React from 'react';
import ReactDOM from 'react-dom';
import './PlayerBox.css';
import FrameBox from '../FrameBox/FrameBox';

class PlayerBox extends React.Component {
    render = () => {
        return(<div className="borederdPlayerBox" data-testid="playerbox">
            <FrameBox />
            <FrameBox />
            <FrameBox />
            <FrameBox />
            <FrameBox />
            <FrameBox />
            <FrameBox />
            <FrameBox />
            <FrameBox />
            <FrameBox />
        </div>)
    }
}

export default PlayerBox