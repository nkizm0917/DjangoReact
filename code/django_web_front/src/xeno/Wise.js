import React from 'react';
import { EffectSeven } from './index';

export class Wise extends React.Component {
    renderEffectSeven(i, option) {
        return (<EffectSeven onClick={() => this.props.effectSevenClick(i, option)} value={this.props.deck[option]} />);
    }

    componentDidMount() {
        this.props.reset();
    }

    render() {
        const i = this.props.stepNum;
        return (
            <div>
                <h3>⑦賢者</h3>
                <p>手札に加えるカードを選択</p>
                <div>
                    {this.renderEffectSeven(i, 0)}
                    {this.renderEffectSeven(i, 1)}
                    {this.renderEffectSeven(i, 2)}
                </div>
            </div>
        );
    }
}
