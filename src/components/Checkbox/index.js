import React from "react";
import PropTypes from "prop-types";
import { Checkbox } from "antd";

import "./styles.scss";

const CheckboxComponent = ({ lable, onChange }) => (
  <div className="checkbox-wrapper">
    <Checkbox onChange={onChange}>{lable}</Checkbox>
  </div>
);

CheckboxComponent.propTypes = {
  lable: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default CheckboxComponent;
