import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/Greeting';
import Greetingf from './components/pure/Greetingf';

function App() {
  return (
    <div className="App">
      <>
        <img src={logo} className="App-logo" alt="logo" />
       
          <Greeting name="Arnaldo"/>
      <hr />
          <Greetingf name="Mariangela"/>
      </>
    </div>
  );
}

export default App;
