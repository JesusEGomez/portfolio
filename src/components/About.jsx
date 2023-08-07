import { about } from "../portFolio"
import { BsGithub, BsLinkedin } from "react-icons/bs"
const About = () => {
    const { name, description, cv, linkedin, gitHub } = about
    return (
        <section id="about" className="flex flex-col mt-10 justify-center items-center  flex-wrap w-full  ">
            <h1 className="text-center text-6xl lg:text-8xl dark:text-celeste  "> Hola👋, Mi Nombre Es <span className="font-bold hover:underline cursor-pointer  text-azul ">{name}</span>. </h1>
            <div className="flex flex-col m-5 justify-center items-center ">


                <p className="text-center font-semibold text-xl dark:text-celeste p-5 max-lg:">{description}</p>
                <p className="description-p">Actualmente estoy en búsqueda de un puesto de trabajo en el que pueda utilizar mis habilidades para marcar la diferencia. 💪</p>
                <p className="description-p">Si mi perfil es de tu interés, no dudes en contactarme por cualquiera de los medios que se encuentran aquí. 😀</p>
                <div className="flex m-3 p-1 justify-between w-20">
                    <a href={gitHub}><BsGithub className='text-3xl hover:text-4xl text-celeste' /></a>
                    <a href={linkedin}><BsLinkedin className='text-3xl hover:text-4xl text-celeste' /></a>

                </div>
                <a href={cv}><button className="btn mt-4 bg-azul font-semibold text-clarito">Descargar Cv </button></a>


            </div>
        </section>
    )
}

export default About