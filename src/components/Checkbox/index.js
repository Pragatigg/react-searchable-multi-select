import React from "react";
import PropTypes from "prop-types";
import { Checkbox } from "antd";

import "./styles.scss";

const CheckboxComponent = ({ label, onChange }) => (
  <div className="checkbox-wrapper">
    <Checkbox onChange={onChange}>{label}</Checkbox>
  </div>
);

CheckboxComponent.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default CheckboxComponent;
