import React from 'react'
import AboutImg from '../assets/about.png'

const About = ({RevealOnScroll}) => {
    return (
        <>
            <section className='bg-primary opacity-95' id='about'>
            <RevealOnScroll>
                <div className='flex flex-col md:flex-row px-5 py-32 container mx-auto justify-center'>
                    <div className='py-5 px-10 md:w-1/2'>
                        <img src={AboutImg} alt='hero' />
                    </div>

                    <div className='md:w-1/2 flex justify-center'>
                        <div className='flex flex-col justify-center px-10 py-10'>
                            <h1 className='text-white font-bold md:text-4xl text-2xl font-list-font border-b-4 border-secondary md:w-[170px] w-[120px]'>About Me</h1>
                            <ul className='list-none text-white'>
                                <li>
                                    <p className='text-white text-justify md:text-2xl text-md font-list-font mt-10'>I'm <span className='font-bold'>Duraimurugan H</span>, a passionate web developer with a background in <span className='font-bold'>Instrumentation Engineering</span>. My journey began in the banking sector, where I worked as a <span className='font-bold'>Relationship Manager</span> in <span className='font-bold'>City Union Bank, Bangalore.</span></p>
                                </li>
                                <li>
                                    <p className='text-white text-justify md:text-2xl text-md font-list-font mt-7'> My passion for the technology led me to transition into web development, where I gained expertise in <span className='font-bold'>HTML, CSS, JavaScript, ReactJS, NodeJS, MongoDB, MySQL </span> and more. </p>
                                </li>
                                <li>
                                    <p className='text-white text-justify md:text-2xl text-md font-list-font mt-7'>I'm eager to contribute my diverse skill set and enthusiasm to dynamic teams in the tech industry.</p>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
               </RevealOnScroll>
            </section>
        </>
    )
}

export default About