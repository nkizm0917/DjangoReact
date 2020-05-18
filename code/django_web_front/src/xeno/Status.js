import React from 'react';

export class Status extends React.Component {
    renderConfirm() {
        return (<Confirm onClick={() => this.props.confirm()} />);
    }

    render() {
        const status = this.props.status
        return (
            <div>
                <div>
                    {status}
                </div>
                <div>
                    {this.renderConfirm()}
                </div>
            </div>
        );
    }
}

function Confirm(props) {
    return (
        <button onClick={props.onClick}>
            次へ
        </button>
    );
}