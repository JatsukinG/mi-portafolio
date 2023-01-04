import React from 'react'

const links = [
  'Contact',
  'Skills',
  'Home',
  'Education',
  'Knowledge'
]

const Header = () => {
  return (
      <header
          className="fixed top-0 left-0 w-full text-white font-bold flex justify-center bg-orange-500/40 backdrop-blur-md z-10">
        {
          links.map((link) => (
              <p key={link} className="px-8 py-4 hover:bg-white/30 hover:cursor-pointer">{link}</p>
          ))
        }
      </header>
  )
}

export default Header