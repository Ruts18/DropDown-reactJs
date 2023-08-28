import React, { useState } from "react";
import "./dropdown.css";
import dropIcon from "./assets/down-arrow.png";
import plusIcon from "./assets/plus-icon1.png";
import rightIcon from "./assets/tick.png";

const Dropdown = () => {
  const [isOpen, setIsOpen] = useState(false); //manage visibility of dropdown
  const [selectedOptions, setSelectedOptions] = useState([]); //track the selected options

  const options = ["Sound", "Text", "Image", "Video"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const toggleSelection = (option) => {
    setSelectedOptions((prevSelected) =>
      prevSelected.includes(option)
        ? prevSelected.filter((item) => item !== option)
        : [...prevSelected, option]
    );
  };
  const isOptionSelected = (option) => selectedOptions.includes(option);

  return (
    <div className="custom-dropdown">
      <div className="header-content" onClick={toggleDropdown}>
        {isOpen ? (
          <span className="types-text">TYPE</span>
        ) : (
          <img className="img" src={dropIcon} alt="Icon" />
        )}
      </div>
      {isOpen && (
        <div className="dropdown-content">
          {options.map((option) => (
            <div
              key={option}
              className={`dropdown-item ${
                isOptionSelected(option) ? "selected" : ""
              }`}
            >
              {option}
              <button className="add_btn">
                <img
                  className="img"
                  src={isOptionSelected(option) ? rightIcon : plusIcon}
                  alt="Icon"
                  onClick={() => toggleSelection(option)}
                />
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;

//1. If the option is found in the prevSelected array,
//the condition item !== option evaluates to **false** for that specific option.
//As a result, that particular option is filtered out from the new array created by .filter().
//2. If the option is not found in the prevSelected array,
//the condition item !== option evaluates to **true** for all elements.
// As a result, all elements are included in the new array returned by .filter().
