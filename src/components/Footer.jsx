
import { AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoLogoWhatsapp } from "react-icons/io";


const Footer = () => {
  return (
    <>
      <section className='py-10 px-10 bg-secondary shadow-md'>
        <div className='container mx-auto'>

          <div className='flex md:flex-row flex-col my-5 gap-7 mb-7'>

            <div className='flex flex-col md:items-start items-center w-full'>
              <h3 className='text-white font-list-font text-2xl font-bold mb-7'>PORTFOLIO</h3>
              <a href="#about" className='text-white font-list-font text-sm font-semibold mb-3'>DURAIMURUGAN H</a>
              <a href='#' className='text-white font-list-font text-sm font-semibold'>START LOOKING</a>
            </div>

            <div className='flex flex-col items-center justify-center w-full'>
              <h3 className='text-white font-list-font text-2xl font-bold mb-7 text-center'>MORE</h3>

              <div className='flex md:flex-row justify-center flex-col text-sm text-center text-white font-list-font gap-5 '>

                <a href='#about'>About</a>
                <a href='#skills'>Skills</a>
                <a href='#projects'>Projects</a>
                <a href='#qualification'>Qualification</a>
                <a href='#contact'>Contact</a>

              </div>
              </div>

            <div className='flex flex-col w-full'>
              <h3 className='text-white font-list-font text-2xl text-center font-bold mb-7'>PING ME</h3>

              <div className='flex flex-row text-gray-100 gap-7 drop-shadow-md px-16 items-center justify-center'>
                <a href='mailto:hduraimurugan@gmail.com' target="_blank" className='btn-icons'><BiLogoGmail size={25} /></a>
                <a href='https://www.linkedin.com/in/duraimurugan16/' target="_blank" className='btn-icons'><FaLinkedin size={25} /></a>
                <a href='https://wa.link/dzqc74' target="_blank" className='btn-icons'><IoLogoWhatsapp size={25} /></a>
                {/* <a href='https://github.com/hduraimurugan' target="_blank" className='btn-icons'><AiOutlineGithub size={25} /></a> */}
              </div>

            </div>

          </div>

          <div className='text-gray-400 font-list-font text-center flex justify-center items-center'>
            <a href="https://github.com/hduraimurugan" target="_blank" className="hover:text-gray-200">&copy;Duraimurugan</a> Portfolio 2024
            </div>
        </div>
      </section>
    </>
  )
}

export default Footer