import React, { useState, useRef, useEffect } from 'react';

const DropdownRadioButton = ({ options, defaultValue, onChange, width}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(defaultValue || null);
  const dropdownRef = useRef(null);
  const optionsListRef = useRef(null); // Ref for the listbox element
  const [focusedIndex, setFocusedIndex] = useState(-1); // For keyboard navigation

  // Find the default selected option object
  useEffect(() => {
    if (defaultValue) {
      const defaultOption = options.find(option => option.value === defaultValue);
      setSelectedOption(defaultOption || null);
    }
  }, [defaultValue, options]);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
        setFocusedIndex(-1); // Reset focus index when closing
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownRef]);

  // Handle keyboard navigation
  const handleKeyDown = (event) => {
    const numOptions = options.length;

    switch (event.key) {
      case ' ':
      case 'Enter':
        event.preventDefault(); // Prevent form submission or page scroll
        if (isOpen) {
          if (focusedIndex >= 0) {
            handleOptionClick(options[focusedIndex]);
          } else {
            setIsOpen(false); // Close if open but no option is focused (e.g., focus on trigger)
          }
        } else {
          setIsOpen(true);
          // Optionally focus the first item when opening with Enter/Space
          setFocusedIndex(0);
        }
        break;
      case 'Escape':
        event.preventDefault();
        setIsOpen(false);
        setFocusedIndex(-1); // Reset focus index
        dropdownRef.current.focus(); // Return focus to the trigger
        break;
      case 'ArrowDown':
        event.preventDefault();
        if (!isOpen) {
          setIsOpen(true);
          setFocusedIndex(0); // Focus first item when opening with ArrowDown
        } else {
          setFocusedIndex((prevIndex) => (prevIndex < numOptions - 1 ? prevIndex + 1 : prevIndex));
        }
        break;
      case 'ArrowUp':
        event.preventDefault();
        if (isOpen) {
          setFocusedIndex((prevIndex) => (prevIndex > 0 ? prevIndex - 1 : 0));
        }
        break;
      case 'Tab':
        // Allow normal tab behavior but close the dropdown
        if (isOpen) {
          setIsOpen(false);
          setFocusedIndex(-1);
        }
        break;
      default:
        // Optional: Implement type-ahead/searching
        break;
    }
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    setFocusedIndex(-1); // Reset focus index
    onChange && onChange(option.value); // Call the onChange prop if provided
    dropdownRef.current.focus(); // Return focus to the trigger after selection
  };

  const handleTriggerClick = () => {
    setIsOpen(!isOpen);
    setFocusedIndex(isOpen ? -1 : 0); // Focus first item when opening, reset when closing
  };

  // Update aria-activedescendant when focusedIndex changes
  useEffect(() => {
    if (isOpen && focusedIndex >= 0 && optionsListRef.current && optionsListRef.current.children[focusedIndex]) {
      dropdownRef.current.setAttribute('aria-activedescendant', optionsListRef.current.children[focusedIndex].id);
    } else {
      dropdownRef.current.removeAttribute('aria-activedescendant');
    }
  }, [isOpen, focusedIndex, options]);


  return (
    <div className='h-[2.5rem] mb-[0.3rem]' ref={dropdownRef} style={{ width: `${width}%` }}>
      <button
        type="button"
        className=' bg-shadow text-left items-center pl-[1rem] pt-[0.3rem] pb-[0.5rem] w-full'
        onClick={handleTriggerClick}
        onKeyDown={handleKeyDown}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-controls="custom-dropdown-list" // Reference the ID of the list
        role="combobox"
        aria-labelledby="dropdown-label" // Link to a label if you have one
      > 
        <div className='flex flex-wrap items-center justify-between'>
            <div className='w-[90%]'>
                <span id="dropdown-label" style={{ display: 'none' }}>select an option</span> {/* Hidden label for accessibility */}
                {selectedOption ? selectedOption.label : 'select an option'}
            </div>

            {/* Add a visual indicator for the dropdown arrow */}
            <div className={`${isOpen? 'rotate-180': ''} box-border block h-full w-[10%] relative justify-items-center transition-transform duration-150`}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="4" stroke="currentColor" className="size-3 relative">
                    <path strokeLinecap='round' strokeLinejoin='round' d="m19.5 8.25-7.5 7.5-7.5-7.5"/>
                </svg>
            </div>
        </div>
      </button>

      {isOpen && (
        <ul
          id="custom-dropdown-list"
          role="listbox"
          className='absolute z-1 mt-0 bg-shadow outline-[0.5px]'
          style={{ width: `${width}%` }}
          ref={optionsListRef}
        >
          {options.map((option, index) => (
            <li
              key={option.value}
              id={`option-${index}`} // Unique ID for aria-activedescendant
              role="option"
              aria-selected={selectedOption && selectedOption.value === option.value}
              className="px-2 py-1 hover:bg-gray-100"
              onClick={() => handleOptionClick(option)}
              // Add mouseover to update focusedIndex for visual feedback
              onMouseOver={() => setFocusedIndex(index)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownRadioButton;