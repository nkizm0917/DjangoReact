import React from 'react';
// import { GameStart } from './index';

import start from './img/other/start.png';

export class GameStart extends React.Component {
    // renderGameStart() {
    //     return (<GameStart onClick={() => this.props.gameStartClick()} />);
    // }

    render() {
        return (
            <div className="start">
                {/* <button onClick={() => this.props.gameStartClick()}>
                    ゲームスタート
                </button> */}
                <img src={start} onClick={() => this.props.gameStartClick()}/>
                {/* <img src={start} onClick={() => this.props.gameStartClick()}/> */}
                <a href="https://www.happybrainwash.com/xeno" target="_blank" rel="noopener noreferrer">遊び方</a>
            </div>
        );
    }

}

// export function GameStart(props) {
//     return (
//         <button onClick={props.onClick}>
//             ゲームスタート
//         </button>
//     )
// }
