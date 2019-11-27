import React, { useState, Component } from 'react'
import axios from 'axios';

class AddUserForm extends Component {
constructor(props) {
	super(props);
	this.state = {
        users: []
    }
        // this.state = this.initialState;
        this.handleChange = this.handleChange.bind(this)
        this.onFormSubmit = this.onFormSubmit.bind(this)

	}
	handleChange = event => {
        let name = event.target.name
        let value =  event.target.value
        let obj = this.state.users;
        obj[name] = value;
        this.setState({ users:obj});

        // const { name, value } = event.target;
        // this.setState({
        //     [name] : value
        // });
        // console.log(this.handleChange);
    }

    onFormSubmit = (event) => {
   
        event.preventDefault();
        let obj = Object.assign({}, this.state.users);
    
        axios.post('http://127.0.0.1:8000/api/user', obj)
          .then(response => {
             console.log(response.data);
            
            this.setState({
              users: response.data
           });
  
          })
  
    }

   


	render(){
		// const { first_name, last_name, age, email, contact_number, address } = this.state; 
		 return (
            <form onSubmit={this.onFormSubmit}>
                <label>Fist Name:</label>
                <input 
                    type="text" 
                    name="first_name" 
                    value={this.state.users.first_name} 
                    onChange={this.handleChange} />
                <label>Last Name</label>
                <input 
                    type="text" 
                    name="last_name" 
                    value={this.state.users.last_name} 
                    onChange={this.handleChange} />
                    <label>Age</label>
                <input 
                    type="text" 
                    name="age" 
                    value={this.state.users.age} 
                    onChange={this.handleChange} />
                    <label>Email</label>
                <input 
                    type="text" 
                    name="email" 
                    value={this.state.users.email} 
                    onChange={this.handleChange} />
                    <label>Contact Number</label>
                <input 
                    type="text" 
                    name="contact_number" 
                    value={this.state.users.contact_number} 
                    onChange={this.handleChange} />
                    <label>Address</label>
                <input 
                    type="text" 
                    name="address" 
                    value={this.state.users.address} 
                    onChange={this.handleChange} />
                <button value="submit" type="submit">
                    Submit
                </button>
            </form>
        );
	}

	

	
}

export default AddUserForm