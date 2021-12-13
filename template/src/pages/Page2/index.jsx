import logo from '../../logo.svg';
import './style.css';
import { Link, useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { incrementByAmount } from '../../features/counter/counterSlice';

export function PageTwo() {
  const dispatch = useDispatch();
  const location = useLocation();

  // ^ Normal convention uses the following code:
  // ^ to retrieve parameters from location.state
  //    const { firstParam } = location.state

  // ^ However the code below will allow manual url broswer entry with out breaking:
  let firstParam = "None"
  if (location.state !== null) firstParam = location.state.firstParam

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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

      <div className="App-line"></div>

      <main className="App-main">
        {/* Direct use of RTK inside this component */}

        <p>
          Page 2
        </p>

        <div className="row">
          <button
            className="button"
            onClick={() => dispatch(incrementByAmount(5))}
          >
            Add 5
          </button>
        </div>
        <p>
          Parameter: {firstParam}
        </p>

        <Link to="/" className="App-link">
          Previous Page
        </Link>
      </main>
    </div>
  );
}
