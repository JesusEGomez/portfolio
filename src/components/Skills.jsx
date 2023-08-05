import { skills } from "../portFolio"
const Skills = () => {
    return (
        <div className="flex flex-col flex-wrap m-10 items-center justify-center w-96 max-sm:w-full ">
            <h2 className="title-section">Habilidades</h2>
            <div className="flex flex-wrap">

                {skills.map((skill) => {
                    return (
                        <div key={skill} className="m-1 w-fit text-center rounded-lg p-1  border-solid border-2 shadow-lg text-lg  ">
                            <p className="font-semibold text-celeste">{skill}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
export default Skills