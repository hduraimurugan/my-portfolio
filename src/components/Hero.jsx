import React from 'react';
import HeroImg from '../assets/hero.png';
// import Hero2Img from '../assets/hero2.png';
import Hero3Img from '../assets/hero3.png';
import bgImg from '../assets/bg.gif';
import { AiOutlineTwitter, AiOutlineLinkedin, AiOutlineGithub, AiOutlineMedium, AiOutlineInstagram } from "react-icons/ai";
import { TbMessage } from "react-icons/tb";


const Hero = () => {
    return (
        <>
            <section
                className='flex flex-col md:flex-row px-10 py-40 bg-secondary justify-center'
                // style={{
                //     backgroundImage: `url(${bgImg})`,
                //     backgroundSize: "cover",
                //     backgroundRepeat: "no-repeat",
                // }}
                id='hero'
            >
                <div className='md:w-1/2 flex flex-col mt-10 mb-10'>
                    <div className='text-white md:text-6xl text-3xl font-list-font drop-shadow-md w-max'>
                        <h1 className='text-indigo-300 md:text-6xl text-5xl font-extrabold mb-3'>
                            Hi,
                        </h1>
                        <h1 className='animate-typing overflow-hidden whitespace-nowrap border-r-4 border-r-white pr-5 md:text-6xl text-3xl text-white  font-list-font font-bold'>
                            It's Duraimurugan H,</h1>

                        <p className='md:text-4xl text-xl mt-3'>
                            I am a <span className='text-indigo-300 md:text-5xl text-2xl font-extrabold'>MERN</span> stack Developer
                        </p>
                    </div>

                    <div className='flex gap-5 mt-16 text-white drop-shadow-md'>
                        <a href='https://medium.com/@hduraimurugan/from-banking-to-coding-my-journey-of-passion-and-perseverance-22ecc02b665a' target="_blank" className='hover:text-indigo-400'><AiOutlineMedium size={34} /></a>
                        <a href='https://www.linkedin.com/in/duraimurugan16/' target="_blank" className='hover:text-indigo-400'><AiOutlineLinkedin size={34} /></a>
                        <a href='https://github.com/hduraimurugan' target="_blank" className='hover:text-indigo-400'><AiOutlineGithub size={34} /></a>
                        {/* <a href='https://x.com/hduraimurugan16' target="_blank" className='hover:text-indigo-400'><AiOutlineTwitter size={34} /></a> */}
                        {/* <a href='https://www.instagram.com/duraimurugan_16/' target="_blank" className='hover:text-indigo-400'><AiOutlineInstagram size={34} /></a> */}
                    </div>

                    <div className='drop-shadow-md mt-16'>
                        <div className='flex'>
                            <a className='btn-prj font-list-font text-xl p-3 px-6 rounded-full flex gap-1' href='#contact'>Contact Me <TbMessage size={25} /></a>
                        </div>
                    </div>
                </div>

                <div className='py-5 px-30 md:w-1/4'>
                    {/* <img className='mix-blend-lighten' src={HeroImg} alt='hero' /> */}
                    <div className='magicpattern mix-blend-lighten md:relative'>
                        <img className='img-fluid md:absolute md:bottom-12' src={Hero3Img} alt='hero'></img>
                    </div>

                </div>
            </section>
        </>
    )
}

export default Hero;
