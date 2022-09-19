import React from 'react';

const Cell = (props) => {
  const { text } = props;
  return <div className=" h-10  border-solid border border-sky-500">{text}</div>;
};

export default Cell;
