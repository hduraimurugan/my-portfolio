// import React from 'react';
// import HeroImg from '../assets/hero.png';
// import Hero2Img from '../assets/hero2.png';
import Hero3Img from '../assets/hero3.png';
// import bgImg from '../assets/bg.gif';
import { AiOutlineLinkedin, AiOutlineGithub, AiOutlineMedium } from "react-icons/ai";
import { TbMessage } from "react-icons/tb";
import { IoMdCloudDownload } from "react-icons/io";



const Hero = () => {
    return (
        <>
            <section
                className='px-10 py-40 bg-secondary '
                // style={{
                //     backgroundImage: `url(${bgImg})`,
                //     backgroundSize: "cover",
                //     backgroundRepeat: "no-repeat",
                // }}
                id='hero'
            >
                <div className='flex flex-col md:flex-row justify-center container mx-auto'>

                    <div className='flex md:flex-row flex-col justify-center items-center md:w-1/2'>
                        <div className='md:flex md:flex-col text-gray-100 gap-7 drop-shadow-md px-16 items-center justify-center hidden'>
                            <a href='https://medium.com/@hduraimurugan/from-banking-to-coding-my-journey-of-passion-and-perseverance-22ecc02b665a' target="_blank" className='btn-icons'><AiOutlineMedium size={32} /></a>
                            <a href='https://www.linkedin.com/in/duraimurugan16/' target="_blank" className='btn-icons'><AiOutlineLinkedin size={32} /></a>
                            <a href='https://github.com/hduraimurugan' target="_blank" className='btn-icons'><AiOutlineGithub size={32} /></a>
                        </div>

                        <div className='flex flex-col mt-10 mb-10'>
                            <div className='text-white font-list-font drop-shadow-md w-max'>
                                <h1 className='text-indigo-300 md:text-4xl text-2xl font-extrabold mb-3'>
                                    Hi,
                                </h1>
                                <h1 className='animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 md:text-5xl text-3xl text-white  font-list-font font-bold'>
                                    It's Duraimurugan H,</h1>

                                <p className='md:text-4xl text-xl mt-3'>
                                    I am a <span className='text-indigo-300 md:text-4xl text-2xl font-extrabold'>MERN</span> stack Developer
                                </p>
                            </div>

                            <div className='flex justify-center items-center mt-10'>
                                <p className='md:text-xl font-list-font drop-shadow-md text-white text-justify'>I blend creativity and code to build web applications that not only function seamlessly but leave a lasting impression. <br/>Let’s build and learn something extraordinary together!</p>
                            </div>

                            <div className='flex gap-5 mt-7 text-white drop-shadow-md md:invisible visible'>

                                <a href='https://medium.com/@hduraimurugan/from-banking-to-coding-my-journey-of-passion-and-perseverance-22ecc02b665a' target="_blank" className='btn-icons'><AiOutlineMedium size={32} /></a>
                                <a href='https://www.linkedin.com/in/duraimurugan16/' target="_blank" className='btn-icons'><AiOutlineLinkedin size={32} /></a>
                                <a href='https://github.com/hduraimurugan' target="_blank" className='btn-icons'><AiOutlineGithub size={32} /></a>

                                {/* <a href='https://x.com/hduraimurugan16' target="_blank" className='hover:text-indigo-400'><AiOutlineTwitter size={34} /></a> */}
                                {/* <a href='https://www.instagram.com/duraimurugan_16/' target="_blank" className='hover:text-indigo-400'><AiOutlineInstagram size={34} /></a> */}
                            </div>


                            <div className='flex md:justify-start justify-center drop-shadow-md mt-10'>
                                <div className='flex gap-2 items-center font-bold'>
                                    <a className='btn-prj font-list-font text-md py-3 px-5 rounded-full flex gap-1 items-center' href='#contact'>Contact <TbMessage size={25} /></a>
                                    <a className='btn-prj font-list-font text-md py-3 px-5 rounded-full flex gap-1 items-center'
                                        href='https://docs.google.com/document/d/1nzY9FRHrUO1ORzvCTA9O5vb1bOvDWCdxEhAUn4T1Pg8/edit'
                                        target='_blank'
                                    >Resume <IoMdCloudDownload size={25} /></a>
                                </div>
                            </div>

                        </div>

                    </div>

                    <div className='flex items-center justify-center md:w-1/3'>
                        {/* <img className='mix-blend-lighten' src={HeroImg} alt='hero' /> */}
                        <div className='magicpattern mix-blend-lighten md:relative'>
                            <img className='img-fluid md:absolute md:bottom-12' src={Hero3Img} alt='hero'></img>
                        </div>

                    </div>


                </div>

            </section>
        </>
    )
}

export default Hero;
