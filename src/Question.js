import React from "react";

function Question({ question, options, selectedOption, onSelectOption }) {
  return (
    <div>
      <h3 className='text-center'>{question}</h3>
      {options.map((option, index) => (
        <div key={option} className={`form-check ${index > 0 ? "mb-3" : ""}`}>
          <input
            type="radio"
            className="form-check-input"
            value={option}
            checked={selectedOption === option}
            onChange={(e) => onSelectOption(e.target.value)}
          />
          <label className="form-check-label">{option}</label>
        </div>
      ))}
    </div>
  );
}

export default Question;