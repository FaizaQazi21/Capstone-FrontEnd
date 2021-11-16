import React, { useState, useEffect } from 'react';
import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import Progress from '@material-tailwind/react/Progress';
import { AdjustmentsIcon, EyeIcon } from '@heroicons/react/outline'
import { Button } from '@material-ui/core';
import { Link } from "react-router-dom";

 
  
export default function ListView() {
    //const data = getProjects();
    const [project, setProject] = useState([]);
     
    //getting
    useEffect(() => {
        fetch("http://localhost:8080/api/project"
        )
            .then(response => {
                if (response.status !== 200) {
                    return Promise.reject("Fetch failed")
                }
                console.log("response is: " + response.json)
                return response.json();
            })
            .then(json => setProject(json))
            .catch(console.log);
            
    }, []);

    

    return (
      <>
        <Card>
            <button
                  className="flex ml-3 py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-yellow-500 hover:bg-yellow-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  <Link to="/createproject">Create new project</Link>                  
            </button>
            <CardBody>
                <div className="overflow-x-auto">
                    <table className="items-center w-full bg-transparent border-collapse">
                        <thead>
                            <tr>
                                <th className="px-2 text-blue-900 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                    Project
                                </th>
                                <th className="px-2 text-blue-900 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap  text-left">
                                    Tasks
                                </th>
                                <th className="px-2 text-blue-900 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                    Status
                                </th>
                                <th className="px-2 text-blue-900 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                    Completion
                                </th>
                                <th className="px-5 text-blue-900 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap text-left">
                                    Options
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                        {project.map(function(d, idx){
                            let linkEdit = "/editproject/" + (d.id).toString();
                            let link = "/project/" + (d.id).toString();
                            console.log("project: " + project.length)
                            return (
                                <tr key={idx}>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <Link to={link}>{d.name}</Link>
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    17
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <i className="fas fa-circle fa-sm text-orange-500"></i>{' '}
                                    Started
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <Progress color="red" value="60" />
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    <Link to={link}>
                                        <Button className="">
                                            <EyeIcon className="max-h-7 text-yellow-500 "/>
                                        </Button>
                                    </Link>
                                    <Link to={linkEdit}>
                                        <Button className="">
                                            <AdjustmentsIcon className="pl-1 max-h-7 text-yellow-500 "/>
                                        </Button>
                                    </Link>
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