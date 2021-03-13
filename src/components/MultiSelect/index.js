import React, { useState } from "react";
import PropTypes from "prop-types";
import { CaretDownOutlined } from "@ant-design/icons";

import InputComponent from "../Input";
import BadgeComponent from "../Badge";
import CheckboxComponent from "../Checkbox";
import PopoverComponent from "../Popover";

import "./styles.scss";

const MultiSelect = ({ placeholder, list, selected, toggleSelection }) => {
  console.log(list, selected);
  
  let filterInput = null;
  const [isPopoverOpen, setPopoverVisibility] = useState(true),
    [search, setSearch] = useState(""),
    selectedCount = selected.length,
    getContent = (list, selected) => {
      if (list.length) {
        return list.map((item, index) => (
          <div
            key={index}
            className={`container ${
              selected.includes(item) ? "selected-item" : "filter-item"
            }`}
          >
            <div className="display-flex-center">
              <CheckboxComponent
                label={item}
                checked={selected.includes(item)}
                onChange={(event) => toggleSelection(item, event)}
              />
            </div>
          </div>
        ));
      } else {
        return (
          <div className="no-options">
            No options available
          </div>
        );
      }
    },
    togglePopoverVisibility = (visible) => {
      setSearch("");
      filterInput.focus();
      setPopoverVisibility(visible);
    },
    filterList = search
      ? list.filter((item) =>
          String(item).toLowerCase().includes(search.toLowerCase())
        )
      : list,
    shouldDisplayBadge = selectedCount > 1 && !isPopoverOpen;

  return (
    <PopoverComponent
      overlayClassName="filter-wrapper custom-scrollbar"
      placement="bottomRight"
      trigger="click"
      isVisible={isPopoverOpen}
      content={getContent(filterList, selected)}
      onVisibleChange={togglePopoverVisibility}
    >
      <InputComponent
        className="filter"
        placeholder={placeholder}
        onChange={(event) => setSearch(event.target.value)}
        value={isPopoverOpen ? search : selected[0]}
        inputRef={(input) => (filterInput = input)}
        suffix={
          <div onClick={togglePopoverVisibility}>
            {shouldDisplayBadge && <BadgeComponent count={selectedCount - 1} />}
            <CaretDownOutlined />
          </div>
        }
      />
    </PopoverComponent>
  );
};

MultiSelect.propTypes = {
    placeholder: PropTypes.string.isRequired,
    list: PropTypes.array.isRequired,
    selected: PropTypes.array.isRequired,
    toggleSelection: PropTypes.func.isRequired
};

export default MultiSelect;
