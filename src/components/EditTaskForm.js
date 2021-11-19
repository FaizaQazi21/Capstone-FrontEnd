import * as React from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { userService } from '../services/user.service';

class EditTaskFormClass extends React.Component{
    constructor(props) {
        super(props);

        this.state = {
            id: parseInt(props.id),
            name:'', 
            task_description:  '',
            user_id:  '',
            start_time:  '',
            total_hours:  '',
            status: '',
            notes:  '',
            project_id: '',
            users: null,
        };

        

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    componentDidMount() {
        console.log(this.props.id)
        userService.getTask(parseInt(this.props.id))
        .then(task => this.setState({
            id: task ? task.id: '',
            name: task ? task.name : '', 
            task_description: task ? task.task_description : '',
            user_id: task ? task.user_id : '',
            start_time: task ? task.start_time : '',
            total_hours: task ? task.total_hours : '',
            status: task ? task.status_id : '',
            notes: task ? task.notes : '',
            project_id: task ? task.project_id : '',
        }))

        userService.getAllUsers()
        .then(users => this.setState({ users:users }))    
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
                user_id: this.state.user_id,
                start_time: this.state.start_time,
                total_hours: this.state.total_hours,
                status_id: this.state.status,
                project_id: this.state.project_id,
                notes: this.state.notes,
                task_description: this.state.task_description
            })
        }
        console.log(options)
        userService.updateTask(options, this.state.id).then(res => console.log(res));

        this.props.navigate('/projects');   
    }
    render(){
        const  state  = this.state;

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

                                    {/* <div className="col-span-6 sm:col-span-4">
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
                                    </div> */}

                                    <div className="col-span-6 sm:col-span-4">
                                        
                                        <label htmlFor="status" className="block text-sm font-medium text-gray-700">
                                            Status
                                        </label>
                                        <select
                                            id="status"
                                            name="status"
                                            value={state.user_id}
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
                                                    User
                                                </label>
                                                
                                                <select
                                                    id="user"
                                                    name="user"
                                                    value={this.user_id}
                                                    onChange={this.handleChange}
                                                    autoComplete="status-name"
                                                    required
                                                    className="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                >
                                                    { state.users && 
                                                        state.users.map(function(d, idx){
                                                    
                                                        return(
                                                        <option key={idx} value = {d.name} selected = { parseInt(state.user_id) === parseInt(d.user_id) ? true : false}>{d.name}</option>
                                                    )})
                                                    }  

                                                </select>
                                            </div> 
                                            <br/>
                                            {/* <div className="col-span-6 sm:col-span-4">
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
                                            <br/> */}
                                            <div className="col-span-6 sm:col-span-4">
                                                <label htmlFor="total_hours" className="block text-sm font-medium text-gray-700">
                                                    Total Hours
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
                                    <Link to="/projects" className="mr-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                            <button className="font-bold">
                                            Cancel
                                            </button>
                                    </Link>
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