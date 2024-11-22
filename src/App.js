import React from 'react'
import Grid from './Grid';
import './App.css';

const App = () => {
  const generation = 0;
  const speed = 0;
  return (
    <div style={{ height: '100vh', maxHeight: '100vh'}}>
      <Grid />
      <p>Generation: {generation}</p>
      <p>Speed: {speed}</p>
    </div>
  )
}

export default App;
