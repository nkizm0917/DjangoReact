import React from 'react';
import './index.css';
import { Helmet } from 'react-helmet';
// import ReactDOM from 'react-dom';
// import 'bulma/css/bulma.min.css';
import card1 from './img/card/card1.png';
import card2 from './img/card/card2.png';
import card3 from './img/card/card3.png';
import card4 from './img/card/card4.png';
import card5 from './img/card/card5.png';
import card6 from './img/card/card6.png';
import card7 from './img/card/card7.png';
import card8 from './img/card/card8.png';
import card9 from './img/card/card9.png';
import card10 from './img/card/card10.png';
import cardR from './img/card/cardR.png';

import { GameStart } from './GameStart';
import { Board } from './Board';

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            deck: [
                "1", "1",
                "2", "2",
                "3", "3",
                "4", "4",
                "5", "5",
                "6", "6",
                "7", "7",
                "8", "8",
                "9",
                "10",
            ],
            trans: null,
            hand: [["", ""], ["", ""]],
            field: [null, null],
            step: 0,
            winner: null,
            event: null,
            resultCom: null,
            player: null,
            countOne: 0,
            guard: [false, false],
            wise: [false, false],
            status: null,
            last: false,
            nextCom: false,
            statusCom: "",
        };
    }

    resetG() {
        this.setState({
                deck: [
                    "1", "1",
                    "2", "2",
                    "3", "3",
                    "4", "4",
                    "5", "5",
                    "6", "6",
                    "7", "7",
                    "8", "8",
                    "9",
                    "10",
                ],
                trans: null,
                hand: [["", ""], ["", ""]],
                field: [null, null],
                step: 0,
                winner: null,
                event: null,
                resultCom: null,
                player: null,
                countOne: 0,
                guard: [false, false],
                wise: [false, false],
                status: null,
                last: false,
                nextCom: false,
                statusCom: "",
        })
    }

    statusCom(status) {
        this.setState({
            statusCom: status,
        })
    }

    shuffle(arr) {
        let m = arr.length;
        while (m) {
            const i = Math.floor(Math.random() * m--);
            [arr[m], arr[i]] = [arr[i], arr[m]];
        }
        return arr;
    }

    deal() {
        let hand = this.state.hand
        for (var i = 0; i < 2; i++ ) {
            hand[i][0] = this.state.deck.shift();
        }
        return  hand;
    }

    gameStartClick() {
        const deck = this.state.deck
        this.setState({
            deck: this.shuffle(deck),
        });

        this.setState({
            hand: this.deal(),
            trans: this.state.deck.pop(),
            step: this.state.step + 1,
        });
    }

    draw(i) {
        let hand = this.state.hand
        hand[i] = [hand[i][0], this.state.deck.shift()]
        this.setState({
            hand: hand,
        });
    }

    // drawWise() {
    //     this.setState({
    //         event: 7,
    //     })
    // }

    reset(i) {
        let guard = this.state.guard
        guard[i] = false
        this.setState({
            guard: guard,
            player: i,
        })
    }

    drawClick(i) {
        this.reset(i)
        this.draw(i)
    }

    discard(i) {
        let field = this.state.field
        const hand = this.state.hand;
        if (field[i] === null) {
            field[i] = hand[i][0]
        } else if (!Array.isArray(field[i])) {
            field[i] = [field[i], hand[i][0]]
        } else {
            field[i].push(hand[i][0])
        }
        this.setState({
            field: field,
        });
    }

    trans(i) {
        this.discard(i)
        const trans = this.state.trans
        let hand = this.state.hand
        hand[i] = [trans, ""]
        console.log("trans!")
        this.setState({
            hand: hand,
            trans: null,
            status: "転生",
        });
    }

    next() {
        this.setState({
            event: null,
        })
    }


    confirm() {
        this.setState({
            status: null,
        })
    }


    effectOneClick(i, j) {
        this.discardClick(i, j)
        const field = this.state.field
        const card = this.state.field[i][field[i].length - 1]
        if (card === "10") {
            this.trans(i)
        }
        this.setState({
            event: null,
        })
    }

    effectTwoClick(i, option) {
        const card = this.state.hand[1-i][0]
        if (card === option) {
            if (card === "10") {
                this.trans(1-i)
            } else {
                this.setState({
                    winner: i,
                    status: "正解！",
                })
            }
        } else {
            this.setState({
                status: "不正解",
            })
        }
        this.setState ({
            event: null,
        })
    }

    effectFiveClick(i, j) {
        this.discardClick(i, j)
        const field = this.state.field
        const card = this.state.field[i][field[i].length - 1]
        if (card === "10") {
            this.trans(i)
        }
        this.setState ({
            event: null,
        })
    }

    effectSixClick() {
        const hand = this.state.hand
        const cardPlayer  = hand[0][0]
        const cardCom = hand[1][0]
        if (Number(cardPlayer) > Number(cardCom)) {
            this.setState({
                winner: 0
            })
        }
        if (Number(cardPlayer) < Number(cardCom)) {
            this.setState({
                winner: 1
            })
        }
        if (Number(cardPlayer) === Number(cardCom)) {
            this.setState({
                winner: 2
            })
        }
        this.next()
    }

    effectSevenClick(i, option) {
        let deck = this.state.deck
        let hand = this.state.hand
        let choise = deck.splice(option, 1)[0]
        let wise = this.state.wise
        hand[i] = [hand[i][0], choise]
        wise[i] = false
        this.setState ({
            hand: hand,
            deck: this.shuffle(deck),
            wise: wise,
            event: null,
        })
    }

    effectNineClick(i, j) {
        this.discardClick(i, j)
        const field = this.state.field
        let card = ""
        if (Array.isArray(field[i])) {
            card = field[i][field[i].length - 1]
        } else {
            card = field[i]
        }
        if (card === "10") {
            this.setState({
                winner: 1-i,
            })
        }
        this.setState ({
            event: null,
        })
    }

    cardEffect(i, card) {
        const remain = this.state.deck.length
        if (card === "1" || card === "4" || card === "7") {
            switch (card) {
                case "1": {
                    const count = this.state.countOne
                    if (count === 0) {
                        this.setState({
                            countOne: 1,
                        })
                    } else if (remain >= 1 && !this.state.guard[1 - i]) {
                        let hand = this.state.hand
                        hand[1 - i] = [hand[1 - i][0], this.state.deck.shift()]
                        console.log("2枚目の1！")
                        this.setState({
                            hand: hand,
                            event: 1,
                        })
                    };
                    break;
                }
                case "4": {
                    let guard = this.state.guard
                    guard[i] = true
                    this.setState({
                        guard: guard,
                    })
                    break;
                }
                case "7": {
                    let wise = this.state.wise
                    wise[i] = true
                    this.setState({
                        wise: wise,
                    })
                    break;
                }
                default: {
                    break;
                }
            }
        } else if (!this.state.guard[1 - i]) {
            switch (card) {
                case "2": {
                    this.setState({
                        event: 2,
                    });
                    break;
                }
                case "3": {
                    this.setState({
                        event: 3,
                    });
                    break;
                }
                case "5": {
                    if (remain >= 1) {
                        let hand = this.state.hand
                        hand[1 - i] = [hand[1 - i][0], this.state.deck.shift()]
                        hand[1 - i] = this.shuffle(hand[1 - i])
                        this.setState({
                            hand: hand,
                            event: 5,
                        });
                    }
                    break;
                }
                case "6": {
                    this.setState({
                        event: 6,
                    });
                    break;
                }
                case "8": {
                    const handA = this.state.hand[0][0]
                    const handB = this.state.hand[1][0]
                    let newhand = this.state.hand
                    newhand[0][0] = handB
                    newhand[1][0] = handA
                    this.setState({
                        hand: newhand,
                        status: "手札を交換",
                    });
                    break;
                }
                case "9": {
                    if (remain >= 1) {
                        let hand = this.state.hand
                        hand[1 - i] = [hand[1 - i][0], this.state.deck.shift()]
                        this.setState({
                            hand: hand,
                            event: 9,
                        });
                    }
                    break;
                }
                default: {
                    break;
                }
            }
        }
        return;
    }



    playcardClick(i, j) {
        let field = this.state.field
        let hand = this.state.hand;
        if (hand[i][j] === "10" || hand[i][1] === "") {
            return;
        } else {
            if (field[i] === null) {
                field[i] = hand[i][j]
            } else if (!Array.isArray(field[i])) {
                field[i] = [field[i], hand[i][j]]
            } else {
                field[i].push(hand[i][j])
            }
            hand[i] = [hand[i][1-j] ,""]
            this.setState({
                field: field,
                hand: hand,
            });
            const card = this.state.field[i][field[i].length - 1]
            this.cardEffect(i, card)
    
            const stepNow = this.state.step
            this.setState ({
                step: stepNow + 1,
            })
        }
        return;
    }

    discardClick(i, j) {
        let field = this.state.field
        let hand = this.state.hand;
        if (field[i] === null) {
            field[i] = hand[i][j]
        } else if (!Array.isArray(field[i])) {
            field[i] = [field[i], hand[i][j]]
        } else {
            field[i].push(hand[i][j])
        }                
        hand[i] = [hand[i][1-j] ,""]
        this.setState({
            field: field,
            hand: hand,
        });
    }

    render() {
        const deck = this.state.deck
        const step = this.state.step
        const hand = this.state.hand
        const field = this.state.field
        const trans = this.state.trans
        const event = this.state.event
        const winner = this.state.winner
        const player = this.state.player
        const status = this.state.status
        const last = this.state.last
        const wise = this.state.wise

        
        if (step === 0) {
            return (
                <div className="cover">
                    <Helmet title="XENO" />
                    <GameStart
                        gameStartClick={() => this.gameStartClick()}
                    />
                </div>
            );
        } else {
            return (
                <div className="cover">
                    <div className="board">
                        <Board
                            deck={deck}
                            step={step}
                            hand={hand}
                            field={field}
                            trans={trans}
                            winner={winner}
                            status={status}
                            last={last}
                            event={event}
                            player={player}
                            wise={wise}
                            effectOneClick={(i, j) => this.effectOneClick(i, j)}
                            effectTwoClick={(i, option) => this.effectTwoClick(i, option)}
                            effectThreeClick={(i, j) => this.effectThreeClick(i, j)}
                            effectFiveClick={(i, j) => this.effectFiveClick(i, j)}
                            effectSixClick={() => this.effectSixClick()}
                            effectSevenClick={(i, option) => this.effectSevenClick(i, option)}
                            effectNineClick={(i, j) => this.effectNineClick(i, j)}
                            next={() => this.next()}
                            drawClick={(i) => this.drawClick(i)}
                            playcardCom={() => this.playcardCom()}
                            playcardClick={(i, j) => this.playcardClick(i, j)}
                            reset={(i) => this.reset(i)}
                            confirm={() => this.confirm()}
                            resetG={() => this.resetG()}
                        />
                    </div>
                </div>
            );
        }
    }
}


export function Draw(props) {
    return (
        <button onClick={props.onClick}>
            ドローする
        </button>
    )
}

export function PlayerHand(props) {
    if (props.value) {
        return (
            <div className="handimg" onClick={props.onClick}>
                <Card value={props.value} />
            </div>
        );
    } else {
        return (
            <div className="handimg"></div>
        );
    }
}

export function Card(props) {
    const card = props.value
    switch(card) {
        case "1": {
            return(<img src={card1} />);
        }
        case "2": {
            return(<img src={card2} />);
        }
        case "3": {
            return(<img src={card3} />);
        }
        case "4": {
            return(<img src={card4} />);
        }
        case "5": {
            return(<img src={card5} />);
        }
        case "6": {
            return(<img src={card6} />);
        }
        case "7": {
            return(<img src={card7} />);
        }
        case "8": {
            return(<img src={card8} />);
        }
        case "9": {
            return(<img src={card9} />);
        }
        case "10": {
            return(<img src={card10} />);
        }
        default: {
            return(<p>default</p>);
        }
    }
}

export function ComHand(props) {
    if (props.value) {
        return (
            <div className="handimg">
                <img src={cardR} />
            </div>
        );
    } else {
        return (
            <div className="handimg"></div>
        );
    }
}

export function EffectHand(props) {
    if (props.value) {
        return (
            <div className="handimg" onClick={props.onClick}>
                <Card value={props.value} />
            </div>
        );
    } else {
        return (
            <div className="handimg" onClick={props.onClick}>
                <img src={cardR} />
            </div>
        );
    }
}

export function Field(props) {
    const values = props.values
    if (Number(values)) {
        return(
            <div className="field">
                <div className="cardField">
                    <p>{values}</p>
                </div>
            </div>
        );
    } else if (values) {
        const cards = props.values.map((card, index) => 
            <div className="cardField">
                {card}
            </div>
        );
        return (<div className="field">{cards}</div>);
    } else {
        return (<div className="field"></div>);
    }
}

export function EffectTwo(props) {
    return (
        <button type="button" onClick={props.onClick} id="buttonTwo">
            {props.value}
        </button>
    );
}

export function EffectThree(props) {
    return (
        <div>
            <button onClick={props.onClick}>
                次へ
            </button>
        </div>
    );
}

export function EffectFive(props) {
    const which = (props.value === 0) ? "左": "右";
    return (
        <button onClick={props.onClick}>
            {which}
        </button>
    );
}

export function EffectSix(props) {
    return (
        <div>
            <h3>⑥貴族</h3>
            <p>数字の大きい方が勝利</p>
            <button onClick={props.onClick}>
                対決する
            </button>
        </div>
    );
}

export function EffectSeven(props) {
    return (
        <button onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export function EffectNine(props) {
    return (
        <button onClick={props.onClick}>
            {props.value}
        </button>
    );
}

// ============================================================

// ReactDOM.render(
//     <Game />,
//     document.getElementById('root')
// );

export default Game;
