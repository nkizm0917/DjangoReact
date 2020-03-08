import React, { Component } from 'react';
// import './App.css';
import axios from 'axios';
import history from '../../history';

class Top extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: 'サンプル1'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    // history.push('/sample');
    // alert(this.state.value + 'を選択');
    console.log(this.state.value);
    event.preventDefault();
  }

  handleClick = () => {
    axios
      // .get("http://192.168.99.100:8000/api/profile/", {
      .get("http://192.168.99.100:8000/api/profile/?format=json", {
        params: {
          ID: this.state.value
        }
      })
      .then(res => console.log(res))
      .catch(err => alert(err));
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label>
              Pick:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="サンプル1">サンプル1</option>
                <option value="サンプル2">サンプル2</option>
                <option value="サンプル3">サンプル3</option>
              </select>
            </label>
          <input type='submit' value="Submit" />
        </form>

        <>
          <button onClick={this.handleClick}>メッセージ取得</button>
        </>

      </div>
    );
  }
};

export default Top;
