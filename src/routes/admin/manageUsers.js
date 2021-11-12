import ExampleLandingAdmin from "../../components/LandingAdmin";
import UserListView from "../../components/UserList";
import { Outlet } from "react-router-dom";

export default function ManageUsers() {
    return (
      <>
        <ExampleLandingAdmin/>
        <UserListView/>
        <Outlet/>
      </>
    );
}