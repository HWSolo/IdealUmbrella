import React from 'react';
import ReactDOM from 'react-dom';
import './FrameBox.css';
import ScoreBox from '../score-box/ScoreBox';

class FrameBox extends React.Component {
    render = () => {
        return(<div className="framebox" data-testid="framebox">
            <ScoreBox value="2"/>
            <ScoreBox value="2" withBorder="true"/>
        </div>)
    }
}

export default FrameBox