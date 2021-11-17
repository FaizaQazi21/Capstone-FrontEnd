import * as React from 'react';

import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { userService } from '../services/user.service';

class UserFormClass extends React.Component{
    constructor(props) {
        super(props);
        
        this.state = {
            id:  parseInt(props.id),
            name:  '', 
            role_id: '',
            email: '', 
            password: '',
            user: [],
            roles : []
            
        };
    
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event) {
        const target = event.target;
        const name = target.name;
        const value = target.value;

        this.setState({
            [name]: value, 
        });

    }
    
    componentDidMount() {
        // Simple GET request using fetch
        console.log("User ID :"+this.state.id)
        if(this.state.id !==undefined){
            userService.getUser(this.state.id).then(data => this.setState({ user:data }));  
        
        }
        userService.getAllRoles().then(data => this.setState({ roles:data }));
        console.log("check role"+this.state.user.name)
    }
    
    handleSubmit(event) {
        //check when role null
        //alert('The User was saved!');
        //event.preventDefault();
        //this.props.navigate('/users');
        if(this.state.id ===undefined){
            event.preventDefault();
            const options = {
                 method: 'POST',
                 headers: {
                 'Accept': 'application/json',
                 'Content-Type': 'application/json'
                 },
                 body: JSON.stringify({
                     name: this.state.name,
                     role: this.state.role,
                     email: this.state.email,
                     password: this.state.password
                 })
        }
        
        userService.createUser(options).then(res => console.log(res));
    }else{
      
        event.preventDefault();
        const options = {
             method: 'PUT',
             headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*', 
                'Access-Control-Allow-Credentials' : true,
                'mode': 'no-cors'
             },
             body: JSON.stringify({
                 id: this.state.id,
                 name: this.state.name,
                 role: this.state.role,
                 email: this.state.email,
                 password: this.state.password
             })
    }
    
    userService.updateUser(options,this.state.id).then(res => res.JSON());  
    }
        
        this.props.navigate('/users');   
    }

    render() {
    
    return (
        <>
            <div>
                <div className="mt-4 sm:mt-0">
                    <form onSubmit={this.handleSubmit}>
                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-white sm:p-6">
                            <div className="grid grid-cols-6 gap-6">
                                <div className="col-span-6 sm:col-span-4">
                                <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    id="first-name"
                                    defaultValue={this.state.user.name}
                                    onChange={this.handleChange}
                                    autoComplete="given-name"
                                    required
                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                />
                                </div>

                          
                                <div className="col-span-6 sm:col-span-4">
                                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                        Email address
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email-address"
                                        defaultValue={this.state.user.email}
                                        onChange={this.handleChange}
                                        autoComplete="email"
                                        required
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                </div>
                                
                                <div className="col-span-6 sm:col-span-4">
                                    <label htmlFor="email-address" className="block text-sm font-medium text-gray-700">
                                        Password
                                    </label>
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        defaultValue={this.state.user.password}
                                        onChange={this.handleChange}
                                        autoComplete="current-password"
                                        required
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                    />
                                </div>

                                <div className="col-span-6 sm:col-span-3">
                                <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                                    Role
                                </label>
                                <select
                                    id="role_id"
                                    name="role_id"
                                    autoComplete="role-name"
                                    defaultValue={this.state.user.role_id}
                                    onChange={this.handleChange}
                                    // onChange={(selectedValues) => {
                                    //     this.setState((preValue) => {
                                    //       return {
                                    //         ...preValue,
                                    //         subjects: selectedValues,
                                    //       };
                                    //     });
                                    //   }}
                                    required
                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                >
                                    {this.state.roles.map(function(d, idx){
                                          return(
                                          <option key={idx} value = {d.id} >{d.role}</option>
                                      )
                                       
                                    })}
                                </select>
                                </div>

                        
                            </div>
                            </div>
                            <div className="text-right px-4 py-3 sm:px-6">
                                <Link to="/users" className="mr-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                        <button className="font-bold">
                                        Cancel
                                        </button>
                                </Link>
                                <button
                                    type="submit"
                                    value="Submit"
                                    className="inline-flex pr-3justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Save
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>


     
        </>
    );}
}

export default function UserForm(props) {
    let navigate = useNavigate();
    return <UserFormClass {...props} navigate={navigate} />
}