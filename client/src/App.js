import './App.css';
import { BrowserRouter as Router } from "react-router-dom"
import Body from './components/body/Body';
import Header from './components/header/Header';

function App() {
  return (
    <Router>
      <Header />
      <div className="App">
        <Body />
      </div>
    </Router>
  );
}

export default App;
