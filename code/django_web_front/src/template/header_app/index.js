import React, { Component } from 'react';
import "./style.css";
import logo from './mylogo.png';

class Header_app extends React.Component {
    render() {
        return (
            <div>
                <header>
                    <div className="container">
                        <nav className="level">
                            <div className="level-left">
                                <a href="/">
                                    <img className="level-item" src={logo} alt="ロゴ" />
                                </a>
                            </div>
                        </nav>
                    </div>
                </header>
                

                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <div className="container">

                        <nav id="menubar">
                            <ul>
                                <li><a href="/">ホーム</a></li>
                                <li><a href="/contents">コンテンツ</a></li>
                                <li>プロフィール</li>
                                <li>リンク</li>
                            </ul>
                        </nav>

                    </div>
                </nav>

            </div>

        );
    }
};

export default Header_app;