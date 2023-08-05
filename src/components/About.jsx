import { about } from "../portFolio"
import { BsGithub, BsLinkedin } from "react-icons/bs"
const About = () => {
    const { name, description, cv, linkedin, gitHub } = about
    return (
        <div className="flex flex-col mt-10 justify-center items-center flex-wrap w-2/4  ">
            <h1 className="text-center text-6xl lg:text-8xl "> Hola👋, Mi Nombre Es <span className="font-bold hover:underline cursor-pointer text-azul">{name}</span>. </h1>
            <div className="flex flex-col m-5 justify-center items-center ">


                <p className="text-center font-semibold text-xl p-5">{description}</p>
                <div className="flex m-3 p-1 justify-between w-20">
                    <a href={gitHub}><BsGithub className='text-3xl hover:text-4xl text-celeste' /></a>
                    <a href={linkedin}><BsLinkedin className='text-3xl hover:text-4xl text-celeste' /></a>

                </div>
                <a href={cv}><button className="btn mt-4 bg-azul font-semibold text-clarito">Descargar Cv </button></a>


            </div>
        </div>
    )
}

export default About