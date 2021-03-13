import React from 'react';
import ReactDOM from 'react-dom';
import InputComponent from "./components/Input";
import BadgeComponent from "./components/Badge";
import CheckboxComponent from "./components/Checkbox";

import "./index.css";
import "antd/dist/antd.css";

import reportWebVitals from './reportWebVitals';

import { CaretDownOutlined } from "@ant-design/icons";

ReactDOM.render(
  <React.StrictMode>
    <InputComponent
      className="filter"
      placeholder={"name"}
      onChange={() => {}}
      value={null}
      ref={null}
      suffix={
        <div>
          <BadgeComponent count={5} />
          <CaretDownOutlined />
        </div>
      }
    />
    <CheckboxComponent lable={"male"} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
