import logo from './logo.svg';
import './App.css';
import {useState, useEffect} from 'react';

function App() {
  const [radius, setRadius] = useState(100);
  const updateRadius = (e) => {
    setRadius(String(e.target.value) + "px");
  };


  return (
    <div className="App">
      <h1>Circle Slider Demo</h1>
      <div className="container">
          <div className="Circle" style={{height: radius, width:radius}}>
          </div>
      </div>
      <div className="input-container">
        <input type="range" min="100" max="600" onChange={updateRadius}>
        </input>
      </div>
    </div>
  );
}

export default App;
