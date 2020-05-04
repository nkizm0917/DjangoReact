import React from 'react';
import { Draw, PlayerHand, ComHand, Field } from './index';

export class Player extends React.Component {

    // renderPlayer() {
    //     return (
    //         <div className="handfield">
    //             {this.renderField(0)}
    //             <div className="hand">
    //                 {this.renderPlayerHand(0, 0)}
    //                 {this.renderPlayerHand(0, 1)}
    //             </div>
    //         </div>
    //     );
    // }
    componentDidMount() {
        const i = this.props.stepNum
        if (this.props.hand[i][1] === "") {
            this.props.drawClick(0);
        }
    }

    
    render() {
        return (
            <div className="center">
                {this.props.renderDeck()}
                {this.props.renderRemain()}
            </div>
        );
    }
}
