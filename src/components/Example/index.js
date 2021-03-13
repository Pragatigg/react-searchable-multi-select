import React, { useState } from "react";
import { Row, Col } from "antd";
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
        <Row>
            <Col sm={12}>
                <MultiSelect
                    placeholder="Role"
                    list={list}
                    selected={selected}
                    toggleSelection={toggleSelection}
                />
            </Col>
        </Row>
    )
};

export default Example;