import { getProject } from "../data";
import { useParams } from "react-router-dom";
import ExampleLanding from "../components/Landing";

export default function TaskList() {
    let params = useParams();
    let project = getProject(parseInt(params.projectID));
    return (
      <>
        <span>task</span>
      </>
    );
}