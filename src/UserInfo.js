import React from 'react';

function UserInfo(props) {
    return (
      <div>
        <h3>User Information</h3>
        <p>Name: {props.name}</p>
        <p>Email: {props.email}</p>
        <p>Age: {props.age}</p>
      </div>
    );
  }

  export default UserInfo;
