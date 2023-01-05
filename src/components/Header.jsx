import React, { useState } from 'react'
import { BsFillPersonBadgeFill } from "react-icons/bs"
import { FiMenu } from "react-icons/fi"
import { AiOutlineCloseCircle } from "react-icons/all"
import { useRecoilValue } from "recoil"
import headerOptionState from "../atoms/headerOptionState.js"

const links = [
  'Home',
  'Skills',
  'About-me',
  'Projects',
]

const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const headerOption = useRecoilValue(headerOptionState)

  return (
      <nav className="fixed top-0 left-0 w-full text-white font-bold flex justify-between bg-orange-500/40 backdrop-blur-md z-10 shadow">
        <h3 className="flex items-center px-4 gap-4 md:text-base text-xs">
          <BsFillPersonBadgeFill size={20}/>
          Julian Trujillo
        </h3>
        <div className={`md:flex md:static absolute top-full ${isOpen ? "flex flex-col" : "hidden"} md:bg-transparent bg-orange-700 md:w-auto w-full`}>
          {
            links.map((link) => (
                <a
                    key={link}
                    href={`#${link}`}
                    className="relative px-8 py-4 text-center hover:bg-white/30 hover:cursor-pointer flex justify-center"
                    onClick={()=>setIsOpen(false)}>
                  {
                    headerOption === link &&
                    <span className="absolute bottom-2 bg-white h-1 rounded-xl md:w-3/4 w-12"></span>
                  }
                  {link}
                </a>
            ))
          }
        </div>
        <span className="md:hidden px-4 py-4 flex items-center">
          {
            isOpen ?
                <AiOutlineCloseCircle size={20} color="white" onClick={()=>setIsOpen(false)}/> :
                <FiMenu size={20} color="white" onClick={()=>setIsOpen(true)}/>
          }
        </span>
      </nav>
  )
}

export default Header