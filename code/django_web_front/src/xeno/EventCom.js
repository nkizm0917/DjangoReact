import React from 'react';
import { EffectSix } from './index';

export class EventCom extends React.Component {

    renderEffectSix() {
        return (<EffectSix onClick={() => this.props.effectSixClick()} />);
    }

    twoRandom(deck, hand, trans) {
        const handPlayer = hand[0][0]
        var remain = Array.from(deck)
        remain.push(handPlayer)
        if (trans != null) {
            remain.push(trans)
        }
        const option = remain[Math.floor(Math.random() * remain.length)]
        return option;
    }

    eventCom() {
        const event = this.props.event
        const hand = this.props.hand
        const deck = this.props.deck
        const trans = this.props.trans
        if (event) {
            if (event === 6) {
                return;
            }
            switch (event) {
                case 1: {
                    const handPlayer = hand[0]
                    const j = (Number(handPlayer[0]) >= Number(handPlayer[1])) ? 0 : 1;
                    const option = handPlayer[j]
                    this.props.statusCom(1)
                    this.props.optionCom(option)
                    this.props.effectOneClick(0, j)
                    break;
                }
                case 2: {
                    const option = this.twoRandom(deck, hand, trans)
                    this.props.statusCom(2)
                    this.props.optionCom(option)
                    this.props.effectTwoClick(1, option)
                    break;
                }
                case 5: {
                    const random = Math.floor(Math.random() * 2)
                    const option = hand[0][random]
                    this.props.statusCom(5)
                    this.props.optionCom(option)
                    this.props.effectFiveClick(0, random)
                    break;
                }
                case 9: {
                    const handPlayer = hand[0]
                    const j = (Number(handPlayer[0]) >= Number(handPlayer[1])) ? 0 : 1;
                    const option = handPlayer[j]
                    this.props.statusCom(9)
                    this.props.optionCom(option)
                    this.props.effectNineClick(0, j)
                    break;
                }
                default: {
                    break;
                }
            }
        }
        this.props.next()
        return;
    }



        
    renderConfirm() {
        return (<Confirm onClick={() => this.eventCom()} />);
    }
    renderNext() {
        return (<Confirm onClick={() => this.props.next()} />);
    }

    render() {
        const event = this.props.event
        switch (event) {
            case 1: {
                return (
                    <div>
                        <h3>①少年</h3>
                        <p>Playerのカードを捨てさせる</p>
                        {this.renderConfirm()}
                    </div>
                );
            }
            case 2: {
                return (
                    <div>
                        <h3>②兵士</h3>
                        <p>Playerのカードを当てる</p>
                        {this.renderConfirm()}
                    </div>
                );
            }
            case 3: {
                return (
                    <div>
                        <h3>③占師</h3>
                        <p>Playerのカードを確認</p>
                        {this.renderNext()}
                    </div>
                );
            }
            case 5: {
                return (
                    <div>
                        <h3>⑤死神</h3>
                        <p>Playerのカードを捨てさせる</p>
                        {this.renderConfirm()}
                    </div>
                );
            }
            case 6: {
                return (
                    <div>
                        {this.renderEffectSix()}
                    </div>
                );
            }
            case 9: {
                return (
                    <div>
                        <h3>⑨皇帝</h3>
                        <p>捨てさせるカードを選択</p>
                        {this.renderConfirm()}
                    </div>
                );
            }
            default: {
                return (<p>default</p>);
            }
        }
    }
}


function Confirm(props) {
    return (
        <button onClick={props.onClick}>
            次へ
        </button>
    );
}

