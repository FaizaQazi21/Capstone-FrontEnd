import './App.css';
import MiddleContent from './components/Middle';
import ExampleLanding from './components/Landing';
import { Link, Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App space-y-6">
      <ExampleLanding/>
      <MiddleContent/>
      <nav
          style={{
            paddingBottom: "1rem"
          }}
        >
        <Link to="/a">Test A</Link>
      </nav>
      <Outlet />
    </div>
  );
}
export default App;
