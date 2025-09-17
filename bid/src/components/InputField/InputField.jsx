import React from 'react';
import './InputField.css';

const InputField = ({ label, type, name, value, onChange }) => {
  return (
    <div className="input-field-group">
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        required
      />
    </div>
  );
};

export default InputField;
