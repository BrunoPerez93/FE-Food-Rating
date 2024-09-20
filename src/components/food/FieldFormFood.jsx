import React from 'react';

const FieldFormFood = ({ label, type, name, value, onChange }) => {
  return (
    <div>
      <label className="form-label">{label}</label>
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        className="form-control"
      />
    </div>
  );
};

export default FieldFormFood;
