import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="App-header-wrapper">Header</div>
      </header>
      <main className="App-main">
        <div className="App-main-content">
          {[...Array(10).keys()].map(index => (
            <div style={{ border: '1px solid black', height: 100 }} key={index}>
              {index}
            </div>
          ))}
        </div>
        <aside className="App-main-aside">
          Search, what's happening, Who to follow and more
        </aside>
      </main>
    </div>
  );
}

export default App;
