import Button from '@material-tailwind/react/Button';
import Image from '@material-tailwind/react/Image';
import H3 from '@material-tailwind/react/Heading3';
import LeadText from '@material-tailwind/react/LeadText';
import ProfilePicture from '../assets/logo1.jpg';
import { Link } from "react-router-dom";
import { userService } from '../services/user.service';

export default function ProjectView({project}) {

    let finishedTasks = userService.getProjectFinishedTasks(project.id);
    let totalTasks = userService.getProjectTotalTasks(project.id);

    return (
      <>
        <section id="pro" className="relative pt-96">
            <div className="container max-w-7xl px-4 mx-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                <div className="relative">
                                    <div className="w-40 -mt-20">
                                        <Image
                                            src={ProfilePicture}
                                            alt="Profile picture"
                                            raised
                                            rounded
                                        />
                                    </div>
                                </div>
                            </div>
                        
                        </div>

                        <div className="text-center my-8">
                            <H3 color="gray">{project.name}</H3>
                        </div>

                        <div className="mb-10 py-2 border-t border-gray-200 text-center">
                            <div className="flex flex-wrap justify-center">
                                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                                    <LeadText color="blueGray">
                                        {project.project_description}
                                    </LeadText>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                    <div className="mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                            {totalTasks}
                                        </span>
                                        <span className="text-sm text-gray-700">
                                            Tasks
                                        </span>
                                    </div>
                                    <div className="mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                            {finishedTasks}
                                        </span>
                                        <span className="text-sm text-gray-700">
                                            Finished
                                        </span>
                                    </div>
                                    <div className="mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block uppercase tracking-wide text-gray-900">
                                            #
                                        </span>
                                        <span className="text-sm text-gray-700">
                                            Users
                                        </span>
                                    </div>
                                    <div className="mr-4 p-3 text-center">
                                        <span className="text-xl font-bold block tracking-wide text-gray-900">
                                            {project.priority}
                                        </span>
                                        <span className="text-sm text-gray-700">
                                            Priority
                                        </span>
                                    </div>
                                </div>
                            </div>
                                    <Link to="tasks"
                                    state={{ project: project }}
                                    >
                                        <Button
                                            color="lightBlue"
                                            buttonType="link"
                                            ripple="dark"
                                        >
                                            Show Tasks
                                        </Button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
      </>
    )
  }
