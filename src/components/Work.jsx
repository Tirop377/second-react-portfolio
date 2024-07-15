import workImg from '../assets/workImg.jpeg'
import realestate from '../assets/realestate.jpg'

const Work = () => {
  return (
    <div name='work' className='w-full md:h-screen bg-[#0a192f] text-gray-300'>
        <div className='w-full h-full mx-auto max-w-[1000px] flex flex-col p-4 justify-center'>
            <div>
                <p className='text-4xl font-bold border-b-4 inline  border-pink-600'>Work </p>
                <p className='py-6'>\\ Check out some of my resent work</p>
            </div>

            {/* Projects Container */}
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div style={{backgroundImage:`url(${workImg})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>React JS Application</span>
                        <div className='pt-8 text-center'>
                            <a href="#">
                                <button className='text-center px-4 py-3 m-2 rounded-lg bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="#">
                                <button className='text-center px-4 py-3 m-2 rounded-lg bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage:`url(${realestate})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>React JS Application</span>
                        <div className='pt-8 text-center'>
                            <a href="#">
                                <button className='text-center px-4 py-3 m-2 rounded-lg bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="#">
                                <button className='text-center px-4 py-3 m-2 rounded-lg bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage:`url(${workImg})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>React JS Application</span>
                        <div className='pt-8 text-center'>
                            <a href="#">
                                <button className='text-center px-4 py-3 m-2 rounded-lg bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="#">
                                <button className='text-center px-4 py-3 m-2 rounded-lg bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage:`url(${realestate})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>React JS Application</span>
                        <div className='pt-8 text-center'>
                            <a href="#">
                                <button className='text-center px-4 py-3 m-2 rounded-lg bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="#">
                                <button className='text-center px-4 py-3 m-2 rounded-lg bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage:`url(${workImg})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>React JS Application</span>
                        <div className='pt-8 text-center'>
                            <a href="#">
                                <button className='text-center px-4 py-3 m-2 rounded-lg bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="#">
                                <button className='text-center px-4 py-3 m-2 rounded-lg bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

                <div style={{backgroundImage:`url(${realestate})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div">

                    {/* Hover Effects */}
                    <div className='opacity-0 group-hover:opacity-100 '>
                        <span className='text-2xl font-bold text-white tracking-wider'>React JS Application</span>
                        <div className='pt-8 text-center'>
                            <a href="#">
                                <button className='text-center px-4 py-3 m-2 rounded-lg bg-white text-gray-700 font-bold text-lg'>Demo</button>
                            </a>
                            <a href="#">
                                <button className='text-center px-4 py-3 m-2 rounded-lg bg-white text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
        </div>

        
      
    </div>
  )
}

export default Work
