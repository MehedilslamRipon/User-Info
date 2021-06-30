// dependencies
import React from 'react';
import './User.css';
import { useHistory } from 'react-router-dom';

const User = (props) => {
   const { id, name, address, company } = props.users;
   const history = useHistory();

   const handleClick = (userId) => {
      history.push(`/user-details/${userId}`);
   };

   return (
      <div className="user-container">
         <h3> Name: {name} </h3>

         <p>
            <b>Address:</b> {address.city}
         </p>
         <p>
            <b>Company:</b> {company.name}
         </p>

         {/* <Link to={`/user-details/${id}`}>View Details </Link> */}

         <button
            onClick={() => {
               handleClick(id);
            }}
            className="btn"
         >
            View Details
         </button>
      </div>
   );
};

export default User;
