/* eslint-disable react/button-has-type */
import React from 'react';
import './styles/App.css';
import axios from 'axios';
import Header from './components/Header';
// import UserList from './components/Userlist';

async function fetchUsers() {
  const response = await axios.get('https://jsonplaceholder.typicode.com/users');
  // eslint-disable-next-line no-console
  console.log(response.data);
}
fetchUsers();

function App() {
  return (
    <div className="App">
      <Header />
      <button onClick={fetchUsers}>get users</button>
    </div>
  );
}

export default App;
