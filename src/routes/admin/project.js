import { useParams, useLocation } from "react-router-dom";
import ProjectForm from "../../components/ProjectForm";
import ExampleLandingAdmin from "../../components/LandingAdmin";

export default function EditProjectView(props) {
    let params = useParams();
    const location = useLocation()
    const { project } = location.state

    return (
      <>
        <ExampleLandingAdmin/>
        <ProjectForm id={params.projectID} project={project}/>
      </>
    );
}