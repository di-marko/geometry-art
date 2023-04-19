import React, { useEffect } from 'react';
import './App.css';

const colors = ['#674a40', '#50a2a4', '#fcaf38', '#f95355'];
const shapes = [
  'quad-circle-1',
  'quad-circle-2',
  'quad-circle-3',
  'quad-circle-4',
  'triangle-1',
  'triangle-2',
  'triangle-3',
  'triangle-4',
  'circle',
];

const App = () => {
  const generatePattern = () => {
    const boxes = document.querySelectorAll('.container div');

    boxes.forEach((box) => {
      box.className = '';
      const i = Math.floor(Math.random() * shapes.length);
      const j = Math.floor(Math.random() * colors.length);
      box.classList.add(shapes[i]);
      box.style.backgroundColor = colors[j];
    });
  };

  useEffect(() => {
    generatePattern();
  }, []);

  return (
    <div className="wrapper">
      <div className="container">
        {Array.from({ length: 24 }).map((_, i) => (
          <div key={i}></div>
        ))}
      </div>
      <button id="btn" onClick={generatePattern}>
        Generate
      </button>
    </div>
  );
};

export default App;
