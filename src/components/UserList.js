import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Image from '@material-tailwind/react/Image';
import Progress from '@material-tailwind/react/Progress';
import logo1 from '../assets/logo1.jpg';
import { AdjustmentsIcon, EyeIcon } from '@heroicons/react/outline'
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";


  
export default function UserListView() {
    const data = [{"name":"A"}, {"name":"B"}, {"name":"C"}];

    return (
      <>
        <Card>
            <button
                  className="flex ml-4 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <Link to="/user">Create new User</Link>                  
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
                        <tbody>
                        {data.map(function(d, idx){
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
                                    <Button className="">
                                        <AdjustmentsIcon className="pl-1 max-h-7 text-yellow-500 hover:bg-yellow-600"/>
                                    </Button>
                                </th>
                            </tr>
                            )
                        })}
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
      </>
    )
  }