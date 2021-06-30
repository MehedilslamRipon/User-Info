// dependencies
import React, { useEffect, useState } from 'react';
import User from './../User/User';

const Home = () => {
   const [users, setUsers] = useState([]);

   useEffect(() => {
      const url = `https://jsonplaceholder.typicode.com/users`;

      fetch(url)
         .then((response) => response.json())
         .then((data) => setUsers(data));
   }, []);

   return (
      <div>
         <h2 style={{ textAlign: 'center' }}>
            Total {users.length} Users Available Right Now.
         </h2>
         {users.map((user) => (
            <User key={user.id} users={user}></User>
         ))}
      </div>
   );
};

export default Home;
