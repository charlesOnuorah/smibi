import React, { Component } from "react";

const FormField = ({ id, type, value, placeholder, onChange }) => {
  return (
    <div className="group my-2">
      <input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={e => onChange(e)}
      />
      <span className="bar"></span>
    </div>
  );
};

export default FormField;
