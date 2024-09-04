import React, { useState } from 'react';
import './App.css';
import Welcome from './Welcome';


function App() {
  // Declare a new state variable called "name"
  const [name, setName] = useState('Adam');
  const [submittedName, setSubmittedName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  const users = [
    {id: 1, name: 'Adam'},
    {id: 2, name: 'Sodiq'},
    {id: 3, name: 'Ilyas'},
    {id: 4, name: 'Abdulrahman'},
    {id: 5, name: 'Hassan'},
  ]

  // Handle user input
  const handleInputChange = (event) => {
    setName(event.target.value);
  }

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmittedName(name);
    setIsLoggedIn(true);
  }

  const handleLogout = () => {
    setSubmittedName('');  // Clear submitted name
    setIsLoggedIn(false);  // Set user as logged out
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My First React App!</h1>
        {isLoggedIn ? (
          <>
            <Welcome name={submittedName} />
            <button onClick={handleLogout}>Logout</button>
            <p>Thank you, {submittedName}!</p>
            <h2>User List:</h2>
            <ul>
              {users.map(user => (
                <li key={user.id}>{user.name}</li>
              ))}
            </ul>
          </>
        ) : (
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={handleInputChange}
              placeholder="Enter your name"
            />
            <button type="submit">Login</button>
          </form>
        )}
      </header>
    </div>
  );
}

export default App;
