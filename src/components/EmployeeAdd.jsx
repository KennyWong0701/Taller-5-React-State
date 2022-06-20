import React, {Component} from "react";

class EmployeeAdd extends Component{
    initialState = {
        id: '',
        name: '',
        job: '',
        enumber: '', 
        birthday: '', 
        department: '', 
        jobactive: '', 
        gender: '', 
        notes: '',
    };

    state = this.initialState;

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    handleSubmit = e => {
        e.preventDefault();
        const {hire} = this.props;
        hire(this.state);
        this.setState(this.initialState)
    };

    render () {
        const {id, name, job, enumber, birthday, department, jobactive, gender, notes} = this.state;

        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='id'>Id</label>
                <input type="text" name="id" id="id" value={id} placeholder="Enter Id here" onChange={this.handleChange} />
                <label htmlFor='name'>Name</label>
                <input type="text" name="name" id="name" value={name} placeholder="Enter name here" onChange={this.handleChange} />
                <label htmlFor='job'>Job</label>
                <input type="text" name="job" id="job" value={job} placeholder="Enter job here" onChange={this.handleChange} />

                <label htmlFor='enumber'>Employee Number</label>
                <input type="number" name="enumber" id="enumber" value={enumber} placeholder="Enter Employee Number here" onChange={this.handleChange} />

                <label htmlFor='birthday'>Birthday</label>
                <input type="date" name="birthday" id="birthday" value={birthday} placeholder="Enter birthday here" onChange={this.handleChange} />

                <label htmlFor='department'>Department</label>
                <select name="department" id="department" value={department}  onChange={this.handleChange}>
                    <option value="Selectdepar">Select department</option>
                    <option value="Marketing">Marketing</option>
                    <option value="Engineering">Engineering</option>
                    <option value="RRHH">RRHH</option>
                </select>


                <label htmlFor='jobactive'>State</label>
                <label htmlFor='gender'>Active</label>
                <input type="checkbox" id="active" name="active" value={jobactive}  onChange={this.handleChange}></input>
                <label htmlFor='gender'>Inactive</label>
                <input type="checkbox" id="nactive" name="nactive" value={jobactive}  onChange={this.handleChange}></input>

                
                <label htmlFor='gender'>Gender</label>
                <label htmlFor='gender'>Male</label>
                <input type="radio" name="Gender" id="Male" value={gender} onChange={this.handleChange}/>
                <label htmlFor='gender'>Female</label>
                <input type="radio" name="Gender" id="Female" value={gender} onChange={this.handleChange}/>
                <label htmlFor='gender'>Other</label>
                <input type="radio" name="Gender" id="Other" value={gender} onChange={this.handleChange}/>

                
                <label for="notes">Notes</label>
                <textarea id="notes" name="notes" rows="10" cols="50" placeholder="Enter notes here" value={notes} onChange={this.handleChange}></textarea>

                <input type="submit" value="Hire" />
            </form>
        );
    }
};

export default EmployeeAdd;