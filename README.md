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

```