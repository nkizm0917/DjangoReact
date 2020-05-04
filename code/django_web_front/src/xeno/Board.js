import React from 'react';
import { Draw, PlayerHand, ComHand, Field, EffectFive } from './index';

import deck1 from './img/deck/deck1.png';
import deck2 from './img/deck/deck2.png';
import deckT from './img/deck/deckT.png';
import effect from './img/other/effect.png';

import { Last } from './Last';
import { Player } from './Player';
import { BoardCom } from './BoardCom';
import { Event } from './Event';
import { EventCom } from './EventCom';
import { StatusCom } from './StatusCom';
import { HandComEvent } from './HandComEvent';
import { Status } from './Status';
// import { ResultCom } from './ResultCom';
import { Winner } from './Winner';
import { Wise } from './Wise';
import { Effect } from './Effect';


export class Board extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            statusCom: null,
            optionCom: null,
            openCom: false,
            effect: false,
        };
    }

    resetB() {
        this.setState({
            statusCom: null,
            optionCom: null,
            openCom: false,
        })
    }
    resetAll() {
        this.props.resetG()
        this.resetB()
    }

    openCom(boolean) {
        this.setState({
            openCom: boolean,
        })
    }
    // renderGameStart() {
    //     return (<GameStart onClick={() => this.props.gameStartClick()} />);
    // }
    renderDraw(i) {
        return (<Draw onClick={() => this.props.drawClick(i)} />);
    }
    renderPlayerHand(i, j) {
        return (<PlayerHand onClick={() => this.props.playcardClick(i, j)} value={this.props.hand[i][j]} />);
    }
    renderComHandOpen(j) {
        return (<PlayerHand value={this.props.hand[1][j]} />);
    }
    renderComHand(i, j) {
        return (<ComHand value={this.props.hand[i][j]} />);
    }
    renderField(i, j) {
        return (<Field values={this.props.field[i]} />);
    }

    renderCom() {
        const hand = this.props.hand
        const event = this.props.event
        const stepNum = (this.props.step - 1) % 2

        const array = [1, 5, 9]
        const openCom = this.state.openCom
        if (stepNum === 1 && array.includes(event)) {
            return (
                <div className="handfield">
                    <HandComEvent
                        event={event}
                        hand={hand}
                        effectOneClick={(i, j) => this.props.effectOneClick(i, j)}
                        effectFiveClick={(i, j) => this.props.effectFiveClick(i, j)}
                        effectNineClick={(i, j) => this.props.effectNineClick(i, j)}
                        // renderComHand={(i, j) => this.renderComHand(i ,j)}
                    />
                    {this.renderField(1)}
                </div>
            );
        } else if (openCom) {
            return(
                <div className = "handfield" >
                    <div className="hand">
                        {this.renderComHandOpen(0)}
                        {this.renderComHandOpen(1)}
                    </div>
                    {this.renderField(1)}
                </div >
            );
        } {
            return (
                <div className="handfield">
                    <div className="hand">
                        {this.renderComHand(1, 0)}
                        {this.renderComHand(1, 1)}
                    </div>
                    {this.renderField(1)}
                </div>
            );
        }
    }

    effect() {
        this.setState({
            effect: !this.state.effect,
        })
    }
    renderEffectButton() {
        return (
            <div className="effectButton">
                <img src={effect} className="effectimg" onClick={() => this.effect()}/>
            </div>
        );
    }
    renderEffect() {
        return(
            <div className="effect">
                <Effect />
            </div>
        );
    }

    statusCom(playcard) {
        this.setState({
            statusCom: playcard,
        })
    }
    optionCom(option) {
        this.setState({
            optionCom: option,
        })
    }
    confirmCom() {
        this.setState({
            statusCom: null,
            optionCom: null,
        })
    }

    renderPlayer() {
        return (
            <div className="handfield">
                {this.renderField(0)}
                <div className="hand">
                    {this.renderPlayerHand(0, 0)}
                    {this.renderPlayerHand(0, 1)}
                </div>
            </div>
        );
    }

    renderDeck() {
        const trans = this.props.trans
        const remain = this.props.deck.length
        if (trans) {
            if (remain != 0) {
                return (
                    <div className="deckimg">
                        <img src={deck2} />
                    </div>
                );
            } else {
                return(
                    <div className="deckimg">
                        <img src={deckT} />
                    </div>
                );
            }
        } else {
            if (remain != 0) {
                return (
                    <div className="deckimg">
                        <img src={deck1} />
                    </div>
                );
            } else {
                return(<div></div>);
            }
        }
    }
    renderRemain() {
        const remain = this.props.deck.length
        return(
            <div className="remain">
                残り<em>{remain}</em>枚
            </div>
        );
    }
    

    renderCenter() {
        const deck = this.props.deck
        const player = this.props.player
        const hand = this.props.hand
        const event = this.props.event
        const wise = this.props.wise
        const winner = this.props.winner
        const status = this.props.status
        const stepNum = (this.props.step - 1) % 2
        const last = this.props.last
        const statusCom = this.state.statusCom
        const optionCom = this.state.optionCom
        if (statusCom === null && status != null) { //status
            return (
                <div className="center">
                    <div className="event">
                        <Status
                            status={status}
                            confirm={() => this.props.confirm()}
                        />
                    </div>
                </div>
            );
        } else if (statusCom === null && winner != null) { //winner
            return(
                <div className="center">
                    <Winner
                        winner={winner}
                        openCom={(boolean) => this.openCom(boolean)}
                        // status={status}
                    />
                </div>
            );
        } else if (event === null && !statusCom && !hand[0][1] && !hand[1][1] && deck.length===0) {
            return (
                <div className="center">
                    <div className="event">
                        <Last
                            effect={() => this.props.effectSixClick()}
                        />
                    </div>
                </div>
            );
        } else if (stepNum === 0) { //COM出す～Player出す
            if (this.props.event) {
                return(
                    <div className="center">
                        <div className="event">
                            <EventCom
                                deck={deck}
                                hand={hand}
                                event={event}
                                effectOneClick={(i, j) => this.props.effectOneClick(i, j)}
                                effectTwoClick={(i, option) => this.props.effectTwoClick(i, option)}
                                effectFiveClick={(i, j) => this.props.effectFiveClick(i, j)}
                                effectSixClick={() => this.props.effectSixClick()}
                                effectNineClick={(i, j) => this.props.effectNineClick(i, j)}
                                statusCom={(playcard) => this.statusCom(playcard)}
                                optionCom={(option) => this.optionCom(option)}
                                next={() => this.props.next()}
                            />
                        </div>
                    </div>
                );
            } else if (this.state.statusCom) {
                return(
                    <div className="center">
                        <div className="event">
                            <StatusCom
                                statusCom={statusCom}
                                optionCom={optionCom}
                                confirmCom={() => this.confirmCom()}
                            />
                        </div>
                    </div>
                );
            } else if (this.props.wise[0] && this.props.deck.length >= 3) {
                return (
                    <div className="center">
                        <div className="event">
                            <Wise 
                                deck={deck}
                                player={player}
                                stepNum={stepNum}
                                effectSevenClick={(i, option) => this.props.effectSevenClick(i, option)}
                                reset={(i) => this.props.reset(i)}
                            />
                        </div>
                    </div>
                );
            } else {
                return(
                    <div className="center">
                        <Player
                            hand={hand}
                            stepNum={stepNum}
                            renderDeck={() => this.renderDeck()}
                            renderRemain={() => this.renderRemain()}
                            drawClick={(i) => this.props.drawClick(i)}
                        />
                    </div>
                    // <div className="center">
                    //     {this.renderDeck()}
                    // </div>
                );
            }
        } else { //Player出す～COM出す
            if (this.props.event) {
                return(
                    <div className="center">
                        <div className="event">
                            <Event
                                deck={deck}
                                player={player}
                                hand={hand}
                                event={event}
                                effectOneClick={(i, j) => this.props.effectOneClick(i, j)}
                                effectTwoClick={(i, option) => this.props.effectTwoClick(i, option)}
                                effectThreeClick={(i, j) => this.props.effectThreeClick(i, j)}
                                effectFiveClick={(i, j) => this.props.effectFiveClick(i, j)}
                                effectSixClick={() => this.props.effectSixClick()}
                                effectSevenClick={(i, option) => this.props.effectSevenClick(i, option)}
                                effectNineClick={(i, j) => this.props.effectNineClick(i, j)}
                                next={() => this.props.next()}
                                openCom={(boolean) => this.openCom(boolean)}
                            />
                        </div>
                    </div>                    
                );
            } else {
                return (
                    <div className="center">
                        <BoardCom 
                            deck={deck}
                            player={player}
                            hand={hand}
                            event={event}
                            wise={wise}
                            drawClick={(i) => this.props.drawClick(i)}
                            playcardCom={() => this.props.playcardCom()}
                            effectSevenClick={(i, option) => this.props.effectSevenClick(i, option)}
                            // effectOneClick={(i, j) => this.props.effectOneClick(i, j)}
                            // effectTwoClick={(i, option) => this.props.effectTwoClick(i, option)}
                            // effectFiveClick={(i, j) => this.props.effectFiveClick(i, j)}
                            // effectNineClick={(i, j) => this.props.effectNineClick(i, j)}
                            // statusCom={(status) => this.props.statusCom(status)}
                            next={() => this.props.next()}
                            renderDeck={() => this.renderDeck()}
                            renderRemain={() => this.renderRemain()}
                            playcardClick={(i, j) => this.props.playcardClick(i, j)}
                        />
                    </div>
                );
            }
        }
    }

    render() {
        if (this.props.step === 0) {
            return (<div>
                {this.renderGameStart()}
            </div>);
        } else if (this.state.effect) {
            return (
                <div>
                    <div>
                        <p onClick={() => this.resetAll()} className="link">
                            はじめから
                        </p>
                    </div>
                    <div className="boardIn">
                        {this.renderEffect()}

                    </div>
                        {this.renderEffectButton()}
                </div>
            );
        } else {
            return (
                <div>
                    <div>
                        <p onClick={() => this.resetAll()} className="link">
                            はじめから
                        </p>
                    </div>
                    <div className="boardIn">
                        {this.renderCom()}

                        {this.renderCenter()}

                        {/* <div>
                        {this.renderDraw(0)}
                    </div> */}

                        {this.renderPlayer()}

                    </div>
                        {this.renderEffectButton()}
                </div>
            );
        }
    }
}

