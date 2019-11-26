import React, { useState, Component } from 'react'

class AddUserForm extends Component {
constructor(props) {
	super(props);
	this.initialState = {
		first_name: '',
		last_name: '',
	

	};
		this.state = this.initialState;
	}

	
	handleChange = event => {
        const { name, value } = event.target;

        this.setState({
            [name] : value
        });
    }

    onFormSubmit = (event) => {
        event.preventDefault();
        
        this.handleSubmit(this.state);
		this.setState(this.initialState);
		console.log(this.state.onFormSubmit);
    }


	render(){
		const { first_name, last_name } = this.state; 
		 return (
            <form onSubmit={this.onFormSubmit}>
                <label>Name</label>
                <input 
                    type="text" 
                    name="first_name" 
                    value={first_name} 
                    onChange={this.handleChange} />
                <label>Last Name</label>
                <input 
                    type="text" 
                    name="last_name" 
                    value={last_name} 
                    onChange={this.handleChange} />
                <button type="submit">
                    Submit
                </button>
            </form>
        );
	}

	

	
}

export default AddUserForm