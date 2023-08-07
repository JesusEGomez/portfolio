import NavBar from './components/navBar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'



function App() {


  return (

    <div className='mt-16 w-full max-sm:w-screen transition-all  ' >

      <NavBar />
      <main className='flex flex-col items-center justify-center  '>

        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <Footer />


    </div>
  )
}

export default App
