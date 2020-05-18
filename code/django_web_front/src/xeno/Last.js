import React from 'react';

export class Last extends React.Component {
    renderEffect() {
        return (<EffectLast onClick={() => this.props.effect()} />);
    }
    render() {
        return (
            <div>
                <h3>ゲーム終了</h3>
                <p>数字の大きい方が勝利</p>
                <div>
                    {this.renderEffect()}
                </div>
            </div>
        );
    }
}

function EffectLast(props) {
    return (
        <div>
            <button onClick={props.onClick}>
                対決する
            </button>
        </div>
    );
}
