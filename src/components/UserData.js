import React from 'react';
 
const UserData = (props) => {
  return (
    <div>
      <h4>{props.name}</h4>
      <p><strong>age:</strong> {props.age}</p>
    </div>
  );
}

export default UserData;