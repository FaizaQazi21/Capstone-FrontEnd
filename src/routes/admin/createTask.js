import ExampleLandingAdmin from "../../components/LandingAdmin";
import TaskForm from "../../components/TaskForm";
import {  useLocation } from "react-router-dom";

export default function CreateTask() {
    const location = useLocation()
    const { id } = location.state
    return (
      <>
        <ExampleLandingAdmin/>
        <TaskForm project_id={id}/>
      </>
    );
}