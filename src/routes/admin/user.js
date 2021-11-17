import { useParams } from "react-router-dom";
import UserForm from "../../components/userForm";
import ExampleLandingAdmin from "../../components/LandingAdmin";

export default function UserView(props) {
    let params = useParams();
    return (
      <>
        <ExampleLandingAdmin/>
        <UserForm id={params.userID}/>
      </>
    );
}