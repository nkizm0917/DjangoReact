import React from 'react';
import history from '../../history';
import Select from 'react-select';
// import styles from './index.module.css'
// import './App.css';
// import { useHistory, useLocation } from "react-router-dom";
// import Select from 'react-select';

const options = [
    { value: '1', label: 'EXIT' },
    { value: '4', label: 'NON STYLE' },
    { value: '6', label: 'アインシュタイン' },
    { value: '7', label: 'アキナ' },
    { value: '8', label: 'アンジャッシュ' },
    { value: '11', label: 'インディアンス' },
    { value: '14', label: 'オードリー' },
    { value: '15', label: 'おぎやはぎ' },
    { value: '18', label: 'かが屋' },
    { value: '19', label: 'かまいたち' },
    { value: '20', label: 'カミナリ' },
    { value: '23', label: '銀シャリ' },
    { value: '30', label: 'さらば青春の光' },
    { value: '31', label: '三四郎' },
    { value: '33', label: 'サンドウィッチマン' },
    { value: '34', label: '三拍子' },
    { value: '36', label: 'シソンヌ' },
    { value: '37', label: 'ジャルジャル' },
    { value: '38', label: 'ジャングルポケット' },
    { value: '41', label: 'すゑひろがりず' },
    { value: '44', label: 'ゾフィー' },
    { value: '45', label: 'ダイアン' },
    { value: '48', label: 'チョコレートプラネット' },
    { value: '49', label: 'どぶろっく' },
    { value: '50', label: 'トム・ブラウン' },
    { value: '51', label: 'とろサーモン' },
    { value: '52', label: 'ナイツ' },
    { value: '53', label: '流れ星' },
    { value: '57', label: 'バイきんぐ' },
    { value: '58', label: 'ハナコ' },
    { value: '60', label: 'バナナマン' },
    { value: '62', label: 'ハライチ' },
    { value: '63', label: 'ハリウッドザコシショウ' },
    { value: '66', label: 'プラス・マイナス' },
    { value: '67', label: 'ぺこぱ' },
    { value: '70', label: 'ミキ' },
    { value: '71', label: 'ミルクボーイ' },
    { value: '73', label: 'ゆりやんレトリィバァ' },
    { value: '76', label: 'ラバーガール' },
    { value: '80', label: 'レインボー' },
    { value: '81', label: 'ロッチ' },
    { value: '83', label: '和牛' },
    { value: '86', label: '学天即' },
    { value: '87', label: '宮下草薙' },
    { value: '88', label: '金属バット' },
    { value: '89', label: '空気階段' },
    { value: '90', label: '見取り図' },
    { value: '91', label: '四千頭身' },
    { value: '93', label: '陣内智則' },
    { value: '94', label: '千鳥' },
    { value: '95', label: '相席スタート' },
    { value: '96', label: '霜降り明星' },
    { value: '98', label: '東京03' },
    { value: '99', label: '東京ホテイソン' },
    { value: '100', label: '納言' },
    { value: '101', label: '博多華丸・大吉' },

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

                <main>
                    <div className="hero is-info is-bold">
                        <div className="hero-body " id="hero_b">
                            <a className="title" href="/geinin/">芸人レコメンダー</a>
                        </div>
                    </div>
                    <div className="container" id="root"></div>
                </main>

                <section className="section" id="section_15rem">
                {/* <section className={styles.section_6rem}> */}
                    <form onSubmit={this.handleSubmit}>
                        <div id="wrap">
                            <label>
                                <p className="is-size-4">好きな芸人を選択:&nbsp;</p>
                                <Select
                                    onChange={this.handleChange}
                                    options={options}
                                />
                            </label>
                            <input className="button is-primary is-large" id="button_submit" type='submit' value="おすすめを見る" />
                        </div>
                    </form>
                </section>

            </div>

        );
    }
};

export default Geinin;
