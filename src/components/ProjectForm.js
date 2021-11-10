import * as React from 'react';

export default class ProjectForm extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '', 
            about: '', 
            priority: ''
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
        alert('The Project was created!');
        console.log(this.state);
        event.preventDefault();
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
                                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                        About
                                        </label>
                                        <div className="mt-1">
                                        <textarea
                                            id="about"
                                            name="about"
                                            value={this.state.about}
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
                                    <button
                                        type="submit"
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