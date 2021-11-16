import * as React from 'react';
import { getProject } from '../data';
import { useNavigate } from 'react-router-dom';
import { userService } from '../services/user.service';

class ProjectFormClass extends React.Component{
    constructor(props) {
        super(props);
        const project = getProject(parseInt(props.id));
        this.state = {
            id: project ? project.id: '',
            name: project ? project.name : '', 
            project_description: project ? project.project_description : '', 
            priority: project ? project.priority : 'Low'
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
    
    handleSubmit(event) {
       
        //check when priority null
        //alert('The Project was saved!');
        //event.preventDefault();
        event.preventDefault();
        // fetch('http://localhost:8080/api/project/', {
        //     method: 'POST',
        //     headers: {
        //     'Accept': 'application/json',
        //     'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //     name: this.state.name,
        //     project_description: this.state.project_description,
        //     priority: this.state.priority
        //     })
        // })
        // .then(res => res.json())
        // .then(data => console.log(data))
        // .catch(err => console.log(err));

        const options = {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            name: this.state.name,
            project_description: this.state.project_description,
            priority: this.state.priority
            })
        }

        userService.createProject(options).then(res => console.log(res));

        this.props.navigate('/projects');   
    }
    render(){
        return (
            <>
                <div>
                    <div className="mt-4 sm:mt-0">
                        <form onSubmit={this.handleSubmit}>
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <span className="ml-6 font-bold">Create new project</span>
                                <div className="px-4 py-5 bg-white sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-4">
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                            Project name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={this.state.name}
                                            onChange={this.handleChange}
                                            id="first-name"
                                            required
                                            autoComplete="given-name"
                                            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                        />
                                    </div>                            

                                    <div className="col-span-6 sm:col-span-4">
                                        <label htmlFor="project_description" className="block text-sm font-medium text-gray-700">
                                        About
                                        </label>
                                        <div className="mt-1">
                                        <textarea
                                            id="project_description"
                                            name="project_description"
                                            value={this.state.project_description}
                                            onChange={this.handleChange}
                                            rows={3}
                                            required
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                            defaultValue={''}
                                        />
                                        </div>
                                        <p className="mt-2 text-sm text-gray-500">
                                        Brief description of your project.
                                        </p>
                                    </div>


                                    <div className="col-span-6 sm:col-span-3">
                                    <label htmlFor="role" className="block text-sm font-medium text-gray-700">
                                        Priority
                                    </label>
                                    <select
                                        id="role"
                                        name="priority"
                                        value={this.state.priority}
                                        onChange={this.handleChange}
                                        autoComplete="role-name"
                                        required
                                        className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                    >
                                        <option>Low</option>
                                        <option>Medium</option>
                                        <option>High</option>
                                    </select>
                                    </div>

                            
                                </div>
                                </div>
                                <div className="text-right px-4 py-3 sm:px-6">
                                    <button
                                        type=""
                                        className="mr-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                        Cancel
                                    </button>
                                    <input type="submit" value="Save" className="inline-flex pr-3justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </>
        );}
}

export default function ProjectForm(props) {
    let navigate = useNavigate();
    return <ProjectFormClass {...props} navigate={navigate} />
}