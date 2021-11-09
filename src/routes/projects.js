import ExampleLandingAdmin from "../components/LandingAdmin";
import ListView from "../components/ProjectList";
import { Outlet } from "react-router-dom";

export default function Projects() {
    return (
      <>
        <ExampleLandingAdmin/>
        <ListView/>
        <Outlet />
      </>
    );
  }