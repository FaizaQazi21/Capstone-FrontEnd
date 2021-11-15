import './App.css';
import React from 'react';
import { Link } from 'react-router-dom';
import { history } from './helpers/history';
import { Role } from './helpers/role';
import { authenticationService } from '../../services/authentication.service';

//root component: routes, outter html, main navbar

//
//logout() method

class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            currentUser: null,
            isAdmin: false
        };
    }

    componentDidMount() {

        authenticationService.currentUser.subscribe(x => this.setState({
            currentUser: x,
            isAdmin: x && x.role === Role.Admin
        }));

    }

    logout() {
        authenticationService.logout();
        history.push('/login');
    }

    render() {
        const { currentUser, isAdmin } = this.state;
        return (
                <div>
                    {currentUser &&
                        <nav className="navbar navbar-expand navbar-dark bg-dark">
                            <div className="navbar-nav">
                                <Link to="/" className="nav-item nav-link">Home</Link>
                                {isAdmin && <Link to="/admin" className="nav-item nav-link">Admin</Link>}
                                <a onClick={this.logout} className="nav-item nav-link">Logout</a>
                            </div>
                        </nav>
                    }
                    {
                    !currentUser &&
                        <div>
                        ola
                        </div>
                    }
                </div>
        );
    }
}

export default { App };