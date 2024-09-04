import React, { useState } from 'react';
import './App.css';
import Welcome from './Welcome';


function App() {
  // Declare a new state variable called "name"
  const [name, setName] = useState('Adam');
  const [submittedName, setSubmittedName] = useState('');


  // Handle user input
  function handleInputChange(event) {
    setName(event.target.value);
  }

  // Handle form submission
  function handleSubmit(event) {
    event.preventDefault(); // Prevent the page from refreshing
    setSubmittedName(name);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My First React App!</h1>
        <p>This is my first React component.</p>
        <Welcome name={submittedName || 'Guest'} /> {/* Add a Welcome component */}
        {/* <input type="text" value={name} onChange={handleInputChange} placeholder='Enter your name' /> */}
        {/* <button onClick={() => setName('Tunde')}>Change Name</button> */}
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={name}
            onChange={handleInputChange}
            placeholder="Enter your name"
          />
          <button type="submit">Submit</button>
        </form>
        {submittedName && <p>Thank you, {submittedName}!</p>}  {/* Display a thank you message */}

      </header>
    </div>
  );
}

export default App;
