import ProjectView from "../components/ProjectView";
import { getProject } from "../data";
import { useParams } from "react-router-dom";

export default function Project() {
    let params = useParams();
    let project = getProject(parseInt(params.projectID));
    return (
      <>
        <ProjectView project={project}/>
      </>
    );
  }