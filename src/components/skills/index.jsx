import { useEffect } from "react"
import SkillCard from './components/SkillCard.jsx'
import { FaGitAlt, FaReact } from 'react-icons/fa'
import { SiJavascript, SiNextdotjs, SiTailwindcss, SiThreedotjs, SiTypescript } from 'react-icons/si'
import { AiFillGithub } from 'react-icons/ai'
import { DiCss3, DiHtml5 } from "react-icons/di"
import { useInView } from "react-intersection-observer"
import { useSetRecoilState } from "recoil"
import headerOptionState from "../../atoms/headerOptionState.js"

const skills = [
  {
    title: 'html',
    icon: <DiHtml5 size={30} color="#F33C1A"/>,
    level: 4
  },
  {
    title: 'css',
    icon: <DiCss3 size={30} color="#1B59F4"/>,
    level: 4
  },
  {
    title: 'Javascript',
    icon: <SiJavascript size={30} color="yellow"/>,
    level: 4
  },
  {
    title: 'Typescript',
    icon: <SiTypescript size={30} color="#3293FF"/>,
    level: 4
  },
  {
    title: 'React',
    icon: <FaReact size={30} color="cyan"/>,
    level: 4
  },
  {
    title: 'Three js',
    icon: <SiThreedotjs size={30} color="white"/>,
    level: 2
  },
  {
    title: 'Next js',
    icon: <SiNextdotjs size={30} color="white"/>,
    level: 3
  },
  {
    title: 'Git',
    icon: <FaGitAlt size={30} color="#DF3625"/>,
    level: 4
  },
  {
    title: 'Git Hub',
    icon: <AiFillGithub size={30} color="black"/>,
    level: 4
  },
  {
    title: 'Tailwind',
    icon: <SiTailwindcss size={30} color="cyan"/>,
    level: 5
  },
]

const Skills = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const setHeaderOption = useSetRecoilState(headerOptionState)

  useEffect(()=>{
    if(inView)
      setHeaderOption("Skills")
  }, [inView])

  return (
      <div ref={ref} className="w-full h-full flex flex-col items-center justify-center" id="Skills">
        <h2 className="text-4xl text-white py-12">Skills</h2>
        <div className="md:w-3/4 md:gap-24 gap-10 flex justify-center items-center flex-wrap">
          {
            skills.map(skill => (
                <SkillCard key={skill.title} text={skill.title} level={skill.level}>
                  {
                    skill.icon
                  }
                </SkillCard>
            ))
          }
        </div>
      </div>
  )
}

export default Skills