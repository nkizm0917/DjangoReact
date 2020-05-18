import React from 'react';
import { EffectHand } from './index';

export class HandComEvent extends React.Component {
    renderEffectOne(i, j) {
        return (<EffectHand onClick={() => this.props.effectOneClick(1 - i, j)} value={this.props.hand[1 - i][j]} />);
    }
    renderEffectFive(i, j) {
        return (<EffectHand onClick={() => this.props.effectFiveClick(1 - i, j)} />);
    }
    renderEffectNine(i, j) {
        return (<EffectHand onClick={() => this.props.effectNineClick(1 - i, j)} value={this.props.hand[1 - i][j]} />);
    }
    render() {
        const i = 0
        if (this.props.event === 1) {
            return (
                <div className="hand">
                    {this.renderEffectOne(i, 0)}
                    {this.renderEffectOne(i, 1)}
                </div>
            );
        }
        if (this.props.event === 5) {
            return (
                <div className="hand">
                    {this.renderEffectFive(i, 0)}
                    {this.renderEffectFive(i, 1)}
                </div>
            );
        }
        if (this.props.event === 9) {
            return (
                <div className="hand">
                    {this.renderEffectNine(i, 0)}
                    {this.renderEffectNine(i, 1)}
                </div>
            );
        }
    }
}
