import { PROJECTS, ART } from './utils/consts'
import './App.css'

function App() {
  const art_path = "./assets/art_pf/";
  return (
  <div className = "lg:px-64 px-40 py-16 gap-4 flex-col">
    <div className  = "font-inter font-extrabold text-8xl">Max Guo</div>
    <div className  = "font-jmono font-black text-6xl">Programming Projects</div>

    <div>
      {PROJECTS.map((project) =>
      <div className = "p-10 text-3xl font-jmono">
        Project
      </div>  
      )}
    </div>

    <div className  = "font-jmono font-black lg:text-6xl text-5xl">Art Gallery</div>
    <div className = "grid lg:grid-cols-3 gap-4 my-10 grid-cols-1">
      {ART.map((project) =>
        <div className = "lg:h-80 lg:w-80 w-60 h-60 my-auto mx-auto rounded-md bg-white bg-opacity-50">
          <img src = {art_path + project.path} className = "object-contain lg:w-80 lg:h-80  w-60 h-60"></img>
        </div>
      )}
    </div>
    <footer className = "font-jmono text-xl w-fit mx-auto mt-4">Thanks for visiting!</footer>
  </div>
  )
}

export default App
