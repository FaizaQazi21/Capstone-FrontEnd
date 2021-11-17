import ExampleLandingAdmin from "../../components/LandingAdmin";
import EditTaskForm from "../../components/EditTaskForm";
import { useParams } from "react-router-dom";

export default function EditTask() {
    let params = useParams();
    return (
      <>
        <ExampleLandingAdmin/>
        <EditTaskForm id={params.taskID}/>
      </>
    );
}