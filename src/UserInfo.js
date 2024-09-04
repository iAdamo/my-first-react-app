import React from 'react';
import PropTypes from 'prop-types'
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

UserInfo.defaultProps = {
  name: 'Guest',
  email: 'guest@example.com',
  age: 'N/A',
};

UserInfo.propTypes = {
  name: PropTypes.string,
  email: PropTypes.string,
  age: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

  export default UserInfo;
