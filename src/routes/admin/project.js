import { useParams } from "react-router-dom";
import ProjectForm from "../../components/ProjectForm";
import ExampleLandingAdmin from "../../components/LandingAdmin";

export default function EditProjectView(props) {
    let params = useParams();
    return (
      <>
        <ExampleLandingAdmin/>
        <ProjectForm id={params.projectID}/>
      </>
    );
}