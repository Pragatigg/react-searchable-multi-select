# React searchable multi select

A library to search and select multiple values from list of options.

## 📦 Install

```bash
npm install react-searchable-multi-select --save
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
        <MultiSelect
            placeholder="Role"
            options={options}
            onSelectionChange={onSelectionChange}
        />
    )
};

```
## Props

Common props you may want to specify include:
- `placeholder` - change the text displayed when no option is selected
- `options` - array of strings (list of options)
- `onSelectionChange` - function will gets executed on selection/deselection of option from the list