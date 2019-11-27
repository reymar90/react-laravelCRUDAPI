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

	componentDidMount(){
       
		axios.get('http://127.0.0.1:8000/api/user')
		 .then(response => {
			console.log(this.state.users);

			 this.setState({
				users:response.data.data
			 });
			
		 })
		 .catch(error => {
			 console.log(error);
		 });
	 }


	 handleSubmit = user => {
        this.setState({users: [...this.state.users, user]});
    }
	render(){

	return(
	<div>
	<table>
		<thead>
			<tr>
				<th>First Name</th>
				<th>Last Name</th>
				<th>Age</th>
				<th>Email</th>
				<th>Contact Number</th>
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
				<td>{value.contact_number}</td>
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
	<AddUserForm  handleSubmit={this.handleSubmit}/>
</div>
		


		)
	}
	
}

export default App