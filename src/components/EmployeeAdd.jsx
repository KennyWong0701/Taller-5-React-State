import React, {Component} from "react";

class EmployeeAdd extends Component{
    initialState = {
        id: '',
        name: '',
        job: '',
        enumber: '', 
        birthday: '', 
        department: '', 
        active: false, 
        gender: 'male', 
        notes: '',
    };

    state = this.initialState;

    handleChange = e => {
        const { name, value } = e.target;
        this.setState({
            [name]: value,
        });
    };

    handleActiveChange = e => {
        const { checked } = e.target;
        this.setState({
            active: checked,
        });
    };


    handleSubmit = e => {
        e.preventDefault();
        const {hire} = this.props;
        hire(this.state);
        this.setState(this.initialState)
    };

    render () {
        const {id, name, job, enumber, birthday, department, active, gender, notes} = this.state;

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


                <label htmlFor='active'>State</label>
                <div>
                    <label htmlFor='active'>Active</label>
                    <input 
                        type="checkbox" 
                        id="active" 
                        name="active" 
                        checked={active}
                        onChange={this.handleActiveChange}
                    ></input>
                </div>
                <br />

                <label htmlFor='gender'>Select gender</label>
                <br />
                <label htmlFor='gender'>Male</label>
                <input type="radio" name="gender" id="male" value="male" checked={gender === 'male'} onChange={this.handleChange}/>
                <label htmlFor='gender'>Female</label>
                <input type="radio" name="gender" id="female" value="female" checked={gender === 'female'} onChange={this.handleChange}/>
                <label htmlFor='gender'>Other</label>
                <input type="radio" name="gender" id="other" value="other" checked={gender === 'other'} onChange={this.handleChange}/>
                <br />
                <br />

                <label for="notes">Notes</label>
                <textarea id="notes" name="notes" rows="10" cols="50" placeholder="Enter notes here" value={notes} onChange={this.handleChange}></textarea>

                <input type="submit" value="Hire" />
            </form>
        );
    }
};

export default EmployeeAdd;