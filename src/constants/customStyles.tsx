import { CSSObjectWithLabel } from 'react-select';
import { ControlProps, GroupBase } from 'react-select';

interface StylesConfigFunction<OptionType, IsMulti extends boolean, GroupType extends GroupBase<OptionType>> {
  (base: CSSObjectWithLabel, props: ControlProps<OptionType, IsMulti, GroupType>): CSSObjectWithLabel;
}

interface StylesConfig<OptionType, IsMulti extends boolean, GroupType extends GroupBase<OptionType>> {
  control?: StylesConfigFunction<OptionType, IsMulti, GroupType>;
  option?: StylesConfigFunction<OptionType, IsMulti, GroupType>;
  menu?: StylesConfigFunction<OptionType, IsMulti, GroupType>;
  singleValue?: StylesConfigFunction<OptionType, IsMulti, GroupType>;
  placeholder?: StylesConfigFunction<OptionType, IsMulti, GroupType>;
}

export const customStyles: StylesConfig<any, false, any> = {
  control: (base, state) => ({
    ...base,
    width: "100%",
    maxWidth: "14rem",
    minWidth: "12rem",
    borderRadius: "5px",
    fontSize: "0.8rem",
    color: "#fff",
    lineHeight: "1.75rem",
    backgroundColor: "#1e1e1e",
    cursor: "pointer",
    border: "2px solid #232323",
    ":hover": {
      border: "2px solid #000000",
      boxShadow: "none",
    },
  }),
  option: (base, state) => ({
    ...base,
    color: "#fff",
    fontSize: "0.8rem",
    lineHeight: "1.75rem",
    width: "100%",
    background: "#1e1e1e",
    ":hover": {
      backgroundColor: "#1e1e1e",
      color: "#fff",
      cursor: "pointer",
    },
  }),
  menu: (base, state) => ({
    ...base,
    backgroundColor: "#1e1e1e",
    maxWidth: "14rem",
    border: "2px solid #000000",
    borderRadius: "5px",
  }),
  singleValue: (base, state) => ({
    ...base,
    color: "#fff",
    fontSize: "0.8rem",
    lineHeight: "1.75rem",
  }),
  placeholder: (base, state) => ({
    ...base,
    color: "#fff",
    fontSize: "0.8rem",
    lineHeight: "1.75rem",
  }),
};
