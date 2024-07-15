import { FaArrowRightLong } from "react-icons/fa6";

const Main = () => {
  return (
    <div name='main' className="bg-[#0a192f] w-full h-screen ">
        {/* Container */}
        <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
            <p className="text-pink-600">Hi, my name is</p>
            <h1 className="text-4xl sm:text-7xl font-bold text-[#ccc6f6]">Kevin Biwott</h1>
            <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">I am a FullStack Developer.</h2>
            <p className="max-w-[700px] py-4 text-[#8892b0]">
                I am a full-stack deveolper specializing in building (and occasionally designing) exceptional digital experiences. Currently I am focused on building responsive full-stack web applications.
            </p>
            <div>
                <button className="flex gap-4 items-center text-white border-2 border-white px-6 py-3 hover:bg-pink-600 hover:border-pink-600 group duration-300">
                    View Work <span className="group-hover:rotate-90 duration-300">
                        <FaArrowRightLong/>
                    </span> 
                </button>
            </div>

        </div>
      
    </div>
  )
}

export default Main
