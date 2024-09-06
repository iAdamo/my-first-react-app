import React, { useState, useEffect } from 'react';
import './App.css';
import Welcome from './Welcome';
import UserInfo from './UserInfo';


function App() {
  // Declare a new state variable called "name"
  const [name, setName] = useState('Adam');
  const [submittedName, setSubmittedName] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // Add loading state
  const [error, setError] = useState(null); // Add error state

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

  const user = {
    name: submittedName,
    email: 'user@example.com',
    age: 30,
  };

  // fetch data
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Network response was not ok');
          }
        const data = await response.json();
        setUsers(data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []); // Run once when the component mounts

  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My First React App!</h1>
        {isLoggedIn ? (
          <>
            <Welcome name={submittedName} />
            <UserInfo name={user.name} email={user.email} age={user.age} />
            <button onClick={handleLogout}>Logout</button>
            <p>Thank you, {submittedName}!</p>
            <h2>User List:</h2>
            {loading ? (
              <p>Loading users...</p>
            ) : error ? (
              <p>Error: {error}</p>
            ) : (
              <ul>
                {users.map(user => (
                  <li key={user.id}>
                    {user.name} - {user.email}
                  </li>
                ))}
              </ul>
            )}
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
