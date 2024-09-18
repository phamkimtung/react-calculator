import React, { useState } from 'react';
import Display from './Display';

const Calculator = () => {
  const [input, setInput] = useState('');

  const handleButtonClick = (value) => {
    if (value === '=') {
      try {
        setInput(eval(input).toString());
      } catch {
        setInput('Error');
      }
    } else if (value === 'C') {
      setInput('');
    } else if (value === 'DEL') {
      setInput(prevInput => prevInput.slice(0, -1));
    } else {
      setInput(prevInput => prevInput + value);
    }
  };

  return (
    <div className="calculator">
      <Display value={input} />
      <div className="buttons">
        <button onClick={() => handleButtonClick('1')}>1</button>
        <button onClick={() => handleButtonClick('2')}>2</button>
        <button onClick={() => handleButtonClick('3')}>3</button>
        <button onClick={() => handleButtonClick('+')}>+</button>
        <button onClick={() => handleButtonClick('4')}>4</button>
        <button onClick={() => handleButtonClick('5')}>5</button>
        <button onClick={() => handleButtonClick('6')}>6</button>
        <button onClick={() => handleButtonClick('-')}>-</button>
        <button onClick={() => handleButtonClick('7')}>7</button>
        <button onClick={() => handleButtonClick('8')}>8</button>
        <button onClick={() => handleButtonClick('9')}>9</button>
        <button onClick={() => handleButtonClick('*')}>*</button>
        <button onClick={() => handleButtonClick('0')}>0</button>
        <button onClick={() => handleButtonClick('.')}>.</button>
        <button onClick={() => handleButtonClick('/')}>/</button>
        <button onClick={() => handleButtonClick('=')}>=</button>
        <button onClick={() => handleButtonClick('C')}>C</button>
        <button onClick={() => handleButtonClick('DEL')}>DEL</button>
      </div>
    </div>
  );
};

export default Calculator;
