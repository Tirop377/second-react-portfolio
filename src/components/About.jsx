
const About = () => {
  return (
    <div name='about' className="bg-[#0a192f] w-full h-screen text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] px-4 w-full grid grid-cols-2 gap-8">
                <div className="sm:text-right pb-8 pl-4">
                    <p className="text-4xl font-bold inline border-b-4 border-b-pink-600">About</p>
                </div>
                <div></div>
            </div>
            <div className="max-w-[1000px] w-full px-4 grid sm:grid-cols-2 gap-8">
                <div>
                    <p className="sm:text-right text-4xl font-bold ">Hi. I,m Kevin, nice to meet you. Please take a look around.</p>
                </div>
                <div>
                    <p >
                        I am passionate about building software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to enterprice corperations. What would you do if you had a software expert available to build?
                    </p>
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default About
