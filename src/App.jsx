import { Helmet, HelmetProvider } from "react-helmet-async"
import AboutMe from "./Components/AboutMe/AboutMe"
import Contact from "./Components/Contact/Contact"
import MyProjects from "./Components/MyProjetcs/MyProjects"
import SideBar from "./Components/SideBar/SideBar"
import Techs from "./Components/Techs/Techs"
import "./app.css"
import imgPreview from "./assets/images/thumbnail.png"

function App() {
  return (
    <>
      <div id="page-wraper">
        <HelmetProvider>
          <Helmet>
          <meta name="og:thumbnail" content={imgPreview} />
          </Helmet>

        <SideBar />

        <Techs/>

        <MyProjects/>

        <AboutMe/>

        <Contact />


        </HelmetProvider>
      </div>
    </>
  )
}

export default App
