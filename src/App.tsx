import React, { useState } from 'react';
import './index.css';

const App: React.FC = () => {
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');

  const handleButtonClick = (value: string) => {
    if (value === '=') {
      try {
        setOutput(eval(input).toString());
      } catch (error) {
        setOutput('Error');
      }
    } else if (value === 'C') {
      setInput('');
      setOutput('');
    } else {
      setInput((prev) => prev + value);
    }
  };

  const buttons = [
    '7', '8', '9', '/',
    '4', '5', '6', '*',
    '1', '2', '3', '-',
    '0', '.', '=', '+',
    'C',
  ];

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{input}</div>
        <div className="current-operand">{output}</div>
      </div>
      {buttons.map((button) => (
        <button key={button} onClick={() => handleButtonClick(button)}>
          {button}
        </button>
      ))}
    </div>
  );
};

export default App;
