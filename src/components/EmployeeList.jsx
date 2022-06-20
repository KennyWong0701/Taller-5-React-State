import React, { Component } from 'react'
import Employee from './Employee';
import EmployeeAdd from './EmployeeAdd';

class EmployeeList extends Component{
    state = {
        employees : []
    };

    fireEmployee = (id) => {
        const { employees } = this.state;
        this.setState({
            employees : employees.filter((employee) => {
                return employee.id !== id;
            })
        });
    };

    hireEmployee = employee => {
        this.setState({
            employees: [...this.state.employees, employee],
        });
    };

    render () {

        return(
            <>
                <table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Number</th>
                            <th>Birthday</th>
                            <th>Department</th>
                            <th>Active</th>
                            <th>Gender</th>
                            <th>Notes</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.employees.map(employee => (
                            <Employee 
                                key={employee.id} 
                                id={employee.id} 
                                name={employee.name} 
                                job={employee.job} 
                                enumber={employee.enumber}
                                birthday={employee.birthday}
                                department={employee.department}
                                jobactive={employee.jobactive}
                                gender={employee.gender}
                                notes={employee.notes}
                                fire={this.fireEmployee}/>
                        ))}
                    </tbody>
                </table>
                <hr />
                <EmployeeAdd
                    hire={this.hireEmployee}
                />
            </>
        );
    }
}

export default EmployeeList;