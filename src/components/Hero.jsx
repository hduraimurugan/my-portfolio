import React from 'react'
import HeroImg from '../assets/hero.png'
import { AiOutlineTwitter, AiOutlineLinkedin, AiOutlineGithub, AiOutlineMedium, AiOutlineInstagram } from "react-icons/ai";


const Hero = () => {
    return (
        <>
            <section className='flex flex-col md:flex-row px-10 py-40 bg-secondary justify-center' id='hero'>

                <div className='md:w-1/2 flex flex-col mt-10 mb-10'>
                    <h1 className='text-white md:text-6xl text-4xl font-hero-font'><span className='text-black'>Hi, 
                        </span><br/> Its <span className=' text-black'>Duraimurugan H</span>
                        <p className='md:text-4xl text-2xl mt-2'>I am a <span className='text-black font-bold'>MERN</span> stack Developer</p>
                    </h1>

                    <div className='flex gap-5 mt-16'>
                        <a href='https://medium.com/@hduraimurugan/from-banking-to-coding-my-journey-of-passion-and-perseverance-22ecc02b665a' target="_blank" className='hover:text-white'><AiOutlineMedium size={34} /></a>
                        <a href='https://www.linkedin.com/in/duraimurugan16/' target="_blank" className='hover:text-white'><AiOutlineLinkedin size={34} /></a>
                        <a href='https://github.com/hduraimurugan' target="_blank" className='hover:text-white'><AiOutlineGithub size={34} /></a>
                        <a href='https://x.com/hduraimurugan16' target="_blank" className='hover:text-white'><AiOutlineTwitter size={34} /></a>
                        <a href='https://www.instagram.com/duraimurugan_16/' target="_blank" className='hover:text-white'><AiOutlineInstagram size={34} /></a>
                    </div>

                </div>

                <div className='py-5 md:w-1/3'>
                    <img src={HeroImg} alt='hero' />
                </div>

            </section>
        </>
    )
}

export default Hero