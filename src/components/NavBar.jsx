const NavBar = () => {
  return (
    <div className=" navbar w-full flex justify-end bg-azul absolute top-0 max-lg:justify-center">

      <a href="#skills" className="navBar-button"><button>Habilidades</button></a>
      <a href="#projects" className="navBar-button"><button>Proyectos</button></a>
      <a href="#about" className="navBar-button"><button>Sobre Mi</button></a>
      <a href="#contact" className="navBar-button"><button>Contacto</button></a>


    </div>
  )
}

export default NavBar