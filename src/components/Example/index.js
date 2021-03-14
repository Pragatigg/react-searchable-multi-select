import React from "react";
import { Row, Col } from "antd";
import MultiSelect from "../MultiSelect";

const Example = () => {
    const options = ["Software Developer", "senior Software Developer", "Team Lead", "Manager"];
    const onSelectionChange = (selected) => console.log(selected);
    return (
        <Row>
            <Col sm={12}>
                <MultiSelect
                    placeholder="Role"
                    options={options}
                    onSelectionChange={onSelectionChange}
                />
            </Col>
        </Row>
    )
};

export default Example;