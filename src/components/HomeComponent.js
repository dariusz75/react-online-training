import React from 'react';


class HomeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      name: 'Janusz', 
      age: 57,
      isActive: true
    };          
  }
 
  render() {

    //const containerClass = this.state.isActive ? 'active' : 'inactive';
    // INLINE FUNCTION SOLUTION

    let containerClass; 

    if (this.state.isActive === true) {
      containerClass = 'active';
    } else if (this.state.isActive === false) {
       containerClass = 'inactive';
    };

    return (
      <div>
        <h1>Imię: <span className={containerClass}>{this.state.name}</span></h1>
        <p>Wiek: {this.state.age}</p>
        <button onClick={() => this.setState({ isActive: false })}>Deactive</button>
        <button onClick={() => this.setState({ isActive: true })}>Active</button>
      </div>
    );
  }
}

export default HomeComponent;