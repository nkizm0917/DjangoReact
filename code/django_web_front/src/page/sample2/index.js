import React, { Component } from 'react';
// import './App.css';
import axios from 'axios';
// import { useHistory, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import Select from 'react-select';
import history from '../../history';

class Sample2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: '1'};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit = (event) => {
    const id = this.state.value
    history.push('/sample2/' + this.state.value);
    // history.push('/sample');
    // alert(this.state.value + 'を選択');
    console.log(this.state.value);
    event.preventDefault();
  }

  // handleClick = () => {
    // axios
    //   .get("http://192.168.99.100:8000/api/profile/{this.state.value}?format=json", {
    //     params: {
    //       ID: this.state.value
    //     }
    //   })
    //   .then(res => console.log(res))
    //   .catch(err => alert(err));
  // }

  render() {
    return (
      <div>

        <form onSubmit={this.handleSubmit}>
            <label>
              Pick:
              <select value={this.state.value} onChange={this.handleChange}>
                <option value="1">サンプル1</option>
                <option value="2">サンプル2</option>
                <option value="3">サンプル3</option>
              </select>
            </label>
          <input type='submit' value="Submit" />
        </form>

      </div>
    );
  }
};

export default Sample2;
