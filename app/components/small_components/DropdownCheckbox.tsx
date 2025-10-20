import React, { useState } from 'react';

const DropdownCheckbox = ({ options, onSelectionChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState([]);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleCheckboxChange = (event) => {
    const value = event.target.value;
    const isChecked = event.target.checked;

    if (isChecked) {
      setSelectedOptions([...selectedOptions, value]);
    } else {
      setSelectedOptions(selectedOptions.filter((item) => item !== value));
    }

    // Notify the parent component about the selection changes
    if (onSelectionChange) {
      onSelectionChange(selectedOptions);
    }
  };

  return (
    <div className="h-[2.5rem] w-[97%]">
      <button
        type="button"
        className="bg-shadow border border-gray-300 text-moss text-left shadow-sm pl-[1rem] pt-[0.3rem] pb-[0.5rem] w-full"
        onClick={toggleDropdown}
      >
        <div className='flex flex-wrap justify-between items-center'>
            <div className='w-[90%]'>
            {selectedOptions.length > 0
              ? selectedOptions.join(', ')
              : 'select options'}
            </div>

            <div className={`${isOpen? 'rotate-180': ''} box-border block h-full w-[10%] justify-items-center relative transition-transform duration-150`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="size-3 relative">
                    <path strokeLinecap='round' strokeLinejoin='round' d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                </svg>
            </div>  
        </div>
      </button>

      {isOpen && (
        <div className="absolute z-1 mt-0 w-[97%] bg-shadow outline-[0.5px]">
          <ul className="max-h-48 overflow-auto focus:outline-none">
            {options.map((option) => (
              <li key={option.value} className="px-2 py-1 hover:bg-gray-100">
                <label className="inline-flex items-center w-full text-moss lowercase">
                  <input
                    type="checkbox"
                    className="form-checkbox h-4 w-4 transition duration-150 ease-in-out"
                    value={option.value}
                    checked={selectedOptions.includes(option.value)}
                    onChange={handleCheckboxChange}
                  />
                  <span className="ml-2">{option.label}</span>
                </label>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropdownCheckbox;