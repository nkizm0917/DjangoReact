import React from 'react';
import history from '../../history';
import Select from 'react-select';
// import './App.css';
// import { useHistory, useLocation } from "react-router-dom";
// import Select from 'react-select';

const options = [
    { value: '0', label: 'EXIT' },
    { value: '3', label: 'NON STYLE' },
    { value: '10', label: 'オードリー' },
    { value: '11', label: 'おぎやはぎ' },
    { value: '14', label: 'かまいたち' },
    { value: '15', label: 'カミナリ' },
    { value: '25', label: 'サンドウィッチマン' },
    { value: '29', label: 'ジャルジャル' },
    { value: '30', label: 'ジャングルポケット' },
    { value: '37', label: 'チョコレートプラネット' },
    { value: '39', label: 'トム・ブラウン' },
    { value: '41', label: 'ナイツ' },
    { value: '43', label: 'バイきんぐ' },
    { value: '45', label: 'バナナマン' },
    { value: '47', label: 'ハライチ' },
    { value: '59', label: 'ロッチ' },
    { value: '61', label: '和牛' },
    { value: '69', label: '四千頭身' },
    { value: '71', label: '陣内智則' },
    { value: '72', label: '千鳥' },
    { value: '73', label: '相席スタート' },
    { value: '74', label: '霜降り明星' },
    { value: '76', label: '東京03' },
    { value: '79', label: '博多華丸・大吉' },
    { value: '80', label: '爆笑問題' }
]

class Geinin extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(option) {
        this.setState({ value: option.value });
    }

    handleSubmit = (event) => {
        history.push({
            pathname: '/geinin/results/',
            state: { value: this.state.value}
        });
        console.log(this.state.value);
        event.preventDefault();
    }

    render() {
        return (
            <div>

                <form onSubmit={this.handleSubmit}>
                    <label>
                        <p className="is-size-4">好きな芸人を選択:&nbsp;</p>
                        <Select
                            onChange={this.handleChange}
                            options={options}
                        />

                    </label>

                    <input className="button is-primary is-large" type='submit' value="おすすめを見る" />

                </form>



            </div>
        );
    }
};

export default Geinin;
