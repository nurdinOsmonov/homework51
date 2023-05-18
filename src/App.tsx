import React, {useState} from 'react';
import Number from "./Number/Number";
import './App.css';

const App = () => {
  const [numbers, setNumbers] = useState<number[]>([]);
  const getRandom = (max: number, min: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  const randomNumbers = () => {
    const array: number[] = [];
    for (let i = 0; i < 5; i++) {
      const randomNumber = getRandom(36, 5);

      if (!array.includes(randomNumber)) {
        array.push(randomNumber);
      } else {
        const randomNumber = getRandom(36, 5);
        array.push(randomNumber);
      }
    }

    array.sort((a, b) => a - b);

    return array;
  }

  const lotto = () => {
    setNumbers(randomNumbers());
  };

  return (
    <div className="App">
      <div>
        <button onClick={lotto}>Play</button>
      </div>
      <div className="numbers">
        <Number number={numbers[0]}/>
        <Number number={numbers[1]}/>
        <Number number={numbers[2]}/>
        <Number number={numbers[3]}/>
        <Number number={numbers[4]}/>
      </div>
    </div>
  );
};

export default App;
