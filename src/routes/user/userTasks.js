import ExampleLandingUser from "../../components/LandingUser";
import UserTaskList from "../../components/user/UserTaskList";
import { Outlet } from "react-router-dom";


export default function UserTasks() {

    return (
      <>
        <ExampleLandingUser/>
        <UserTaskList/>
        <Outlet />
      </>
    );
  }