import logo from './logo.svg';
import './App.css';
import TaskListComponent from './components/container/taskList';
import Ejemplo1 from './hooks/Ejemplo1';
import Ejemplo2 from './hooks/Ejemplo2';
import { MiComponenteConContexto } from './hooks/Ejemplo3';
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
      <hr />

      <Ejemplo1></Ejemplo1>

      <hr/>
      <Ejemplo2 />

      <hr/>
      <MiComponenteConContexto></MiComponenteConContexto>
      </>
    </div>
  );
}

export default App;
