import logo from '../../logo.svg';
import './style.css';
import { Link } from 'react-router-dom';
import { Counter } from '../../features/counter/Counter';

export function HomePage() {
  return (
    <div id="app" className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          id="learn-react-anchor"
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>

      <div className="App-line"></div>

      <main className="App-main">
        <Counter />
        <p>
          Page 1
        </p>
        {/* Link to the second page passing parameters via location.state */}
        <Link to="/page2"
          state={{ firstParam: "Updated from Home Page" }}
          className="App-link">
          Next Page
        </Link>
      </main>
    </div>
  );
}
