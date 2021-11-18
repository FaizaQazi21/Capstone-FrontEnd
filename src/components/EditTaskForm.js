import * as React from 'react';
import { useNavigate } from 'react-router-dom';
import { userService } from '../services/user.service';

class EditTaskFormClass extends React.Component{
    constructor(props) {
        super(props);

        const task = userService.getTask(parseInt(props.id));

        const task_description = task.Description 
        const note = task.Notes
        const status = task.Status
        const total_hours = task.TotalHR
        const name = task.TaskName
        const id = task.taskId
        const user_id = task.userID

        this.state = {
            id: task ? id: '',
            name: task ? name : 'ooo', 
            task_description: task ? task_description : '',
            user_id: task ? user_id : '',
            start_time: task ? task.start_time : '',
            total_hours: task ? total_hours : '',
            status: 'Inprogress',
            note: task ? note : ''        
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
                                <span className="ml-6 font-bold">Edit Task</span>
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
                                        />
                                        </div>
                                        <p className="mt-2 text-sm text-gray-500">
                                        Brief description of your task.
                                        </p>
                                    </div>

                                    <div className="col-span-6 sm:col-span-4">
                                        
                                        <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                                            Status
                                        </label>
                                        <select
                                            id="status"
                                            name="status"
                                            value={this.state.status}
                                            onChange={this.handleChange}
                                            autoComplete="status-name"
                                            required
                                            className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                        >
                                            <option>Available</option>
                                            <option>Inprogress</option>
                                            <option>Completed</option>
                                            <option>Hold</option>
                                        </select>
                                        
                                        {   this.state.status !== "Available" &&
                                            <>
                                            <br/>
                                            <div className="col-span-6 sm:col-span-4">
                                                <label htmlFor="user_id" className="block text-sm font-medium text-gray-700">
                                                    User Id
                                                </label>
                                                <input
                                                    type="text"
                                                    name="user_id"
                                                    value={this.state.user_id}
                                                    onChange={this.handleChange}
                                                    id="user_id"
                                                    required
                                                    autoComplete="given-name"
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div> 
                                            <br/>
                                            <div className="col-span-6 sm:col-span-4">
                                                <label htmlFor="note" className="block text-sm font-medium text-gray-700">
                                                    User note
                                                </label>
                                                <input
                                                    type="text"
                                                    name="note"
                                                    value={this.state.note}
                                                    onChange={this.handleChange}
                                                    id="note"
                                                    required
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>
                                            <br/>
                                            <div className="col-span-6 sm:col-span-4">
                                                <label htmlFor="total_hours" className="block text-sm font-medium text-gray-700">
                                                    Total Time
                                                </label>
                                                <input
                                                    type="text"
                                                    name="total_hours"
                                                    value={this.state.total_hours}
                                                    onChange={this.handleChange}
                                                    id="total_hours"
                                                    required
                                                    className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                                />
                                            </div>  
                                            </>
                                        }
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

export default function EditTaskForm(props) {
    let navigate = useNavigate();
    return <EditTaskFormClass {...props} navigate={navigate} />
}