import React from 'react';

export class ResultCom extends React.Component {

    renderConfirm() {
        return (<Confirm onClick={() => this.props.confirm()} />);
    }

    render() {
        const statusCom = this.props.statusCom
        return (
            <div>
                <div>
                    <p>{statusCom}</p>
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
            確認
        </button>
    );
}
