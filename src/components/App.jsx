import React, { Component } from 'react';
import EmployeeList from './EmployeeList';
import Table from './EmployeeList'

class App extends Component{
    render(){
      return(
        <div className="Container">
            <h1>Hello, React!</h1>
            <EmployeeList/>
        </div>
      );
    }
  }

  export default App;
