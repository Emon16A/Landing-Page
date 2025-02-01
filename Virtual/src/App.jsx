import Feature from "./components/Feature"
import Footer from "./components/Footer"
import HeroSection from "./components/HeroSection"
import Navbar from "./components/Navbar"
import Plan from "./components/Plan"
import Testominal from "./components/Testominal"
import Workflow from "./components/Workflow"
const App = () => {
  return (
    <>
      <Navbar />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <Feature />
        <Workflow />
        <Plan />
        <Testominal />
        <Footer />
      </div>
    </>
  )
}

export default App