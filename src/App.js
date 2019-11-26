import React, { useState, Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddUserForm from './forms/AddUserForm';
import axios from 'axios';


class App extends Component {
	constructor (props){
		super();
		this.state = {
			users: []
			
		}
	
	}

	// handleSubmit = users => {
    //     this.setState({characters: [...this.state.characters, character]});
    // }

	componentDidMount() {
       
		axios.get('http://127.0.0.1:8000/api/user')
		 .then(response => {
			console.log(this.state.users);

			 this.setState({
				users:response.data.data
			 });
			 // console.log(response.data.data.first_name, contact_number, address);
			 
		 })
		 .catch(error => {
			 console.log(error);
		 });
		 
	 }
	
	
	render(){

	return(
	<div>
	<table>
		<thead>
			<tr>
				<th>First Name</th>
				<th>last Name</th>
				<th>Age</th>
				<th>Email</th>
				<th>Address</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody>
		{
		this.state.users.map((value, index) =>
			<tr key={index}>
				<td>{value.first_name}</td>
				<td>{value.last_name}</td>
				<td>{value.age}</td>
				<td>{value.email}</td>
				<td>{value.address}</td>
				<td>
				<button
					onClick={() => {
					this.props.editRow(value)
					}}
					className="button muted-button">
					Edit
				</button>
				<button
					onClick={() => this.props.deleteUser(value.id)}
					className="button muted-button">
					Delete
				</button>
            	</td>
			</tr>
		)}
		</tbody>

		
	</table>
	<AddUserForm/>
</div>
		


		)
	}
	
}



export default App