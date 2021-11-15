let invoices = [
    {
      name: "Santa Monica",
      number: 1995,
      amount: "$10,800",
      due: "12/05/1995"
    },
    {
      name: "Stankonia",
      number: 2000,
      amount: "$8,000",
      due: "10/31/2000"
    },
    {
      name: "Ocean Avenue",
      number: 2003,
      amount: "$9,500",
      due: "07/22/2003"
    },
    {
      name: "Tubthumper",
      number: 1997,
      amount: "$14,000",
      due: "09/01/1997"
    },
    {
      name: "Wide Open Spaces",
      number: 1998,
      amount: "$4,600",
      due: "01/27/2998"
    }
  ];

let projects = [
    {"id": 1, "name":"Project1"},
    {"id": 2,"name":"Project2"},
      {"id": 3,"name":"Project3"},
      {"id": 4,"name":"Project4"}];

let taskdata = [
    {projectId: 1, projectName:"Project1",taskId:1, TaskName: "Task1",userID:1, Status:"Available",Description: "Create New Task in DB",Notes: "Yet to start", TotalHR:"0"},
    {projectId: 2, projectName:"Project2",taskId:2, TaskName: "Task2",userID:2, Status:"Inprogress",Description: "Create New Project in DB",Notes: "Working on Task",TotalHR:"05:02:00"},
    {projectId: 3, projectName:"Project3",taskId:3, TaskName: "Task3",userID:2, Status:"Completed",Description: "Update the Task in DB",Notes: "Task Completed",TotalHR:"02:02:00"},
    {projectId: 4, projectName:"Project4",taskId:4, TaskName: "Task3",userID:2, Status:"Hold",Description: "Update the Task in DB",Notes: "Task Completed",TotalHR:"12:22:00"}];

let users = [
    {id:"1", name: "A", email: "x@gmail.com", password: "123456", role: "User"},
    {id:"2", name: "B", email: "x@gmail.com", password: "123456", role: "User"}
  ];

  export function getUser(id){
    console.log(users);

    return users.find(
      u => u.id == id
    );
  }

  export function getUsers(){
    return users;
  }

  export function getInvoices() {
    return invoices;
  }

  export function getProjects() {
    return projects;
  }


  export function getProject(id) {
    return projects.find(
      p => p.id === id
    );
  }
  export function getTasks() {
    return taskdata;
  }

  export function getTaskByProjectID(id) {

    return taskdata.filter(
      p => p.projectId === id
    );
  }
  export function getTaskByID(id) {

    return taskdata.filter(
      p => p.taskId === id
    );
  }
  export function getTaskByuserID(id) {

    return taskdata.filter(
      p => p.userID === id
    );
  }

  export function getInvoice(number) {
    return invoices.find(
      invoice => invoice.number === number
    );
  }