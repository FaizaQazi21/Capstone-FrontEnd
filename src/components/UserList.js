import React  from 'react';
import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import { AdjustmentsIcon } from '@heroicons/react/outline'
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";
import { userService } from '../services/user.service';


  
class UserListViewClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            users: null
        };
    }
     

    componentDidMount() {
        userService.getAllUsers().then(users => this.setState({ users }));
    }

    //getting
    // useEffect(() => {
    //     fetch("http://localhost:8080/api/user"
    //     )
    //         .then(response => {
    //             if (response.status !== 200) {
    //                 return Promise.reject("Fetch failed")
    //             }
    //             return response.json();
    //         })
    //         .then(json => setUser(json))
    //         .catch(console.log);
    // }, []);

    render () {
        const { users } = this.state;
        return (
      <>
        <Card>
            <button
                  className="flex ml-3 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <Link to="/createuser">Create new User</Link>                  
            </button>
            <CardBody>
                <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-2 text-blue-900 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                    User
                                </th>
                                
                                <th className="px-2 text-blue-900 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                    Role
                                </th>
                                
                                <th className="px-2 text-blue-900 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                    Status
                                </th>

                                <th className="px-2 text-blue-900 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                    Options
                                </th>
                            </tr>
                        </thead>
                        { users &&
                        <tbody>
                        {users.map(function(d, idx){
                            let link = "/edituser/" + d.id; 
                            return (
                                <tr key={idx}>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {d.name}
                                </th>
                                
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <i className="fas fa-circle fa-sm text-orange-500"></i>{' '}
                                    User
                                </th>
                                
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <i className="fas fa-circle fa-sm text-orange-500"></i>{' '}
                                    Active
                                </th>

                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <Link to={link} params={{ user: {d} }}>
                                        <Button>
                                            <AdjustmentsIcon className="pl-1 max-h-7 text-yellow-500 "/>
                                        </Button>
                                    </Link>
                                </th>
                            </tr>
                            )
                        })}
                        </tbody>
                        }
                    </table>
                </div>
            </CardBody>
        </Card>
      </>
        );
    }
}

export default function UserListView(props) {
    return <UserListViewClass {...props}/>
}