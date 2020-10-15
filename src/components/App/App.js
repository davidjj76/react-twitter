import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header bordered"></header>
      <div className="container">
        <main className="App-main bordered">
          {[...Array(10).keys()].map(index => (
            <div style={{ height: 100 }} key={index}>
              {index}
            </div>
          ))}
        </main>
      </div>
      <footer className="App-footer bordered">© 2020 Keepcoding.</footer>
    </div>
  );
}

export default App;
