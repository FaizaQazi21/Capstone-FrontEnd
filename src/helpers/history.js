import { createBrowserHistory } from 'history';

//history object used by React Router, 
//custom obbject to enable redirecting users from outside React components,
// for example in the logout method of the App component

export const history = createBrowserHistory();