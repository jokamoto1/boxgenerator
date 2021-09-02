import './App.css';
import Box from './components/Box';
import React, {useState} from 'react';
import './components/Box.css'

function App() {
  const[ currentColor, setCurrentColor] = useState([]) 
  const addColor = (color) => {
    const newArr = [...currentColor, color]
    setCurrentColor(newArr)
  }

  return (
    <div className="App">
        <Box setColor = {addColor} colors = {currentColor} />
    </div>
  );
}

export default App;
