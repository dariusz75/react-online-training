import React from 'react';


class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      counter: 0
    };          
  }
 
  render() {
    return (
      <div>
        <p>counter: {this.state.counter}</p>
        <button onClick={() => this.setState({ counter: this.state.counter + 1 })}> increment </button>
      </div>
    );
  }
}

export default HomeComponent;