import './App.css';
import './media.css';
import ButtonIncrements from './ButtonIncrements';

function App() {

  return (
    <div className="contianer">
      <header className="App-header">
        <div className="App-header__text">
          increment / decrement
        </div>
        <div className="btn-block">
          <ButtonIncrements />
        </div>
      </header>
    </div>
  );
}

export default App;
