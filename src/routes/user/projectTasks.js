
import ExampleLandingUser from "../../components/LandingUser";
import ListView from "../../components/user/TaskList";
import { Outlet } from "react-router-dom";

export default function ProjectTasks() {
    return (
      <>
        <ExampleLandingUser/>
        <ListView/>
        <Outlet />
      </>
    );
  }