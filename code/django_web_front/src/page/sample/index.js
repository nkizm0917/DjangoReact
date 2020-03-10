import React, { Component } from 'react';
// import './App.css';
import axios from 'axios';
// import { useHistory, useLocation } from "react-router-dom";
import { useHistory } from "react-router-dom";
// import Select from 'react-select';

const Sample = () => {
  let history = useHistory();
  // let location = useLocation();

  return (
    <div>
      <button
        onClick={() => history.push("/")}
      >
        ボタン
      </button>

      <select name="example">
      <option value="サンプル1">サンプル1</option>
      <option value="サンプル2">サンプル2</option>
      <option value="サンプル3">サンプル3</option>
      </select>

    </div>
  );
};

export default Sample;
