import React, { Component } from 'react';
import img_header from './myheader.png';
import Header_app from './template/header_app';

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


class App extends Component {

  render() {
    return (
      <div>
        <header>
          <Header_app />
        </header>
        {/* <img src={img_header} alt="ヘッダー画像" /> */}

        {/* <div className="content">
          <h1 className="title">プロフィール</h1>
          <div className="content">
            <h3>小泉 直人</h3>
            <p>1996.9.17~</p>
            <p>東京工業大学大学院</p>
            <p>経営工学専攻</p>
            <a className="link">詳しく見る</a>
          </div>
        </div>
        
        <div className="content">
          <h1 className="title">コンテンツ</h1>
          <div className="content">
            <ul>
              <li className="menu"><a href="/geinin" className="link">芸人レコメンダー</a></li>
              <li className="menu">Coming Soon</li>
              <li className="menu">Coming Soon</li>
            </ul>
          </div>
        </div> */}

      </div>
    );
  }
}

export default App;
