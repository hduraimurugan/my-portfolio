import React from 'react';
import HeroImg from '../assets/hero.png';
import Hero2Img from '../assets/hero2.png';
import Hero3Img from '../assets/hero3.png';
import bgImg from '../assets/bg.gif';
import { AiOutlineTwitter, AiOutlineLinkedin, AiOutlineGithub, AiOutlineMedium, AiOutlineInstagram } from "react-icons/ai";

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
                    <h1 className='text-white md:text-6xl text-3xl font-hero-font drop-shadow-md'>
                        <span className='text-indigo-300 md:text-6xl text-5xl font-extrabold'>
                            Hi,
                        </span>
                        <br /> It's <span className='text-gray-100 font-bold'>Duraimurugan H</span>
                        <p className='md:text-4xl text-2xl mt-2'>
                            I am a <span className='text-indigo-300 md:text-5xl font-extrabold'>MERN</span> stack Developer
                        </p>
                    </h1>

                    <div className='flex gap-5 mt-16 text-white drop-shadow-md'>
                        <a href='https://medium.com/@hduraimurugan/from-banking-to-coding-my-journey-of-passion-and-perseverance-22ecc02b665a' target="_blank" className='hover:text-indigo-400'><AiOutlineMedium size={34} /></a>
                        <a href='https://www.linkedin.com/in/duraimurugan16/' target="_blank" className='hover:text-indigo-400'><AiOutlineLinkedin size={34} /></a>
                        <a href='https://github.com/hduraimurugan' target="_blank" className='hover:text-indigo-400'><AiOutlineGithub size={34} /></a>
                        {/* <a href='https://x.com/hduraimurugan16' target="_blank" className='hover:text-indigo-400'><AiOutlineTwitter size={34} /></a> */}
                        {/* <a href='https://www.instagram.com/duraimurugan_16/' target="_blank" className='hover:text-indigo-400'><AiOutlineInstagram size={34} /></a> */}
                    </div>
                </div>

                <div className='py-5 md:w-1/3'>
                    <img className='mix-blend-lighten' src={Hero2Img} alt='hero' />
                </div>
            </section>
        </>
    )
}

export default Hero;
