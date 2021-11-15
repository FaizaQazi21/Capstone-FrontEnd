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
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);