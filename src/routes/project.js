import ProjectView from "../components/ProjectView";
//import { getProject } from "../data";
import { useParams, useLocation } from "react-router-dom";
import ExampleLandingAdmin from "../components/LandingAdmin";
import { Outlet } from "react-router";

export default function Project() {
    let params = useParams();
    //let project = getProject(parseInt(params.projectID));
    const location = useLocation()
    const { project } = location.state

    return (
      <>
        <ExampleLandingAdmin/>
        <ProjectView project={project}/>
        <Outlet/>
      </>
    );
}
