/* eslint-disable react/prop-types */
import React from 'react';
// import PropTypes from 'prop-types';

function MySelect({
  options, defaultValue, value, onChange,
}) {
  return (
    <select
      value={value}
      onChange={(event) => onChange(event.target.value)}
    >
      <option value="">{defaultValue}</option>
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.name}
        </option>
      ))}
    </select>
  );
}

// MySelect.PropTypes ={
// options: PropTypes.

// }
export default MySelect;
