# React searchable multi select

A library to search and select multiple values from list of options.

## 📦 Install

```bash
npm install react-searchable-multi-select
```

```bash
yarn add react-searchable-multi-select
```
## 🔨 Usage

```jsx
import MultiSelect from "react-searchable-multi-select";

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

```