import React from "react";
import Select from "react-select";
import { customStyles } from "../constants/customStyles";
import { languageOptions, LanguageOption } from "../constants/languageOptions";

interface LanguagesDropdownProps {
  onSelectChange: (selectOption: LanguageOption | null) => void;
}

const LanguagesDropdown: React.FC<LanguagesDropdownProps> = ({ onSelectChange }) => {
  const onChangeHandler = (selectedOption: LanguageOption | null) => {
    onSelectChange(selectedOption);
  };

  return (
    <Select
      placeholder={`Filter By Category`}
      options={languageOptions}
      styles={customStyles as import("react-select").StylesConfig<any, false, any>}
      defaultValue={languageOptions[1]}
      onChange={onChangeHandler}
    />
  );
};

export default LanguagesDropdown;