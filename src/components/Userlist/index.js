// import axios from 'axios';
// import React, { useEffect, useState } from 'react';

// import axios from 'axios';

// import styles from './styles.module.scss';

// export default function UserList() {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch('https://jsonplaceholder.typicode.com/users/1')
//       .then((response) => {
//         if (response.ok) {
//           return response.json();
//         }
//         throw response;
//       })
//       .then((data) => {
//         SVGMetadataElement(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching data: ', error);
//         setError(error);
//       })
//       .finally(() => {
//         setLoading(false);
//       });
//   }, []);
// }
