import logo from './logo.svg';
import './App.scss';
import './views/MyComponent';
import MyComponent from './views/MyComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <MyComponent></MyComponent>
        </p>
      </header>
    </div>
  );
}

export default App;
