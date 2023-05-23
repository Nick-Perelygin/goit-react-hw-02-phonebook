import React from "react";
import { FilterInput } from "./Filter.styled";

const Filter = ({value, onChange}) => (
    <label>Find contacts by name
    <FilterInput type="text" value={value} onChange={onChange}/>
    </label>
)

export default Filter