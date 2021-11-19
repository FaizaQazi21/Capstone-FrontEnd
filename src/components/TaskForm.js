import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { userService } from '../services/user.service';

class TaskFormClass extends React.Component{
    constructor(props) {
        super(props);
        
        console.log(props.project_id)

        this.state = {
            id: '',
            name: '', 
            task_description: '', 
            project_id: props.project_id,
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
       
        event.preventDefault();

        const options = {
            method: 'POST',
            headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
            },
            body: JSON.stringify({
            name: this.state.name,
            user_id: 1,
            start_time: null,
            total_hours: 0,
            status_id: 1,
            project_id: this.state.project_id,
            note: '',
            task_description: this.state.task_description,
            })
        }

        userService.createTask(options).then(res => console.log(res));

        this.props.navigate('/projects');   
    }
    render(){
        return (
            <>
                <div>
                    <div className="mt-4 sm:mt-0">
                        <form onSubmit={this.handleSubmit}>
                            <div className="shadow overflow-hidden sm:rounded-md">
                                <span className="ml-6 font-bold">Create new Task</span>
                                <div className="px-4 py-5 bg-white sm:p-6">
                                <div className="grid grid-cols-6 gap-6">
                                    <div className="col-span-6 sm:col-span-4">
                                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                            Task name
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
                                        <label htmlFor="task_description" className="block text-sm font-medium text-gray-700">
                                        Task Description
                                        </label>
                                        <div className="mt-1">
                                        <textarea
                                            id="task_description"
                                            name="task_description"
                                            value={this.state.task_description}
                                            onChange={this.handleChange}
                                            rows={3}
                                            required
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                            defaultValue={''}
                                        />
                                        </div>
                                        <p className="mt-2 text-sm text-gray-500">
                                        Brief description of your task.
                                        </p>
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

export default function TaskForm(props) {
    let navigate = useNavigate();
    return <TaskFormClass {...props} navigate={navigate} />
}