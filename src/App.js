/* eslint-disable react/button-has-type */
import React from 'react';
import './styles/App.css';
import Header from './components/Header';
import Main from './pages/Main';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
    </div>
  );
}

export default App;
