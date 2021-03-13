import React from "react";
import PropTypes from "prop-types";
import { Popover } from "antd";

import "./styles.scss";

const PopoverComponent = ({ 
    children,
    overlayClassName,
    placement,
    trigger,
    isVisible,
    content,
    onVisibleChange 
}) => (
  <Popover
    overlayClassName={overlayClassName}
    placement={placement}
    trigger={trigger}
    visible={isVisible}
    content={content}
    onVisibleChange={onVisibleChange}
  >
    {children}
  </Popover>
);

PopoverComponent.propTypes = {
    children: PropTypes.element.isRequired,
    overlayClassName: PropTypes.string,
    placement: PropTypes.string.isRequired,
    trigger: PropTypes.string.isRequired,
    isVisible: PropTypes.bool.isRequired,
    content: PropTypes.element.isRequired,
    onVisibleChange: PropTypes.func.isRequired 
};

export default PopoverComponent;
