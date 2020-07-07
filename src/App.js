import React from 'react';
import './App.scss';
import ClickCounter from './Components/ClickCounter/ClickCounter';
import HoverCounter from './Components/HoverCounter/HoverCounter';

function App() {
  return (
    <div className="App">
      <ClickCounter />
      <HoverCounter />
    </div>
  );
}

export default App;
