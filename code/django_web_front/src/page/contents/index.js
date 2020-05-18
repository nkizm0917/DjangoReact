import React, { Component } from 'react';
import Header_app from '../../template/header_app';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


class Contents extends Component {

    render() {
        return (
            <div>
                <header>
                    <Header_app />
                </header>

                <div className="content">
                    {/* <div className="section"> */}
                    <h1 className="title">コンテンツ</h1>
                    <div className="content">
                        <ul>
                            <li className="menu"><a href="/geinin" className="link">芸人レコメンダー</a></li>
                            <li className="menu"><a href="/game/xeno" className="link">カードゲーム「XENO」</a></li>
                            <li className="menu">Coming Soon</li>
                            <li className="menu">Coming Soon</li>
                        </ul>
                    </div>
                </div>

            </div>
        );
    }
}

export default Contents;
