import logo from './logo.svg';
import './App.css';
import { MyFirstComponent, IncidentVideoResult } from './VideoListComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World
        </p>
        <p>
          <MyFirstComponent name = "Hao Jie"></MyFirstComponent>
        </p>
        <p>
          <IncidentVideoResult device_id = "CctvCam1"></IncidentVideoResult>

        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
