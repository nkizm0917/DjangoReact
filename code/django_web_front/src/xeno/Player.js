import React from 'react';

export class Player extends React.Component {

    componentDidMount() {
        const i = this.props.stepNum
        if (this.props.hand[i][1] === "") {
            this.props.drawClick(0);
        }
    }

    
    render() {
        return (
            <div className="center">
                {this.props.renderDeck()}
                {this.props.renderRemain()}
            </div>
        );
    }
}
