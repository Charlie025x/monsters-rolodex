import { ChangeEventHandler } from "react";

import "./search-box.styles.css";

type SearchBoxProps = {
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
};

export const SearchBox = ({ placeholder, onChangeHandler }: SearchBoxProps) => (
  <input
    className="search"
    type="search"
    placeholder={placeholder}
    onChange={onChangeHandler}
  />
);
