import logo from './logo.svg';
import './App.css';
import { IncidentVideoResult } from './VideoListComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
      <div><IncidentVideoResult device_id="CctvCam1"></IncidentVideoResult></div>

    </div>
  );
}

export default App;
