import FunctionalComponent from './FunctionalComponent';
import ClassComponent from './ClassComponent';
import './App.css';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>
            <FunctionalComponent/>
          </p>
          <p>
          <ClassComponent/>
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
