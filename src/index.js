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
import A from './routes/a';
import AID from './routes/aid';
import User from './routes/user';
import Admin from './routes/admin';
import Projects from './routes/admin/projects';
import Project from './routes/project';
import ManageUsers from './routes/admin/manageUsers';
import CreateUser from './routes/admin/createUser';
import CreateProject from './routes/admin/createProject';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="login" element={<Login />} />
        <Route path="user" element={<User />} />
        <Route path="admin" element={<Admin />} />
        <Route path="projects" element={<Projects />} >
          <Route path=":projectID" element={<Project />} />
        </Route>
        <Route path="users" element={<ManageUsers />} />
        <Route path="createuser" element={<CreateUser />} />
        <Route path="createproject" element={<CreateProject />} />
        <Route path="a" element={<A />}>
            <Route
            index
            element={
              <main style={{ padding: "1rem" }}>
                <p>Select an invoice</p>
              </main>
            }
            />
          <Route path=":aID" element={<AID />} />
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
