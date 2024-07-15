import { useState } from 'react'
import Logo from '../assets/logo1.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin} from 'react-icons/fa'
import { FaXTwitter } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";
import {Link} from 'react-scroll'

const Navbar = () => { 
  const [nav, setNav] = useState(false);

  const handleClick = ()=>{
    setNav((prev)=>!prev);
  }


  return (
    <div className="w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div className='z-10'>
          <img src={Logo} alt="" style={{width: "50px"}} />
        </div> 

        {/* menu */}
        <ul className='hidden md:flex'>
          <li>
            <Link to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li>
            <Link to='skills' smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li>
            <Link to='work' smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li>
            <Link to='about' smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link to='contact' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      

        {/* Hambuger menu */}
        <button className='md:hidden z-10' onClick={handleClick}>
          {nav ? <FaTimes/> : <FaBars/>}
        </button>

        {/* Mobile Menu */}
        <ul className={nav ? 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center' : 'hidden'}>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='home' smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='skills' smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='work' smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='about' smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className='py-6 text-4xl'>
            <Link onClick={handleClick} to='contact' smooth={true} duration={500}>
              Contact
            </Link>
          </li>
        </ul> 

        {/* Social Icons  */}
        <div className='md:flex hidden fixed top-[35%] left-0'>
          <ul>
            <li className='flex items-center w-[160px] h-[60px]  ml-[-100px] hover:ml-[-10px] duration-300 bg-black '>
              <a href="#" className='flex justify-between items-center w-full'>
                 Github<FaGithub size={30}/> 
              </a> 
            </li>
            <li className='flex items-center w-[160px] h-[60px]  ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600 '>
              <a href="#" className='flex justify-between items-center w-full'>
                 LinkedIn<FaLinkedin size={30}/> 
              </a> 
            </li>
            <li className='flex items-center w-[160px] h-[60px]  ml-[-100px] hover:ml-[-10px] duration-300 bg-black '>
              <a href="#" className='flex justify-between items-center w-full'>
                 Twitter<FaXTwitter size={30}/> 
              </a> 
            </li>
            <li className='flex items-center w-[160px] h-[60px]  ml-[-100px] hover:ml-[-10px] duration-300 bg-white text-black '>
              <a href="#" className='flex justify-between items-center w-full'>
                 Mail<MdOutlineMailOutline size={30}/> 
              </a> 
            </li>
          </ul>
        </div>
    </div>
  )
}

export default Navbar
