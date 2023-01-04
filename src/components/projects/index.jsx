import ProjectCard from "./components/ProjectCard.jsx"

const projects = [
  {
    link: "https://autmztn.vercel.app/",
    codeLink: "https://github.com/JatsukinG/autmztn",
    img: "/pagina1.png"
  },
  {
    link: "https://preeminent-centaur-482567.netlify.app/",
    img: "/pagina2.png"
  },
]

const Projects = () => {
  return (
      <div className="w-full h-full flex flex-col justify-center items-center" id="Projects">
        <h2 className="text-3xl text-white mb-16">Projects</h2>
        <div className="flex justify-center flex-wrap gap-10">
          {
            projects.map(project=>(
                <ProjectCard project={project}/>
            ))
          }
        </div>
      </div>
  )
}

export default Projects