import { useState } from 'react'
import Typed from "react-typed"

const Home = () => {
  const [typedCompleted, setTypedCompleted] = useState([])

  return (
      <div className="w-full h-full bg-bg1 md:bg-cover flex flex-col justify-center items-center">
        <h1 className="text-orange-800 md:text-5xl text-3xl font-bold mb-4">
          <Typed strings={["Hi, I'am Julian Trujillo"]} typeSpeed={40}
                 onComplete={() => setTypedCompleted([...typedCompleted, '*'])}/>
        </h1>
        {
            typedCompleted.length > 0 &&
            <p className="text-orange-900 text-xl mb-8">
              <Typed strings={["Frontend Developer"]} typeSpeed={40}
                     onComplete={() => setTypedCompleted([...typedCompleted, '*'])}/>
            </p>
        }
        {
            typedCompleted.length > 1 &&
            <span
                className="group relative inline-block text-md font-bold text-white focus:outline-none focus:ring">
                <span
                    className="absolute inset-0 border border-orange-700 group-active:border-orange-500 rounded-3xl"></span>
                <span className="block border border-orange-600 bg-orange-700 px-12 py-3 transition-transform
                active:border-orange-500 active:bg-orange-500 group-hover:-translate-x-1 group-hover:-translate-y-1 rounded-3xl">
                  Start
                </span>
              </span>
        }
      </div>
  )
}

export default Home