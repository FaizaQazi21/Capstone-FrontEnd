import * as React from 'react';
import { getTaskByID } from "../../data";
import {useParams} from 'react-router-dom';
import { useStopwatch } from 'react-timer-hook';




export default function TaskView() {
    
    const  param  = useParams();
    var id = parseInt(param.taskID);
    let data = getTaskByID(id);
    let status = false;
    var userid = 2;
    let datatime;
    let hr = 0;
    let min = 0;
    let sec = 0;
    
  
    console.log(data.length)
    const {
        seconds,
        minutes,
        hours,
        start,
        pause,
        stop,
      } = useStopwatch({ autoStart: status});
    
    
     
    return (
        <>
        
            <div>
                
                <div className="mt-4 sm:mt-0">
                    
                    {/* <form action="#" method="POST"> */}
                    { data.map(function(d, idx){
                     
                         if (d.Status !== "Available") { 
                             
                                 datatime = d.TotalHR.split(":")
                                 hr = parseInt(datatime[0])
                                 min = parseInt(datatime[1])
                                 sec = parseInt(datatime[2])
                              
                                
                    
                    }
                        
                                 return (
                              
                                   
                                    
                             <div key={idx}>     
                              
                               
                              
                        <div style={{textAlign: 'right'}}>
                        <div style={{fontSize: '50px'}}>
                            <span>Timer : </span>
                           
                            <span>{hours+hr}</span>:<span>{minutes+min}</span>:<span>{seconds+sec}</span>
                        </div>
                        
                        
                        
                        </div>             
                        <div className="shadow overflow-hidden sm:rounded-md">
                            <div className="px-4 py-5 bg-white sm:p-6">
                            <div className="grid grid-cols-6 gap-6" key={idx}>
                                
                            
                                    <div className="col-span-1 sm:col-span-2">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                        Task name
                                    </label>
                                    <input
                                        type="text"
                                        name="taskName"
                                        id="taskName"
                                        value={d.TaskName}
                                        disabled
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                    </div>
                                    <div className="col-span-1 sm:col-span-2">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    Project name
                                    </label>
                                    <input
                                        type="text"
                                        name="projectName"
                                        id="projectName"
                                        value={d.projectName}
                                        disabled
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                    </div> 
                                    <div className="col-span-6 sm:col-span-6"></div>
                                    <div className="col-span-6 sm:col-span-2">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    Status
                                    </label>
                                    <input
                                        type="text"
                                        name="status"
                                        id="status"
                                        value={d.Status}
                                        disabled
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                    </div>
                                    <div className="col-span-6 sm:col-span-2">
                                    <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                                    Total Time
                                    </label>
                                    <input
                                        type="text"
                                        name="totalTime"
                                        id="totalTime"
                                        value={d.TotalHR}
                                        disabled
                                        className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md"
                                    />
                                    </div>
                                    <div className="col-span-6 sm:col-span-6"></div>
                                    <div className="col-span-6 sm:col-span-2">
                                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                        Notes
                                        </label>
                                        <div className="mt-1">
                                        <textarea
                                            id="notes"
                                            name="notes"
                                            value={d.Notes}
                                            disabled
                                            rows={3}
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                            
                                        />
                                        </div>
                                        
                                    </div>
                                    <div className="col-span-6 sm:col-span-2">
                                        <label htmlFor="about" className="block text-sm font-medium text-gray-700">
                                        Task description
                                        </label>
                                        <div className="mt-1">
                                        <textarea
                                            id="taskDescription"
                                            name="taskDescription"
                                            value={d.Description}
                                            disabled
                                            rows={3}
                                            className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md"
                                           
                                        />
                                        </div>
                                        
                                    </div> 
                                  
                            </div>
                            
                            </div>
                            <div className="text-right px-4 py-3 sm:px-6">
                            {(() => {
                            if (d.Status === "Available") {
                                
                                return (
                                    <button onClick={start}
                                    className="mr-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                    Start
                                    </button>
                                    
                                )
                            }
                            else if (d.Status === "Inprogress" && d.userID === userid) {
                                
                                return (
                                   <>
                                    <button onClick={pause}
                                    className="mr-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                    Pause
                                    </button>
                                    <button onClick={stop}
                                    className="mr-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                    Stop
                                    </button>
                                    </>
                                )
                            }
                            else if (d.Status === "Hold" && d.userID === userid) {
                                
                                return (
                                   
                                    <button onClick={start}
                                    className="mr-3 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                    >
                                    Resume
                                    </button>
                                )
                            }
                            })()}
                            </div>
                        </div>
                        </div> 
                       
                                 )
                                })}
                    {/* </form> */}
                </div>
            </div>
        </>
    );
}