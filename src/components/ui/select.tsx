import React, { useState } from "react";
export type option = {
  name: string;
  description: string;
  callback?: () => void;
};
export type InputSelectProps = {
  options: option[];
};

const InputSelect: React.FC<InputSelectProps> = ({ options }) => {
  const [inputValue, setInputValue] = useState("");
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showOptions, setShowOptions] = useState(false);
  /**
   * Handles the change event of the input element.
   * @param {React.ChangeEvent<HTMLInputElement>} e - The change event object.
   * @returns {void}
   */
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
    if (inputValue == "") setSelectedOption(null);
  };

  const handleOptionClick = (option: string) => {
    setInputValue(option);
    setSelectedOption(option);
    if (inputValue == "") setSelectedOption(null);
  };

  const filteredOptions = options.filter((option) =>
    option.name.toLowerCase().includes(inputValue.toLowerCase())
  );

  return (
    <div className="relative">
      <input
        onFocus={() => setShowOptions(true)}
        onBlur={() => setShowOptions(false)}
        type="text"
        value={inputValue}
        className={"bg-secondary/75 py-2 w-[25vw] text-center rounded-md"}
        onChange={handleInputChange}
        placeholder={selectedOption ? selectedOption : "Select an option..."}
      />
      <ul
        className={`absolute bg-secondary/75 z-[10] backdrop-blur-3xl transition-all w-full p-1 rounded-md mt-1 ${
          showOptions ? "opacity-1" : " opacity-0"
        }`}
      >
        {filteredOptions.splice(0, 5).map((option, index) => (
          <li
            key={index}
            className="hover:bg-secondary p-1 rounded-md transition-all"
            onClick={() => {
              handleOptionClick(option.name);
              option.callback && option.callback();
            }}
          >
            {option.name}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InputSelect;
