import React from 'react';
import './App.css';

function App() {
  const now = new Date();
  const value = 200;
  const string = 'OK';

  return (
    <div className="App">
      <header className="App-header">
      <p> Hello! It is now {now.toString()}</p>
      <p>
        {value} - {string}
      </p>

      </header>
    </div>
  );
}

export default App;
