import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Skills from './components/Skills'



function App() {


  return (

    <div className='mt-16' >

      <NavBar />
      <main className='flex flex-col items-center justify-center w-full max-md:w-screen'>

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
