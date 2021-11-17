import ExampleLandingAdmin from "../../components/LandingAdmin";
import TaskForm from "../../components/TaskForm";
import useParams from 'react';

export default function EditTask(props) {
  let params = useParams();
    return (
      <>
        <ExampleLandingAdmin/>
        <TaskForm id={params.taskID}/>
      </>
    );
}