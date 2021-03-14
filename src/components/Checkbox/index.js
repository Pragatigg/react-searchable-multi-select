import React, { memo } from "react";
import PropTypes from "prop-types";
import { Checkbox } from "antd";

import "./styles.scss";

const CheckboxComponent = ({ label, onChange, checked }) => (
  <div className="checkbox-wrapper">
    <Checkbox checked={checked} onChange={onChange}>{label}</Checkbox>
  </div>
);

CheckboxComponent.propTypes = {
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired
};

export default memo(CheckboxComponent);
