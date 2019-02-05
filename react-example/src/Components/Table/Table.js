import React, { Component } from 'react';
import './Table.css';

export default class Table extends Component {

  constructor(props) {
    super(props);
  }

  componentDidMount(){
    console.log('componentDidMount')
  }

  componentWillUnmount(){
    console.log('componentWillUnmount')
  }

  Preview({data}){
    return data.map(({name, lastname, age}) => {
      return (
        <tr>
          <td>{name}</td>
          <td>{lastname}</td>
          <td>{age}</td>
        </tr>
      )
    })
  }

  render() {
    let {Preview} = this;
    let {data} = this.props;
    return (
        <table className="component-table">
          <thead>
          <tr>
            <th>Name</th>
            <th>LastName</th>
            <th>Age</th>
          </tr>
          </thead>
          <tbody>
            <Preview data={data} />
          </tbody>
        </table>
    );
  }
}
