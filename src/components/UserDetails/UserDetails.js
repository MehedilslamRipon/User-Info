// dependencies
import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const UserDetails = () => {
   const { userId } = useParams();
   const [user, setUser] = useState({});

   useEffect(() => {
      const url = `https://jsonplaceholder.typicode.com/users/${userId}`;
      fetch(url)
         .then((response) => response.json())
         .then((data) => setUser(data));
   }, [userId]);

   const { id, name, username, email, phone, website } = user;

   console.log(user);

   return (
      <div className="user-container">
         <h2> User Details: </h2>
         <p>
            <b> User ID: </b> {id}
         </p>
         <h3>
            <b> Name: </b> {name}
         </h3>
         <p>
            <b>Username:</b> {username}
         </p>
         <p>
            <b>Email:</b> {email}
         </p>
         <p>
            <b>Phone:</b> {phone}
         </p>
         <p>
            <b>Website:</b> {website}
         </p>
         <p>
            <b>Address:</b> {user?.address?.city}
         </p>
         <p>
            <b>ZipCode:</b> {user?.address?.zipcode}
         </p>
         <p>
            <b>Company:</b> {user?.company?.name}
         </p>

         <button style={{ marginTop: '20px' }} className="btn">
            <Link
               style={{
                  textDecoration: 'none',
                  color: '#fcebeb',
               }}
               to="/"
            >
               Back To Home
            </Link>
         </button>
      </div>
   );
};

export default UserDetails;
