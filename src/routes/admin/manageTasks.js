import ExampleLandingAdmin from "../../components/LandingAdmin";
import TaskList from "../../components/TaskList";
import { Outlet } from "react-router-dom";

export default function ManageTasks() {
    return (
      <>
        <ExampleLandingAdmin/>
        <TaskList/>
        <Outlet/>
      </>
    );
}