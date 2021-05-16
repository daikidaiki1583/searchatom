import React, { FC } from "react";

type Props = {
  text: string;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const SearchInput: FC<Props> = (props) => {
  return <input value={props.text} onChange={props.handleChange} />;
};

export default SearchInput;
