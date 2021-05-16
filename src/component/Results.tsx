import React, { FC } from "react";
import Result, { Data } from "./Result";

type Props = {
  data: Data[];
};

const Results: FC<Props> = (props) => {
  const data = props.data;

  return (
    <>
      {data.map((dt) => (
        <Result
          key={dt.number}
          number={dt.number}
          symbol={dt.symbol}
          name={dt.name}
          mass={dt.mass}
        />
      ))}
    </>
  );
};

export default Results;
