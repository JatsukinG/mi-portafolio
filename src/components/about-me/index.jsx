import { useEffect } from "react"
import { useInView } from "react-intersection-observer"
import { useSetRecoilState } from "recoil"
import headerOptionState from "../../atoms/headerOptionState.js"

const AboutMe = () => {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const setHeaderOption = useSetRecoilState(headerOptionState)

  useEffect(()=>{
    if(inView)
      setHeaderOption("About-me")
  }, [inView])

  return (
      <div ref={ref} className="w-full h-full bg-gray-100 flex md:flex-row flex-col justify-around items-center" id="About-me">
        <h2 className="text-4xl font-bold">About me</h2>
        <p className="font-semibold text-center p-8">
          I studied Mechatronic Engineering, but I like so much the web programming
        </p>
      </div>
  )
}

export default AboutMe