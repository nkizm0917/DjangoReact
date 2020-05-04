import React from 'react';
// import { EffectNine, EffectTwo, EffectThree, EffectFive, EffectSix, EffectSeven } from './index';
import { EffectSix } from './index';

export class StatusCom extends React.Component {

    renderConfirm() {
        return (<Confirm onClick={() => this.props.confirmCom()} />);
    }

    renderStatus() {
        const status = this.props.statusCom
        const option = this.props.optionCom

        switch (status) {
            case 1: {
                return (
                    <div>
                        <h3>①少年</h3>
                        <p>「{option}」が選択されました</p>
                    </div>
                );
            }
            case 2: {
                return (
                    <div>
                        <h3>②兵士</h3>
                        <p>「{option}」が選択されました</p>
                    </div>
                );
            }
            case 5: {
                return (
                    <div>
                        <h3>⑤死神</h3>
                        <p>「{option}」が選択されました</p>
                    </div>
                );
            }
            case 9: {
                return (
                    <div>
                        <h3>⑨皇帝</h3>
                        <p>「{option}」が選択されました</p>
                    </div>
                );
            }
        }
    }


    render() {
        const statusCom = this.props.statusCom
        const optionCom = this.props.optionCom
        return (
            <div>
                <div>
                    {this.renderStatus()}
                </div>
                <div>
                    {this.renderConfirm()}
                </div>
            </div>
        )
        
    }
}

function Confirm(props) {
    return (
        <button onClick={props.onClick}>
            次へ
        </button>
    );
}
