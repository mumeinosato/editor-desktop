import React, { ChangeEvent } from "react";
import { classnames } from "../utils/general";

interface CustomInputProps {
  customInput: string;
  setCustomInput: (value: string) => void;
}

const CustomInput: React.FC<CustomInputProps> = ({ customInput, setCustomInput }) => {
  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setCustomInput(e.target.value);
  };

  return (
    <textarea
      rows={5}
      value={customInput}
      onChange={handleChange}
      placeholder={`入力(オプション)`}
      className={classnames(
        "w-full border-2 border-[#232323] bg-[#1e1e1e] text-[#cccccc] p-2",
      )}
    />
  );
};

export default CustomInput;