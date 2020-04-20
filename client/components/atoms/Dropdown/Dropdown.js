import React, { useState } from 'react';

export default function Dropdown(props) {
  const { dropdownList = [], classNames = {} } = props;
  const [value, setValue] = useState(null);
  const onChange = function (e) {
    setValue(e.target.value);
    if (props.onChange) {
      props.onChange(e);
    }
  };
  return (
    <select
      onChange={(e) => {
        onChange(e);
      }}
      className={classNames.select}
      value={value}
    >
      {dropdownList.map((value) => (
        <option className={classNames.select} value={value.value}>
          {value.label}
        </option>
      ))}
    </select>
  );
}
