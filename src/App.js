import React, { useState } from 'react';
import './App.css';

function App() {
  const [display, setDisplay] = useState('');

  const handleButtonClick = (value) => {
    if (value === 'AC') {
      setDisplay('');
    } else if (value === 'DEL') {
      setDisplay((prev) => prev.slice(0, -1));
    } else if (value === '=') {
      try {
        setDisplay((prev) => eval(prev).toString());
      } catch {
        setDisplay('Erro');
      }
    } else {
      setDisplay((prev) => prev + value);
    }
  };

  return (
    <div className="calculator">
      <input type="text" value={display} className="display" readOnly />
      <div className="buttons">
        {['AC', 'DEL', '/', '*', '7', '8', '9', '-', '4', '5', '6', '+', '1', '2', '3', '=', '0', '.'].map((btn) => (
          <button
            key={btn}
            className={`btn ${['AC', 'DEL', '=', '/', '*', '-', '+'].includes(btn) ? 'operator' : 'number'}`}
            onClick={() => handleButtonClick(btn)}
          >
            {btn}
          </button>
        ))}
      </div>
    </div>
  );
}

export default App;
