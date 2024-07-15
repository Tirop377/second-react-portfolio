import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Github from '../assets/github.png'
import Javascript from '../assets/javascript.png'
import Mongodb from '../assets/mongo.png'
import Node from '../assets/node.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'


const Skills = () => {
  return (
    <div name='skills' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        {/* Container */}
        <div className='w-full h-full mx-auto max-w-[1000px] flex flex-col p-4 justify-center'>
            <div>
                <p className='text-4xl font-bold border-b-4 inline  border-pink-600'>Skills</p>
                <p className='py-4'>\\ These are the technologies I&#39;ve worked with</p>
            </div>
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 text-center py-8 gap-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="html icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="html icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Javascript} alt="html icon" />
                    <p className='my-4'>JAVASCRIPT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={react} alt="html icon" />
                    <p className='my-4'>REACT</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Node} alt="html icon" />
                    <p className='my-4'>NODEJS</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={tailwind} alt="html icon" />
                    <p className='my-4'>TAILWIND</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Mongodb} alt="html icon" />
                    <p className='my-4'>MONGODB</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt="html icon" />
                    <p className='my-4'>GITHUB</p>
                </div>

            </div>

        </div>
      
    </div>
  )
}

export default Skills
