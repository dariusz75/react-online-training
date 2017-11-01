import React from 'react';
import UserData from './UserData';

class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      firstName: 'Janusz', 
      sureName: 'Kovalski',
      age: 57,
      fullName: function() {
        return (this.firstName + ' ' + this.sureName);
      }
    };
  }
 
  render() {
    return (
      <div>
        <UserData name={this.state.fullName()} age={this.state.age} />
      </div>
    );
  }
}

export default HomeComponent;