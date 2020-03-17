import React, { Component } from 'react';

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
      <div className="section">
        <h1 className="title">コンテンツ</h1>
        <div className="content">
        <ul>
          <li className="menu"><a href="/geinin" className="link">芸人レコメンダー</a></li>
        </ul>
        </div>
      </div>
    );
  }
}

export default App;
