import Navbar from './components/Navbar/Navbar'
import Banner from './components/Banner/Banner'
import About from './components/About/About'
import Skills from './components/technologies/Skills'
import Education from './components/Education/Education'


function App() {


  return (
    <div className="min-h-screen bg-gradient-to-r from-black via-gray-900 to-gray-800 text-white">
    
      <Navbar />
      <Banner/>
      <About/>
      <Skills/>
      <Education/>
      
    </div>
  )
}

export default App
