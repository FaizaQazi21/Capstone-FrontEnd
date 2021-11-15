import React from 'react';
import { Link } from 'react-router-dom';
import { history } from '../../helpers/history';
import { Role } from '../../helpers/role';
import { authenticationService } from '../../services/authentication.service';
import ExampleLanding from '../../components/Landing'; 
import ExampleLandingAdmin from '../../components/LandingAdmin';
import ExampleLandingUser from '../../components/LandingUser';

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
                    {currentUser && isAdmin &&
                        <div>
                            <a onClick={this.logout} className="nav-item nav-link">Logout</a>
                            <ExampleLandingAdmin/>
                        </div>
                    }
                    {currentUser && !isAdmin &&
                        <div>
                            <a onClick={this.logout} className="nav-item nav-link">Logout</a>
                            <ExampleLandingUser/>
                        </div>
                    }
                    {
                    !currentUser &&
                        <div>
                            <ExampleLanding/>
                        </div>
                    }
                </div>
        );
    }
}

export { App };