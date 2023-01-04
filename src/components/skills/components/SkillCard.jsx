import { useState } from 'react'
import { VscDebugBreakpointLog } from 'react-icons/vsc'

const SkillCard = ({children, text, level}) => {
  const [isHover, setIsHover] = useState(false)

  const mouseOver = () => setIsHover(true)
  const mouseOut = () => setIsHover(false)

  return (
      <div
          className="relative flex justify-between items-center bg-white/20 rounded-2xl md:hover:scale-125 hover:scale-110 hover:bg-white/30 duration-500"
          onMouseOver={mouseOver}
          onMouseOut={mouseOut}
      >
        {
          <span className="p-6">{children}</span>
        }
        { isHover &&
            <>
              <p className="absolute w-full bottom-full uppercase text-white text-xs text-center mb-2 font-bold">
                {text}
              </p>
              <div className="absolute w-full mt-2 top-full flex justify-between">
                {
                [1,2,3,4,5].map(n=>(
                    <VscDebugBreakpointLog size={15} color={n<=level ? "orange" : "white"}/>
                  ))
                }
              </div>
            </>
        }
      </div>
  )
}

export default SkillCard