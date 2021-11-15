import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { 
  BrowserRouter ,
  Routes,
  Route
} from "react-router-dom";
import Login from './routes/login';
import User from './routes/user';
import Admin from './routes/admin';
import Projects from './routes/admin/projects';
import UserProjects from './routes/user/projects';
import ProjectTasks from "./routes/user/projectTasks";
import ViewTask from "./routes/user/taskView";
import UserTasks from './routes/user/userTasks';
import Project from './routes/project';
import ProjectBase from './routes/projectbase';
import ManageUsers from './routes/admin/manageUsers';
import CreateUser from './routes/admin/createUser';
import CreateProject from './routes/admin/createProject';
import UserView from './routes/admin/user';
import EditProjectView from './routes/admin/project';
import TaskList from './routes/tasklist';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="user" element={<User />} />
        <Route exact path="user/projects" element={<UserProjects />} />
        <Route exact path="user/projectTasks/:projectID" element={<ProjectTasks />} />
        <Route exact path="user/tasks/:userID" element={<UserTasks />} />
        <Route exact path="/user/project/task/:taskID" element={<ViewTask />} />
        <Route path="admin" element={<Admin />} />
        <Route path="projects" element={<Projects />}/>
        <Route path="project" element={<ProjectBase />}>
          <Route path=":projectID" element={<Project />}>
            <Route path="tasks" element={<TaskList />}/>
          </Route>
        </Route>
        <Route path="users" element={<ManageUsers />}/>
        <Route path="edituser" element={<UserView />}>
          <Route path=":userID" element={<UserView />}/>
        </Route>
        <Route path="editproject" element={<EditProjectView />}>
          <Route path=":projectID" element={<EditProjectView />}/>
        </Route>
        <Route path="createuser" element={<CreateUser />} />
        <Route path="createproject" element={<CreateProject />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
