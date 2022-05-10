import React, { useState, useEffect } from 'react';
import axios from 'axios';
import UserList from './components/Userlist';
import UserProfile from './components/UserProfile';
import styles from './styles.module.scss';

function Main() {
  const [data, setData] = useState(null);

  async function fetchUsers() {
    const response = await axios.get('https://jsonplaceholder.typicode.com/users');
    setData(response);
  }
  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <div className={styles.section}>
      <div className={styles.col1}>
        <UserList data={data} />
      </div>
      <div className={styles.col2}>
        <UserProfile />
      </div>
    </div>
  );
}

export default Main;
