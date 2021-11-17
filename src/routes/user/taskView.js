import ExampleLandingUser from "../../components/LandingUser";
import View from "../../components/user/TaskView";


import { Outlet } from "react-router-dom";

export default function TaskView() {
    return (
      <>
        <ExampleLandingUser/>
        <View/>
        <Outlet />
      </>
    );
  }