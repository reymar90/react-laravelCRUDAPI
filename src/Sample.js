import React, { useState, Fragment } from 'react'
// import AddUserForm from './forms/AddUserForm';
// import EditUserForm from './forms/EditUserForm';
// import UserTable from './tables/UserTable';
// import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import axios from 'axios';

class Sample extends React.Component{

constructor(props) {
    super(props);
    this.state = {
        first_name: '',
        last_name: '',
        age: '',
        email: '',
        contact_number: '',
        address: ''

    }
    }

    componentDidMount() {
       
       axios.get('http://127.0.0.1:8000/api/user')
        .then(response => {
            this.setState({first_name: response.data.data.first_name, last_name: response.data.data.last_name,
               age: response.data.data.age, email: response.data.data.email, contact_number: response.data.data.contact_number, address: response.data.data.address });
            // console.log(response.data.data.first_name, contact_number, address);
            
        })
        .catch(error => {
            console.log(error);
        });
        
    }
 
    render() {
        const {first_name, last_name, age, email, contact_number, address  } = this.state;
        return (
          <div>
            <h1> First Name: {first_name}</h1>
            <h1>Last Name: {last_name}</h1>
            <h1>Age: {age}</h1>
            <h1>email: {email}</h1>
            <h1>contact_number: {contact_number}</h1>
            <h1>address: {address}</h1>
          </div>
        );
      }
}

export default Sample

