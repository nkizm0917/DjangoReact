import React from 'react';

export class Winner extends React.Component {
    componentDidMount() {
        this.props.openCom(true)
    }

    render() {
        const winner = this.props.winner
        let who = ""
        switch (winner) {
            case 0: {
                who = "勝者: Player";
                break;
            }
            case 1: {
                who = "勝者: COM";
                break;
            }
            case 2: {
                who = "引き分け";
                break;
            }
            default: {
                break;
            }
        }
        return (
            <div className="winner">
                <h3>
                    {who}
                </h3>
            </div>
        );
    }

}
