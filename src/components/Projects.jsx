import React from 'react'
import zamazonImg from '../assets/zamazon.png'
import chessApiImg from '../assets/chessApi.png'
import routerDomImg from '../assets/routerDom.png'
import shipKartImg from '../assets/shipKart.png'
import LBMSImg from '../assets/LBMS.png'
import reduxImg from '../assets/reduxKart.png'
import reactImg from "../assets/reactQuiz.png"
import netflixImg from "../assets/netflix.png"
import UrlShortner from '../assets/URLShortner.png'
import JobPortal from '../assets/JobPortal.png'
import TwitterImg from '../assets/Twitter.png'
import ChatAppImg from '../assets/chatApp.png'

import { FaLink } from "react-icons/fa6";
import { FaCode } from "react-icons/fa";
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer'
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { Link } from 'react-router-dom'


const Projects = ({ RevealOnScroll }) => {

    const { ref, inView } = useInView({
        triggerOnce: true, // The animation runs only once when it first comes into view
        threshold: 0.1, // Animation triggers when 10% of the element is visible
    });

    const projects = [
        {
            imgSrc: JobPortal,
            title: "College Placement Portal",
            description: "College Placement portal is a MERN Full stack project",
            liveLink: "https://cpp-frontend.vercel.app/",
            codeLink: "https://github.com/hduraimurugan/cpp_frontend/",
            codesUsed: ["React Js", "Redux", "NodeJs", "MongoDB"],
        },
        {
            imgSrc: TwitterImg,
            title: "X Clone App",
            description: "MERN Fullstack X Clone App",
            liveLink: "https://twitter-clone-app-fgba.onrender.com/",
            codeLink: "https://github.com/hduraimurugan/twitter-clone-app",
            codesUsed: ["React Js", "NodeJs", "MongoDB", "React Query"],
        },
        {
            imgSrc: ChatAppImg,
            title: "Chat App",
            description: "MERN Fullstack Chat App",
            liveLink: "https://chat-app-jvvo.onrender.com/",
            codeLink: "https://github.com/hduraimurugan/chat-app",
            codesUsed: ["React Js", "NodeJs", "MongoDB", "Zustand", "Socket.io"],
        },
        {
            imgSrc: netflixImg,
            title: "Netflix Clone App",
            description: "Netflix Clone App using ReactJs, Firebase",
            liveLink: "https://dubbflix-clone-for-edu-purpose-durai.vercel.app/",
            codeLink: "https://github.com/hduraimurugan/netflix-clone",
            codesUsed: ["React Js", "Firebase"],
        },
        {
            imgSrc: UrlShortner,
            title: "URL Shortener",
            description: "Url shortener App with Authentication",
            liveLink: "https://url-shortene.vercel.app//",
            codeLink: "https://github.com/hduraimurugan/Login_URL_Shortener_FE",
            codesUsed: ["React Js", "Node Js", "Mongo DB", "Express Js"],
        },
        {
            imgSrc: reactImg,
            title: "React Quiz App",
            description: "React Quiz App built using ReactJs, ContextApi",
            liveLink: "https://quiz-context-api.vercel.app/",
            codeLink: "https://github.com/hduraimurugan/quiz-ContextAPI-frontend",
            codesUsed: ["React Js", "Context API"],
        },
        {
            imgSrc: shipKartImg,
            title: "Ship-Kart",
            description: "Ship-Kart is an E-commerce webpage built using ReactJs",
            liveLink: "https://cart-context-api-pied.vercel.app/",
            codeLink: "https://github.com/hduraimurugan/cart-contextAPI",
            codesUsed: ["React Js", "Context API", "Tailwind CSS"],
        },
        // {
        //     imgSrc: zamazonImg,
        //     title:"Zamazon",
        //     description: "Zamazon is an E-commerce webpage built using ReactJs",
        //     liveLink: "https://incandescent-vacherin-675899.netlify.app/",
        //     codeLink: "https://github.com/hduraimurugan/shopping-cart",
        //     codesUsed: ["React Js", "Bootstrap"],

        // },
        // {
        //     imgSrc: routerDomImg,
        //     description: "It is a Courses webpage built using React Router Dom",
        //     liveLink: "https://react-router-task-jdldaldada.netlify.app/",
        //     codeLink: "https://github.com/hduraimurugan/react-router",
        //     codesUsed: ["React Js", "React-router-Dom", "Bootstrap"],

        // },
        // {
        //     imgSrc: reduxImg,
        //     description: "An E-commerce site built using ReactJs Redux toolkit",
        //     liveLink: "https://redux-shopping-cart-mauve.vercel.app/",
        //     codeLink: "https://github.com/hduraimurugan/redux-shopping-cart",
        //     codesUsed: ["React Js", "Redux", "Bootstrap"],

        // },
        // {
        //     imgSrc: LBMSImg,
        //     description: "Library Admin dashboard built using ReactJs Formik",
        //     liveLink: "https://verdant-centaur-216ddb.netlify.app/",
        //     codeLink: "https://github.com/hduraimurugan/formik_task",
        //     codesUsed: ["React Js", "Formik", "Axios"],

        // },
        {
            imgSrc: chessApiImg,
            title: "Chess Leaderboard",
            description: "It is a Leaderboard website built using Javascript",
            liveLink: "https://ornate-nasturtium-89e860.netlify.app/",
            codeLink: "https://github.com/hduraimurugan/chess-leaderboard",
            codesUsed: ["HTML", "CSS", "Javascript", "Bootstrap"],

        },

    ];


    return (
        <>
            <section className='bg-primary opacity-95 text-white' id='projects'>

                <RevealOnScroll>
                    <div className='flex flex-col px-10 py-32 justify-center container mx-auto'>
                        <div className='py-5 md:px-24 px-10 md:w-full'>
                            <div className='flex flex-col items-center justify-center'>
                                <h1 className='text-white font-bold md:text-4xl text-2xl font-list-font border-b-0 border-primary md:w-[140px] w-[100px]'>Projects</h1>
                                <p className='text-white md:text-2xl text-xl font-list-font mt-10'>Here are some of my projects, Check them out...</p>
                            </div>
                        </div>

                        <div className='py-5 md:w-full ' ref={ref}>

                            <div className='flex flex-col md:flex-row flex-wrap items-center md:justify-center px-10  gap-7 parent-container'>
                                <Carousel
                                    opts={{
                                        align: "start",
                                    }}
                                    plugins={[
                                        Autoplay({
                                            delay: 4000,
                                        }),
                                    ]}
                                    className="w-full"
                                >
                                    <CarouselContent>
                                        {projects.map((project, index) => (
                                            <CarouselItem key={index} className="md:basis-1/3 lg:basis-1/3">
                                                <motion.div
                                                    className="box"
                                                    initial={{ opacity: 0, y: 100 }}
                                                    animate={inView ? { opacity: 1, y: 0 } : {}} // Animates only when in view
                                                    exit={{ opacity: 0, y: -100 }}
                                                    transition={{ type: "spring", stiffness: 400, damping: 10, duration: 0.5, delay: index * 0.1 }}
                                                >
                                                    <a href={project.liveLink} target='_blank'>
                                                        <motion.div className='bg-border-prj card-hoverr-eff card'
                                                            whileHover={{ scale: 1.03 }}
                                                            whileTap={{ scale: 0.9 }}
                                                            transition={{ type: "spring", stiffness: 200, damping: 10 }}
                                                            key={index}>

                                                            <div className='relative' >
                                                                <img
                                                                    className='md:h-[200px] h-[160px] w-full rounded-lg object-cover img-prj'
                                                                    src={project.imgSrc}
                                                                />
                                                                <div className='project-desc card-content flex flex-col justify-center gap-3 px-3 py-3 rounded-lg'>
                                                                    <div>
                                                                        <p className='text-center text-white md:text-2xl text-md font-list-font'>
                                                                            {project.description}
                                                                        </p>
                                                                    </div>
                                                                    <div className='flex justify-center md:gap-7 gap-3'>

                                                                        <div className='transition duration-300 ease-in-out'>
                                                                            <a href={project.liveLink} target='_blank' rel='noopener noreferrer'>
                                                                                <motion.div
                                                                                    className="box"
                                                                                    whileHover={{ scale: 1.05 }}
                                                                                    whileTap={{ scale: 0.9 }}
                                                                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                                                                >
                                                                                    <button className='btn-prj md:text-lg text-sm hover:shadow-lg'>
                                                                                        <FaLink size={28} />
                                                                                    </button>
                                                                                </motion.div>
                                                                            </a>
                                                                        </div>
                                                                        <div className='transition duration-300 ease-in-out'>
                                                                            <a href={project.codeLink} target='_blank' rel='noopener noreferrer'>
                                                                                <motion.div
                                                                                    className="box"
                                                                                    whileHover={{ scale: 1.05 }}
                                                                                    whileTap={{ scale: 0.9 }}
                                                                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                                                                >
                                                                                    <button className='btn-prj md:text-lg text-sm hover:shadow-lg'>
                                                                                        <FaCode size={28} />
                                                                                    </button>
                                                                                </motion.div>
                                                                            </a>
                                                                        </div>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div>
                                                                {project.title &&
                                                                    <h1 className='p-3 text-white md:text-2xl text-xl font-list-font font-semibold mt-1 drop-shadow-md'>{project.title}</h1>}
                                                            </div>
                                                            <div className='px-3 flex flex-row flex-wrap gap-2'>
                                                                {project.codesUsed.map((code, idx) => (
                                                                    <span key={idx} className='text-gray-200 md:text-md text-xs font-semibold font-hero-font bg-slate-900 border-primary-2 p-2 rounded-lg shadow-lg mr-2'>{code}</span>
                                                                ))}
                                                            </div>

                                                        </motion.div>
                                                    </a>
                                                </motion.div>
                                            </CarouselItem>
                                        ))}
                                    </CarouselContent>
                                    <CarouselPrevious className="bg-slate-900" />
                                    <CarouselNext className="bg-slate-950" />
                                </Carousel>

                                {/* {projects.map((project, index) => (

                                    <div className='bg-border-prj card-hoverr-eff card' key={index}>
                                        <div className='relative' >
                                            <img
                                                className='md:h-[200px] h-[160px] w-full rounded-lg object-cover img-prj'
                                                src={project.imgSrc}
                                            />
                                            <div className='project-desc card-content flex flex-col justify-center gap-3 px-3 py-3 rounded-lg'>
                                                <div>
                                                    <p className='text-center text-white md:text-2xl text-md font-list-font'>
                                                        {project.description}
                                                    </p>
                                                </div>
                                                <div className='flex justify-center md:gap-7 gap-3'>

                                                    <div className='transition duration-300 ease-in-out'>
                                                        <a href={project.liveLink} target='_blank' rel='noopener noreferrer'>
                                                            <button className='btn-prj md:text-lg text-sm hover:shadow-lg'>
                                                                <FaLink size={28} />
                                                            </button>
                                                        </a>
                                                    </div>
                                                    <div className='transition duration-300 ease-in-out'>
                                                        <a href={project.codeLink} target='_blank' rel='noopener noreferrer'>
                                                            <button className='btn-prj md:text-lg text-sm hover:shadow-lg'>
                                                                <FaCode size={28} />
                                                            </button>
                                                        </a>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div>
                                            {project.title &&
                                                <h1 className='p-3 text-white md:text-2xl text-xl font-list-font font-semibold mt-1 drop-shadow-md'>{project.title}</h1>}
                                        </div>
                                        <div className='px-3 flex flex-row flex-wrap gap-2'>
                                            {project.codesUsed.map((code, idx) => (
                                                <span key={idx} className='text-gray-200 md:text-md text-sm font-semibold font-hero-font bg-indigo-500 border-primary-2 p-2 rounded-lg shadow-lg mr-2'>{code}</span>
                                            ))}
                                        </div>

                                    </div>
                                ))} */}

                            </div>

                        </div>
                    </div>
                </RevealOnScroll>
            </section>
        </>
    )
}

export default Projects