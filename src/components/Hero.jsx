// import React from 'react';
// import HeroImg from '../assets/hero.png';
// import Hero2Img from '../assets/hero2.png';
import Hero3Img from '../assets/hero3.png';
// import bgImg from '../assets/bg.gif';
import { AiOutlineGithub, AiOutlineMedium } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { TbMessage } from "react-icons/tb";
import { IoMdCloudDownload } from "react-icons/io";

import { motion } from "framer-motion";



const Hero = () => {
    return (
        <>
            <section
                className='px-10 md:py-40 py-20 bg-secondary opacity-95'
                // style={{
                //     backgroundImage: `url(${bgImg})`,
                //     backgroundSize: "cover",
                //     backgroundRepeat: "no-repeat",
                // }}
                id='hero'
            >
                <div className='flex flex-col md:flex-row md:mt-1 mt-16 justify-center container mx-auto'>

                    <div className='flex md:flex-row flex-col justify-center items-center md:w-1/2'>
                        <div className='md:flex md:flex-col text-gray-100 gap-7 drop-shadow-md px-16 items-center justify-center hidden'>
                            <a href='https://www.linkedin.com/in/duraimurugan16/' target="_blank" className='btn-icons'><FaLinkedin size={30} /></a>
                            <a href='https://github.com/hduraimurugan' target="_blank" className='btn-icons'><AiOutlineGithub size={30} /></a>
                            <a href='https://medium.com/@hduraimurugan/from-banking-to-coding-my-journey-of-passion-and-perseverance-22ecc02b665a' target="_blank" className='btn-icons'><AiOutlineMedium size={30} /></a>
                        </div>

                        <div className='flex flex-col mt-10 mb-10'>
                            <div className='text-white font-list-font drop-shadow-md w-max'>
                                <h1 className='text-indigo-300 md:text-4xl text-2xl font-extrabold mb-3'>
                                    Hi,
                                </h1>
                                <h1 className='animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 md:text-5xl text-3xl text-white  font-list-font font-bold'>
                                    It&apos;s Duraimurugan H,</h1>

                                <p className='md:text-4xl text-xl mt-3'>
                                    I am a <span className='text-indigo-300 md:text-4xl text-2xl font-extrabold'>MERN</span> stack Developer
                                </p>
                            </div>

                            <div className='flex justify-center items-center mt-10'>
                                <p className='md:text-xl font-list-font drop-shadow-md text-white text-justify'>I blend creativity and code to build web applications that not only function seamlessly but leave a lasting impression. <br />Let’s build and learn something extraordinary together!</p>
                            </div>

                            <div className='flex gap-5 mt-7 text-white drop-shadow-md md:hidden'>

                                <a href='https://www.linkedin.com/in/duraimurugan16/' target="_blank" className='btn-icons'><FaLinkedin size={25} /></a>
                                <a href='https://github.com/hduraimurugan' target="_blank" className='btn-icons'><AiOutlineGithub size={25} /></a>
                                <a href='https://medium.com/@hduraimurugan/from-banking-to-coding-my-journey-of-passion-and-perseverance-22ecc02b665a' target="_blank" className='btn-icons'><AiOutlineMedium size={25} /></a>

                                {/* <a href='https://x.com/hduraimurugan16' target="_blank" className='hover:text-indigo-400'><AiOutlineTwitter size={34} /></a> */}
                                {/* <a href='https://www.instagram.com/duraimurugan_16/' target="_blank" className='hover:text-indigo-400'><AiOutlineInstagram size={34} /></a> */}
                            </div>


                            <div className='flex justify-start drop-shadow-md mt-10'>
                                <div className='flex gap-2 items-center font-bold'>
                                    <motion.div
                                        className="box"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                    <a className='btn-prj font-list-font text-md py-3 px-5 rounded-full flex gap-1 items-center' href='#contact'>Contact <TbMessage size={25} /></a>
                                    </motion.div>
                                    <motion.div
                                        className="box"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    >
                                    <a className='btn-prj font-list-font text-md py-3 px-5 rounded-full flex gap-1 items-center'
                                        href='https://docs.google.com/document/d/1nzY9FRHrUO1ORzvCTA9O5vb1bOvDWCdxEhAUn4T1Pg8/edit'
                                        target='_blank'
                                    >Resume <IoMdCloudDownload size={25} /></a>
                                    </motion.div>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='flex items-center justify-center md:w-1/3'>
                        <div className='flex magicpattern mix-blend-lighten md:relative'>
                            <img className='h-auto max-w-full md:absolute md:bottom-12' src={Hero3Img} alt='hero' />
                        </div>
                    </div>

                </div>

            </section>
        </>
    )
}

export default Hero;
