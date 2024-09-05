import { PROJECTS, ART } from './utils/consts'
import { NavLink } from 'react-router-dom';

export default function Home() {
  const art_path = "./assets/art_pf/";
  return (
  <div className = "lg:px-64 px-40 py-16 gap-4 flex-col">
    <div className  = "font-jmono font-extrabold text-8xl">Max Guo  <span className = "text-4xl">๑(◕‿◕)๑</span></div>

    <div className = "mt-6 font-inter text-xl">Hey! Welcome to my little gallery :D. Have a look around!</div>
    <div className  = "font-jmono font-black text-6xl mt-6">Programming Projects</div>

    <div className = "my-10 flex flex-wrap gap-4 mx-auto justify-center">
      {PROJECTS.map((project) =>
      <NavLink to = {"cs/" + project.link}>
     <div className = " gap-2 rounded-md bg-white hover:bg-black hover:text-white bg-opacity-50 hover:bg-opacity-90 transition-colors duration-300 w-fit flex flex-col">
     <div>
         <img src = {project.thumb} className = "rounded-t-md h-60"/>
     </div>
             <div className = " px-2 flex flex-col">
                 <div className = "font-jmono font-extrabold text-xl mb-2">{project.title}</div>
     </div>
     
     </div>
     </NavLink>
      )}
    </div>

    <div className  = "font-jmono font-black lg:text-6xl text-5xl">Art Gallery</div>
    <div className = "grid lg:grid-cols-3 gap-4 my-10 grid-cols-1">
      {ART.map((project) =>
      <NavLink to = {"art/" + project.link}>
        <div className = "lg:h-80 lg:w-80 w-60 h-60 my-auto mx-auto rounded-md bg-white hover:bg-black bg-opacity-25 hover:bg-opacity-90  transition-colors duration-300">
          <img src = {art_path + project.path} className = "object-contain lg:w-80 lg:h-80  w-60 h-60"></img>

        </div>
      </NavLink>
      )}
    </div>
    <footer className = "font-jmono text-xl w-full p-4">
        <div className = "mx-auto w-fit">Thanks for visiting!</div>
        </footer>
  </div>
  )
}