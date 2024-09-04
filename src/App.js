import React, { useState } from 'react';
import './App.css';
import Welcome from './Welcome';


function App() {
  // Declare a new state variable called "name"
  const [name, setName] = useState('Adam');

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My First React App!</h1>
        <p>This is my first React component.</p>
        <Welcome name={name} /> {/* Add a Welcome component */}
        <button onClick={() => setName('Tunde')}>Change Name</button>
      </header>
    </div>
  );
}

export default App;
