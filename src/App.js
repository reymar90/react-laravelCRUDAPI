import React, { useState, Component, Fragment } from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import AddUserForm from './forms/AddUserForm';
import axios from 'axios';
import EditDelete from './EditDelete'

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
			 this.setState({
				users:response.data.data
			 });
		 })
		 
		 .catch(error => {
			 console.log(error);
		 });
	 }

	
			render(){
			return(
			<div>
			
			<AddUserForm  handleSubmit={this.handleSubmit}/>
			<EditDelete user ={this.state.users}/>	

		</div>
				)
			}
			
		}

export default App