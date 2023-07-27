import React from "react";

function InputField({ label, value, onChange, maxLength, isTextarea }) {
  return (
    <div>
      <label>{label}</label>
      {isTextarea ? (
        <textarea
          className="form-control"
          value={value}
          onChange={onChange}
          maxLength={maxLength}
          rows={3} // Number of rows to display
        />
      ) : (
        <input
          type="text"
          className="form-control"
          value={value}
          onChange={onChange}
          maxLength={maxLength}
        />
      )}
    </div>
  );
}

export default InputField;