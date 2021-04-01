import React from 'react';
import './App.css';
import Container from './components/Container';
import Image from './images/portfolio-pic.jpg';

function App() {
  return (
    <div className="App">
      <img src={Image} height='600' />
      <Container></Container>
    </div>
  );
}

export default App;
