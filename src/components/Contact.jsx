import { FaArrowRightLong } from "react-icons/fa6";

const Contact = () => {
  return (
    <div name='contact' className="w-full h-screen bg-[#0a192f] flex justify-center items-center p-4">
        <form action="" method="POST" className="w-full max-w-[680px] flex flex-col mx-auto ">
            <div className="pb-8">
                <p className='text-4xl font-bold border-b-4 inline  border-pink-600 text-gray-300'>Contact </p>
                <p className="py-4 text-gray-300">Submit the form below or shoot me an email <span> <FaArrowRightLong className="inline"/> </span> kevinbiwott83@gmail.com</p>
            </div>

            <input type="text" className="bg-[#ccd6f6]" placeholder="Name" name="name" />
            <input type="email" name="email" className="my-4 p-2 bg-[#ccd6f6]" placeholder="Email" />
            <textarea name="message" rows={10} placeholder="Message" className="p-2 bg-[#ccd6f6]"></textarea>
            <button className="text-white my-8 mx-auto py-3 px-4 border-2 border-white hover:bg-pink-600 hover:border-pink-600 ">Let&#39;s Colaborate</button>
        </form>
      
    </div>
  )
}

export default Contact
