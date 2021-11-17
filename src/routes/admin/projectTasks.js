import ExampleLandingAdmin from "../../components/LandingAdmin";
import ListView from "../../components/TaskList";
import { Outlet } from "react-router-dom";

export default function ProjectTasks() {
    return (
      <>
        <ExampleLandingAdmin/>
        <ListView/>
        <Outlet />
      </>
    );
  }