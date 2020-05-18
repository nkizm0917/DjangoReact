import React from 'react';

import start from './img/other/start.png';
import title from './img/other/title.png';

export class GameStart extends React.Component {

    render() {
        return (
            <div className="start">
                <img src={title} id="title"/>
                <img src={start} onClick={() => this.props.gameStartClick()}/>
                <a href="https://www.happybrainwash.com/xeno" target="_blank" rel="noopener noreferrer">遊び方</a>
            </div>
        );
    }

}

