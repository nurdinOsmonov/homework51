import React from 'react';

interface INumberProps {
  number: number;
}

const Number: React.FC<INumberProps> = props => {
  return (
    <div className="number">
      <p>{props.number}</p>
    </div>
  );
};

export default Number;
