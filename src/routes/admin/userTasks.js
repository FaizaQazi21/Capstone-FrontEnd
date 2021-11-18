import ExampleLandingAdmin from "../../components/LandingAdmin";
import UserTaskList from "../../components/UserTaskList";
import { useParams } from "react-router-dom";

export default function UserTasksAdmin() {
    let params = useParams();

    return (
      <>
        <ExampleLandingAdmin/>
        <UserTaskList id={params.userID}/>
      </>
    );
}