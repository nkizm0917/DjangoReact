import React from 'react';
// import { GameStart } from './index';

export class Winner extends React.Component {
    componentDidMount() {
        this.props.openCom(true)
    }

    render() {
        const winner = this.props.winner
        // const status = this.props.status
        switch (winner) {
            case 0: {
                var who = "勝者: Player";
                break;
            }
            case 1: {
                var who = "勝者: COM";
                break;
            }
            case 2: {
                var who = "引き分け";
                break;
            }
        }
        return (
            <div>
                {/* <div>
                    {status}
                </div> */}
                <h3>
                    {who}
                </h3>
            </div>
        );
    }

}
