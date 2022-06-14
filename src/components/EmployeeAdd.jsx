import React, {Component} from "react";

class EmployeeAdd extends Component{
    initialState = {
        id: '',
        name: '',
        job: '',
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
        const {id, name, job} = this.state;

        return(
            <form onSubmit={this.handleSubmit}>
                <label htmlFor='id'>Id</label>
                <input type="text" name="id" id="id" value={id} placeholder="Enter Id here" onChange={this.handleChange} />
                <label htmlFor='name'>Name</label>
                <input type="text" name="name" id="name" value={name} placeholder="Enter name here" onChange={this.handleChange} />
                <label htmlFor='job'>Job</label>
                <input type="text" name="job" id="job" value={job} placeholder="Enter job here" onChange={this.handleChange} />
                <input type="submit" value="Hire" />
            </form>
        );
    }
};

export default EmployeeAdd;