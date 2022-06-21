import React, { Component } from "react";

class Employee extends Component{
    render() {
        const {id, name, job, enumber, birthday, department, active, gender, notes, fire} = this.props;
        return(
            <tr>
                <td>{name}</td>
                <td>{job}</td>
                <td>{enumber}</td>
                <td>{birthday}</td>
                <td>{department}</td>
                <td>{active ? "Yes" : "No"}</td>
                <td>{gender}</td>
                <td>{notes}</td>
                <td>
                    <button onClick={() => fire(id)}>Fire</button>
                </td>
            </tr>
        )
    }
}

export default Employee;