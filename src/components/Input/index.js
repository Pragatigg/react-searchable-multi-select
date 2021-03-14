import React, { memo } from "react";
import PropTypes from "prop-types";
import { Input } from "antd";

import "./styles.scss";

const InputComponent = ({ placeholder, value, onChange, inputRef, suffix, onFocus }) => (
  <div className="input-wrapper">
    <Input
      className="filter"
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      ref={inputRef}
      suffix={suffix}
      onFocus={onFocus}
    />
  </div>
);

InputComponent.propTypes = {
  placeholder: PropTypes.string.isRequired,
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  inputRef: PropTypes.func.isRequired,
  suffix: PropTypes.element.isRequired,
  onFocus: PropTypes.func.isRequired
};

export default memo(InputComponent);
