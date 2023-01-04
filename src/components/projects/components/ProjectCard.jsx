import { useState } from 'react'
import { BiWorld } from "react-icons/bi"
import { AiFillGithub } from "react-icons/ai"

const ProjectCard = ({project}) => {
  const [isHover, setIsHover] = useState(false)

  const mouseOver = () => setIsHover(true)
  const mouseOut = () => setIsHover(false)

  return (
      <div className="relative w-80 rounded-xl overflow-hidden" onMouseOver={mouseOver} onMouseOut={mouseOut}>
        <img src={project.img} alt="#" className={`w-full rounded-xl ${isHover && "scale-110"} duration-500`}/>
        {
            isHover &&
            <div className="absolute top-0 right-0 w-full h-full bg-black/30 backdrop-blur-sm flex justify-center items-center">
              <a href={project.link} target="_blank" className="rounded-3xl border px-4 py-2 border-black font-bold flex items-center gap-3">
                <BiWorld size={20} />
                Visit
              </a>
              <a href={project.codeLink} target="_blank" className="rounded-3xl border px-4 py-2 border-black font-bold flex items-center ml-4 gap-3">
                <AiFillGithub size={20} />
                View Code
              </a>
            </div>
        }
      </div>
  )
}

export default ProjectCard