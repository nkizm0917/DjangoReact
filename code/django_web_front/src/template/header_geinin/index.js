import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
// import '../../styles/index.css';


class Header_geinin extends React.Component {
    render() {
        return (
            <div>
                <Helmet title="芸人レコメンダー" />

                <main>
                    <div className="hero is-info is-bold">
                        <div className="hero-body " id="hero_b">
                            <a className="title" href="/geinin/">芸人レコメンダー</a>
                        </div>
                    </div>
                    <div className="container" id="root"></div>
                </main>

            </div>

        );
    }
};

export default Header_geinin;