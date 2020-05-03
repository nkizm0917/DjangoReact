import React from 'react';
// import { EffectSix } from './index';

export class Effect extends React.Component {
    render() {
        return (
            <div className="effectState">
                <h5>⑩潜伏・転生</h5>
                <p>場に出すことができない。<br />
                    皇帝に捨てさせられたら脱落。<br />
                    皇帝以外に捨てさせられたら転生札で復活。</p>
                <h5>⑨公開処刑</h5>
                <p>相手に1枚引かせて、2枚とも公開。<br />
                    どちらか1枚を指定し、捨てさせる。</p>
                <h5>⑧交換</h5>
                <p>手札を交換。</p>
                <h5>⑦選択</h5>
                <p>次の番で3枚引き、その中から1枚選ぶ。</p>
                <h5>⑥対決</h5>
                <p>手札を見せあい、数字の大きい方が勝利。</p>
                <h5>⑤疫病</h5>
                <p>相手に1枚引かせる。<br />
                    非公開のままどちらか1枚を指定し、捨てさせる。</p>
                <h5>④守護</h5>
                <p>次の番まで自分への効果を無効化。</p>
                <h5>③透視</h5>
                <p>相手の手札を見る。</p>
                <h5>②捜査</h5>
                <p>相手の手札を当てると勝利。</p>
                <h5>①革命</h5>
                <p>1枚目…効果なし。<br />
                    2枚目…「公開処刑」</p>
            </div>
        );
    }
}

// function EffectLast(props) {
//     return (
//         <div>
//             {/* <h5>『対決』</h5>
//             <p>数字の大きい方が勝利</p> */}
//             <button onClick={props.onClick}>
//                 対決する
//             </button>
//         </div>
//     );
// }
