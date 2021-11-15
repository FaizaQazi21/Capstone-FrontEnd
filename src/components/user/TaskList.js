import Card from '@material-tailwind/react/Card';
import CardBody from '@material-tailwind/react/CardBody';
import { Link } from "react-router-dom";
import { getTaskByProjectID } from "../../data";
import {useParams} from 'react-router-dom';
import { EyeIcon } from '@heroicons/react/outline'
import { Button } from '@material-ui/core';

 

  
export default function TaskList() {
    
    const  param  = useParams();
    var id = parseInt(param.projectID);
    let data = getTaskByProjectID(id);
    console.log(data.length)

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
                           
                        {data.length>0 ? data.map(function(d, idx){
                            let link = "/user/project/task/" + (d.taskId).toString();
                            return (
                                <tr key={idx}>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {d.TaskName}
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {d.projectName}
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                 
                                    {d.Status}
                                </th>
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    {d.TotalHR}
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
                         (<tr><th colspan="5" className="font-mediumlight text-sm whitespace-nowrap px-2 py-4 ">No task found</th></tr>)
                        }
                        </tbody>
                    </table>
                </div>
            </CardBody>
        </Card>
      </>
    )
  }