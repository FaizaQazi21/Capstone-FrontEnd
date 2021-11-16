import React, { useState, useEffect } from 'react';
import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import { Link } from "react-router-dom";
import {useParams} from 'react-router-dom';
import { EyeIcon } from '@heroicons/react/outline'
import { Button } from '@material-ui/core';


 

  
export default function TaskList() {
    
    const  param  = useParams();
    var id = parseInt(param.userID);
    const [tasks, setTasks] = useState([]);
    
    

    //getting
    useEffect(() => {
        fetch(`http://localhost:8080/api/task/user/${id}`
        )
            .then(response => {
                if (response.status !== 200) {
                    return Promise.reject("Fetch failed")
                }
               
                
                return response.json();
                
            })
            .then(json => setTasks(json))
            .catch(console.log);

            

            
    }, []);

    

    return (
      <>
        <Card>
           
            <CardBody>
                <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-2 text-blue-900 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                    Task Name
                                </th>
                                <th className="px-2 text-blue-900 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap  text-left">
                                    Project Name
                                </th>
                                <th className="px-2 text-blue-900 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                    Status
                                </th>
                                <th className="px-2 text-blue-900 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                    Total Time
                                </th>
                                <th className="px-2 text-blue-900 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                    Options
                                </th>
                            </tr>
                        </thead>
                        <tbody> 

                        {tasks.length>0 ? tasks.map(function(d, idx){
                            let link = "/user/project/task/" + (d.task_id).toString();
                            
                            return (
                                <tr key={idx}>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {d.task_name}
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {d.project_name}
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                 
                                    {d.status}
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {d.total_hours}
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                <Link to={link}>
                                    <Button className="">
                                        <EyeIcon className="max-h-7 text-yellow-500 hover:bg-yellow-600"/>
                                    </Button>
                                </Link>
                                </th>
                            </tr>
                            )
                        }):
                         (
                            <tr>
                                <th colSpan="5" className="font-mediumlight text-sm whitespace-nowrap px-2 py-4 ">No task found</th>
                            </tr>
                         )
                        }
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
      </>
    )
  }