import React from 'react';
import ReactDOM from 'react-dom';
import './ScoreBox.css';

class ScoreBox extends React.Component {
    render = () => {
        const cssClass = this.props.withBorder == "true" ? "borederdScoreBox" : "";
        return (<div data-testid="scorebox" className={cssClass}>{ this.props.value }</div>)
    }
}

//<form> <input type="button" value="0" onclick= /> </form>

export default ScoreBox 