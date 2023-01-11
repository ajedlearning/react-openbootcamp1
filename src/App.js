import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/taskList';
// import Greeting from './components/pure/Greeting';
// import Greetingf from './components/pure/Greetingf';

function App() {
  return (
    <div className="App">
      <>
        <img src={logo} className="App-logo" alt="logo" />
       
          {/* <Greeting name="Arnaldo"/> */}
      <hr />
          {/* <Greetingf name="Mariangela"/> */}

      <hr />
          <TaskListComponent></TaskListComponent>
      </>
    </div>
  );
}

export default App;
