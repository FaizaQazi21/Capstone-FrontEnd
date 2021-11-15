import './index.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { LoginPage } from './routes/login/LoginPage';
import { App } from './routes/app/App';
import { AdminPage } from './routes/admin/AdminPage';
import { PrivateRoute } from './components/PrivateRoute';
import { Role } from './helpers/role';
import { 
  BrowserRouter ,
  Routes,
  Route
} from "react-router-dom";
import Projects from './routes/admin/projects';
import ManageUsers from './routes/admin/manageUsers';
import CreateProject from './routes/admin/createProject';
import CreateUser from './routes/admin/createUser';
import EditProjectView from './routes/admin/project';
import UserView from './routes/admin/user';
import Project from './routes/project';
import ProjectBase from './routes/projectbase';
import TaskList from './routes/tasklist';

// setup fake backend
import { configureFakeBackend } from './helpers/fake-backend';
configureFakeBackend();


ReactDOM.render(
  <BrowserRouter>
    <Routes>
        <Route path="/" element={<App />} />
        <Route path="/login" element={<LoginPage/>} />
        <Route
          path="/admin"
          roles={[Role.Admin]}
          element={
            <PrivateRoute roles={[Role.Admin]} component={AdminPage}>
            </PrivateRoute>
          }
        />
        <Route
          path="/projects"
          roles={[Role.Admin]}
          element={
            <PrivateRoute roles={[Role.Admin]} component={Projects}>
            </PrivateRoute>
          }
        />
        <Route
          path="/users"
          roles={[Role.Admin]}
          element={
            <PrivateRoute roles={[Role.Admin]} component={ManageUsers}>
            </PrivateRoute>
          }
        />
        <Route
          path="/createproject"
          roles={[Role.Admin]}
          element={
            <PrivateRoute roles={[Role.Admin]} component={CreateProject}>
            </PrivateRoute>
          }
        />
        <Route
          path="/createuser"
          roles={[Role.Admin]}
          element={
            <PrivateRoute roles={[Role.Admin]} component={CreateUser}>
            </PrivateRoute>
          }
        />
        <Route path="editproject" element={<EditProjectView />}>
          <Route
          path=":projectID"
          roles={[Role.Admin]}
          element={
            <PrivateRoute roles={[Role.Admin]} component={EditProjectView}>
            </PrivateRoute>
          }
          />
        </Route>
        <Route path="edituser" element={<UserView />}>
          <Route
          path=":userID"
          roles={[Role.Admin]}
          element={
            <PrivateRoute roles={[Role.Admin]} component={UserView}>
            </PrivateRoute>
          }
          />
        </Route>
        <Route path="project" element={<ProjectBase />}>
          <Route
            path=":projectID"
            roles={[Role.Admin]}
            element={
              <PrivateRoute roles={[Role.Admin]} component={Project}>
              </PrivateRoute>
            }>
            <Route path="tasks" element={<TaskList />}/>
          </Route>
        </Route>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);