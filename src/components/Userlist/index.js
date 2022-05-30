/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import MySelect from '../UI/select/MySelect';
import styles from './styles.module.scss';

export default function UserList(props) {
  const { data } = props;
  const [selectedSort, setSelectedSort] = useState('');
  const [users, setUsers] = useState([]);
  //*
  useEffect(() => {
    const userListArray = Array.isArray(data?.data) ? [...data.data] : [];
    setUsers(userListArray);
  }, [data?.data]);

  const sortUsers = (sort) => {
    setSelectedSort(sort);
    setUsers(users.sort((a, b) => a[sort].localeCompare(b[sort])));
  };

  return (
    <div className={styles.section}>
      <div>
        <hr style={{ margin: '20px 10px' }} />
        <MySelect
          value={selectedSort}
          onChange={sortUsers}
          defaultValue="Cортировка"
          options={[
            { value: 'name', name: 'По имени' },
            { value: 'username', name: 'По никнейму' },
          ]}
        />
        <hr style={{ margin: '20px 10px' }} />
      </div>
      User List
      {users.map((item) => (
        <div className={styles['item-container']} key={item?.id}>
          <div className={styles.title}>
            {item?.name}
          </div>
          <div className={styles.subtitle}>
            {item?.email}
          </div>
          {/* <button onClick={addInfo} type="button"> Вывести информацию </button> */}
        </div>
      ))}
    </div>
  );
}
