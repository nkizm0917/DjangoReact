import React from 'react';
import { Draw, PlayerHand, ComHand, Field } from './index';

export class BoardCom extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            id1: 0,
            id2: 0,
            // resultCom: false,
            // status: "",
        };
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
    renderComHand(i, j) {
        return (<ComHand onClick={() => this.props.playcardClick(i, j)} value={this.props.hand[i][j]} />);
    }
    renderField(i, j) {
        return (<Field values={this.props.field[i]} />);
    }


    playcardCom() {
        const handCom = this.props.hand[1]
        const j = (Number(handCom[0]) <= Number(handCom[1])) ? 0 : 1;
        this.props.playcardClick(1, j)
        this.setState({
            resultCom: true,
        })
    }


    // drawPS() {
    //     var drawClick = this.props.drawClick(1);
    //     setTimeout(drawClick, 1000);
    // }
    // playPS() {
    //     setTimeout(() => {
    //         this.playcardCom();
    //     }, 1000);
    // }
    // eventPS() {
    //     setTimeout(() => {
    //         this.eventCom();
    //     }, 1000);
    // }
    wiseMax(deck) {
        const card1 = deck[0]
        const card2 = deck[1]
        const card3 = deck[2]
        if (card1 >= card2) {
            if (card1 >= card3) {
                return 0;
            } else {
                return 2;
            }
        } else {
            if (card2 >= card3) {
                return 1;
            } else {
                return 2;
            }
        }
    }

    drawWiseCom () {
        const option = this.wiseMax(this.props.deck)
        this.props.effectSevenClick(1, option)
    }

    componentDidMount() {
        if (this.props.wise[1] && this.props.deck.length >= 3) {
            var self = this;
            Promise.resolve()
                .then(function () {
                    return new Promise(function (resolve, reject) {
                        let id1 = 0;
                        id1 = window.setTimeout(function () {
                            self.drawWiseCom();
                            resolve('task1 完了!');
                        }, 1000);
                        self.setState({
                            id1: id1,
                        });
                    });
                })
                .then(function (value) {
                    return new Promise(function (resolve, reject) {
                        let id2 = 0;
                        id2 = window.setTimeout(function () {
                            self.setState({
                                id2: id2,
                            })
                            self.playcardCom();
                            resolve(['task2 完了!', 123]); // 複数の値を渡す時は、配列にまとめる
                        }, 1000);
                        self.setState({
                            id2: id2,
                        })
                    });
                })
        } else {
            var self = this;
            Promise.resolve()
                .then(function () {
                    return new Promise(function (resolve, reject) {
                        let id1 = 0;                  
                        id1 = window.setTimeout(function () {
                            // console.log(self.props);
                            // console.log('task1 処理中...');
                            
                            self.props.drawClick(1);
                            resolve('task1 完了!');
                        }, 1000);
                        // console.log("id1 " + id1);
                        self.setState({
                            id1: id1,
                        });
                        // console.log("self.state.id1 " + self.state.id1);
                        // clearTimeout(id1);
                    });
                })
                .then(function (value) {
                    return new Promise(function (resolve, reject) {
                        let id2 = 0;
                        id2 = window.setTimeout(function () {
                            // console.log(value); // => task1 完了!
                            // console.log('task2 処理中...');
                            self.setState({
                                id2: id2,
                            })
                            self.playcardCom();
                            resolve(['task2 完了!', 123]); // 複数の値を渡す時は、配列にまとめる
                        }, 1000);
                        // console.log("id2 " + id2);
                        self.setState({
                            id2: id2,
                        })
                        // console.log("self.state.id2 " + self.state.id2);
                    });
                })
        }
            // .then(function (value) { // resolveで渡された値の受け取り  => ['task2 完了!', 123]
            //     return new Promise(function (resolve, reject) {
            //         clearTimeout(self.state.id1)
            //         clearTimeout(self.state.id2)
            //         // console.log(value[0]); // => task2 完了!
            //         // self.eventCom();
            //         // console.log(value[1]); // => 123
            //         // console.log('task3 完了!');
            //         resolve();
            //     });
            // });
    }

    componentWillUnmount() {
        // clearTimeout();
        // console.log("this.state.id1 " + this.state.id1);
        // console.log("this.state.id2 " + this.state.id2);
        window.clearTimeout(this.state.id1);
        window.clearTimeout(this.state.id2);
        // clearTimeout(this.state.id1)
        // clearTimeout(this.state.id2)
    }

    render() {
        return (
            <div className="center">
                {this.props.renderDeck()}
            </div>
        );
    }
}
