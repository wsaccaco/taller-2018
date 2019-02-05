import React, { Component } from 'react';
import Table from './Components/Table/Table';
import './App.css';

class App extends Component {
  render() {
    let data = [{
      name : 'Waldo',
      lastname: 'Saccaco',
      age: 29,
    },{
      name : 'Robert',
      lastname: 'Gonzales',
      age: 20
    }];

    return (
      <div className="App">
        <Table data={data} />
      </div>
    );
  }
}

export default App;
