import React, { FC } from "react";
import "./Result.scss";

export type Data = {
  number: number;
  symbol: string;
  name: string;
  mass?: number | string;
  type?: string;
};

const Result: FC<Data> = (props) => {
  return (
    <div className="result">
      <div className="icon">
        <div>{props.number}</div>
        <div>{props.symbol}</div>
        <div>{props.name}</div>
        <div>{props.mass}</div>
      </div>
      <div>{props.name}</div>
    </div>
  );
};

export default Result;
