import React, { Component } from 'react';
import axios from 'axios';
import img_1 from './media/rank_first.png'
import img_2 from './media/rank_second.png'
import img_3 from './media/rank_third.png'


class List extends React.Component {
    render() {
        return (
            <div>
                <div className="level">
                    <div className="level-left">
                        <h2 className="list-item is-size-1 has-text-weight-bold is-paddingless">{this.props.results.name}&nbsp;</h2>
                        <h2 className="list-item is-size-2 has-text-weight-bold is-paddingless">が好きなあなたにおすすめの芸人</h2>
                    </div>
                </div>

                <div className="level">
                    <div className="level-left">
                        <figure className="level-item">
                            <p className="image">
                                <img src={img_1} />
                            </p>
                        </figure>
                        <div className="level-item">
                            <p className="is-size-1">
                                {this.props.results.first}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="level">
                    <div className="level-left">
                        <figure className="level-item">
                            <p className="image">
                                <img src={img_2} />
                            </p>
                        </figure>
                        <div className="level-item">
                            <p className="is-size-1">
                                {this.props.results.second}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="level">
                    <div className="level-left">
                        <figure className="level-item">
                            <p className="image">
                                <img src={img_3} />
                            </p>
                        </figure>
                        <div className="level-item">
                            <p className="is-size-1">
                                {this.props.results.third}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

class Geinin_res extends Component {
    constructor(props) {
        super(props);
        this.state = {
            results: [],
            value: this.props.location.state.value,
        };
    }

    // componentDidMount() {
    //     // axios.get('http://192.168.99.100:8000/api/geinin/' + this.state.value +'/?format=json')
    //     axios.get('http://54.168.139.121:8000/api/geinin/' + this.state.value +'/?format=json')
    //         .then(response => {
    //             this.setState({
    //                 results: response.data,
    //             });
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    // }
    async componentDidMount() {
        // axios.get('http://192.168.99.100:8000/api/geinin/' + this.state.value +'/?format=json')
        await axios.get('http://54.168.139.121:8000/api/geinin/' + this.state.value +'/?format=json')
            .then(response => {
                this.setState({
                    results: response.data,
                });
            })
            .catch((error) => {
                console.log(error);
            });
    }

    render() {
        return (
            <div>
                <List
                    results={this.state.results}
                />
            </div>
            // <div className="columns is-multiline">
            //     <div className="column is-12" id="user-table">
            //         <List
            //             results={this.state.results}
            //         />
            //     </div>
            // </div>
        );
    }
}

export default Geinin_res;
