import React, { useState } from "react";
import MultiSelect from "../MultiSelect";

const Example = () => {
    const list = ["Software Developer", "senior Software Developer", "Team Lead", "Manager"];
    const [selected, setSelected] = useState([]);
    const toggleSelection = (value, event) => {
        if (event.target.checked) {
            setSelected([...selected, value]);
        } else {
            setSelected(selected.filter((option) => option !== value));
        }
    }

    return (
        <MultiSelect
            placeholder="Role"
            list={list}
            selected={selected}
            toggleSelection={toggleSelection}
        />
    )
};

export default Example;