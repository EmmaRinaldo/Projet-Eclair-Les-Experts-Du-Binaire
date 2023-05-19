import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Main from './components/Main';
import EmailProgramming from "./components/EmailProgramming";

function App() {
  return (
    <section className="columns is-fullheight">

      <Sidebar />
      <Main />
     

    </section>
  );
}

export default App;
