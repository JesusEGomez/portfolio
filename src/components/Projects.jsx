import { projects } from "../portFolio"
import { BsCodeSlash } from "react-icons/bs"
import { FaExternalLinkAlt } from 'react-icons/fa';
const Projects = () => {

    return (
        <div className="flex flex-col items-center w-full  ">
            <h2 className="title-section">Proyectos</h2>
            <div className="flex justify-center w-full flex-wrap">
                {
                    projects.map((project) => {
                        return <div key={project.title} className="card m-5 w-96 bg-base-100 shadow-xl">
                            <figure className="px-10 pt-10">
                                <img src={project.image} alt={project.title} className="rounded-xl max-h-48" />
                            </figure>
                            <div className="card-body items-center text-center">
                                <h2 className="card-title font-semibold underline">{project.title}</h2>
                                <p>{project.Description}</p>
                                <div className="flex text-xl flex-wrap w-full ">
                                    {project.stack.map((element) => <p className="font-semibold text-" key={element}>{element}</p>)}
                                </div>
                                <div className="card-actions w-full justify-evenly p-2 ">
                                    <a href={project.code}><BsCodeSlash className="text-2xl" /></a>
                                    <a href={project.deploy}><FaExternalLinkAlt className="text-2xl" /></a>
                                </div>
                            </div>
                        </div>


                    })
                }

            </div>

        </div>
    )
}

export default Projects