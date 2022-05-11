/* eslint-disable react/prop-types */
import React from 'react';
import styles from './styles.module.scss';

export default function UserProfile(props) {
  const { data1 } = props;
  console.log(data1);
  return (
    <div className={styles.section}>
      User Profile

      <div className={styles.titleUser}>
        Name:
        {data1?.data?.name}
      </div>
      <div className={styles.subtitleUser}>
        <div>
          Email:
          {data1?.data?.email}
        </div>
        <div>
          Username:
          {data1?.data?.username}

        </div>
        <div>
          Phone:
          {data1?.data?.phone}

        </div>
        <div>
          Website:
          {data1?.data?.website}

        </div>

      </div>
    </div>
  );
}
