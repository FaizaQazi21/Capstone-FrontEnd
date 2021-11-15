
import ExampleLandingUser from "../../components/LandingUser";
import ListView from "../../components/user/ProjectList";
import { Outlet } from "react-router-dom";

export default function Projects() {
    return (
      <>
        <ExampleLandingUser/>
        <ListView/>
        <Outlet />
      </>
    );
  }