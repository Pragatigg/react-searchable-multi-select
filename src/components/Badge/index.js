import React from "react";
import PropTypes from "prop-types";
import { Badge } from "antd";

import "./styles.scss";

const BadgeComponent = ({ count }) => (
  <span className="badge-wrapper">
    <Badge overflowCount={99} count={count} />
  </span>
);

BadgeComponent.propTypes = {
  count: PropTypes.number.isRequired
};

export default BadgeComponent;
