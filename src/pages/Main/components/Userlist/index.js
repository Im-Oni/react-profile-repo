/* eslint-disable react/prop-types */
import React from 'react';
import styles from './styles.module.scss';

export default function UserList(props) {
  const { data } = props;
  console.log(data);

  return (
    <div className={styles.section}>
      User List
      {data?.data?.map((item) => (
        <div className={styles['item-container']} key={item?.id}>
          <div className={styles.title}>{item?.name}</div>
          <div className={styles.subtitle}>{item?.email}</div>
        </div>
      ))}
    </div>
  );
}
