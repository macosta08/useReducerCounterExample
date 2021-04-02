import './App.css';
import { Counter } from './components/useReducerCountExample/Counter';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="heading">Count Example with useReducer</h1>
        <Counter />
      </header>
    </div>
  );
}

export default App;
