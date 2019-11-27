import axios from 'axios'
import React, { Component, useState } from 'react'

class EditDelete extends Component{

    constructor(props){
        super(props)
        this.state = {
            user:[]
        };
        
        this.onDelete = this.onDelete.bind(this);
        this.onCLickEdit = this.onCLickEdit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        
    }

    handleChange (e) {
        const value = e.target.value;
        let obj = this.state.user
        obj[e.target.name] = value;
        this.setState({
            user:obj
                //  [e.target.name] : value 
        });
        console.log(this.state.user)
    }

    onCLickEdit (event){

       let obj = Object.assign({}, this.state.user);

       let userobj = this.props.user
        let key = event.target.getAttribute('data-key');
        let id = userobj[key].id;
    
       console.log(id)

        axios.put('http://127.0.0.1:8000/api/user/'+id, obj)
        .then(response => {
            console.log(response.data);
        
            this.setState({
            user: response.data.data
        });
        })

    }

    onDelete (event) {

        let userobj = this.props.user
        let key = event.target.getAttribute('data-key');
        let id = userobj[key].id;

        console.log(id)
    
        // let obj = Object.assign({}, this.state.user);

        //    console.log(key)

            axios.delete('http://127.0.0.1:8000/api/user/'+userobj[key].id)
            .then(response => {
                console.log(response.data);
            
                this.setState({
                user: response.data.data
            });
            })

        }


    render () {
        return (
        
       
            <table>
                <thead>
                <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Age</th>
                    <th>Email</th>
                    <th>Contact Num</th>
                    <th>Address</th>
                    <th>Actions</th>
                </tr>
                </thead>
                <tbody>
                    {this.props.user.map((user, index) => 
                        <tr key={user.id}  >
                            
                            <td><input type="text" name="first_name" defaultValue={user.first_name} onChange={this.handleChange}/></td>
                            <td><input type="text" name="last_name" value={user.last_name} onChange={this.handleChange}/></td>
                            <td><input type="text" name="age" value={user.age} onChange={this.handleChange}/></td>
                            <td><input type="text" name="email" value={user.email} onChange={this.handleChange}/></td>
                            <td><input type="text" name="contact_number" value={user.contact_number} onChange={this.handleChange}/></td>
                            <td><input type="text" name="address" value={user.address} onChange={this.handleChange}/></td>
                            <td>
                                <button data-key={index} onClick={this.onCLickEdit}>Edit</button>
                                <button data-key={index} onClick={this.onDelete}>Delete</button>
                            </td>
                        </tr>   
                    )}
                    
                </tbody>
            </table>
        
        )
    }
    


}
export default EditDelete