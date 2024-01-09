import { useRef, useState } from "react";
import PropTypes from "prop-types";

const CustomSelect = ({ options }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(options[0].name);
  const timeoutRef = useRef(null);

  const handleItemClick = (option) => {
    setSelectedOption(option.name);
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 100); // delay in milliseconds
  };

  return (
    <div
      className="relative inline-block text-left -mt-0.5"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div>
        <button
          type="button"
          className="inline-flex justify-center items-center w-full px-2 text-xs"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          {selectedOption}
          <svg
            className="-mr-1 ml-0.5 mt-0.5 h-3 w-3"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
      </div>

      {isOpen && (
        <div className="origin-top-right absolute right-0 mt-1 w-20 rounded-md shadow-lg bg-white z-50">
          <div
            className="py-1"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            {options.map((option, index) => (
              <a
                key={index}
                href=""
                className="block px-4 py-2 text-xs text-dark"
                role="menuitem"
                onClick={() => handleItemClick(option)}
              >
                {option.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

CustomSelect.propTypes = {
  options: PropTypes.array.isRequired,
  label: PropTypes.string.isRequired,
};

export default CustomSelect;
