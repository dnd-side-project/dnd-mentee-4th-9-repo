import styled from 'styled-components';
import logo from './static/logo.svg';

const App = () => {
  return (
    <div className="App">
      <AppHeader>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </AppHeader>
    </div>
  );
};

const AppHeader = styled.header`
  width: 20%;
  background-color: gray;
`;

export default App;
