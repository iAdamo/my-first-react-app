import './App.css';
import Welcome from './Welcome';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Welcome to My First React App!</h1>
        <p>This is my first React component.</p>
        <Welcome name="Adam" /> {/* Add a Welcome component */}
      </header>
    </div>
  );
}

export default App;
