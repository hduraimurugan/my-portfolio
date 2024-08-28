import React from 'react'
import zamazonImg from '../assets/zamazon.png'
import chessApiImg from '../assets/chessApi.png'
import routerDomImg from '../assets/routerDom.png'
import shipKartImg from '../assets/shipKart.png'
import LBMSImg from '../assets/LBMS.png'
import reduxImg from '../assets/reduxKart.png'

const Projects = () => {

    const projects = [
        {
            imgSrc: shipKartImg,
            description: "Ship-Kart is an E-commerce webpage built using ReactJs",
            liveLink: "https://cart-context-api-pied.vercel.app/",
            codeLink: "https://github.com/hduraimurugan/cart-contextAPI",
            codesUsed: ["React Js", "Context API", "Tailwind CSS"],
        },
        {
            imgSrc: reduxImg,
            description: "An E-commerce site built using ReactJs Redux toolkit",
            liveLink: "https://redux-shopping-cart-mauve.vercel.app/",
            codeLink: "https://github.com/hduraimurugan/redux-shopping-cart",
            codesUsed: ["React Js", "Redux Toolkit", "Bootstrap"],

        },
        {
            imgSrc: LBMSImg,
            description: "Library Admin dashboard built using ReactJs Formik",
            liveLink: "https://verdant-centaur-216ddb.netlify.app/",
            codeLink: "https://github.com/hduraimurugan/formik_task",
            codesUsed: ["React Js", "Formik", "Axios"],

        },
        {
            imgSrc: zamazonImg,
            description: "Zamazon is an E-commerce webpage built using ReactJs",
            liveLink: "https://incandescent-vacherin-675899.netlify.app/",
            codeLink: "https://github.com/hduraimurugan/shopping-cart",
            codesUsed: ["React Js", "Bootstrap"],

        },
        {
            imgSrc: routerDomImg,
            description: "It is a Courses webpage built using React Router Dom",
            liveLink: "https://react-router-task-jdldaldada.netlify.app/",
            codeLink: "https://github.com/hduraimurugan/react-router",
            codesUsed: ["React Js", "React-Router-Dom", "Bootstrap"],

        },
        {
            imgSrc: chessApiImg,
            description: "It is a Leaderboard website built using Javascript",
            liveLink: "https://ornate-nasturtium-89e860.netlify.app/",
            codeLink: "https://github.com/hduraimurugan/chess-leaderboard",
            codesUsed: ["HTML","CSS","Javascript", "Bootstrap"],

        },

    ];


    return (
        <>
            <section className='flex flex-col px-10 py-32 bg-secondary justify-center text-white' id='projects'>
                <div className='py-5 md:px-24 px-10 md:w-full'>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-white font-bold md:text-4xl text-2xl font-list-font border-b-4 border-primary md:w-[140px] w-[100px]'>Projects</h1>
                        <p className='text-white md:text-2xl text-xl font-list-font mt-10'>Here are some of my projects, Check them out...</p>
                    </div>
                </div>

                <div className='py-5 md:w-full '>

                    <div className='flex flex-col md:flex-row flex-wrap items-center md:justify-center px-10 gap-7'>

                        {projects.map((project, index) => (

                            <div className='bg-border-prj'>
                                <div className='relative' key={index}>
                                    <img
                                        className='md:h-[200px] h-[160px] w-[356px] rounded-md'
                                        src={project.imgSrc}
                                    />
                                    <div className='project-desc flex flex-col justify-center gap-3 px-3 py-3 rounded-md'>
                                        <div>
                                            <p className='text-center text-white md:text-2xl text-md font-list-font'>
                                                {project.description}
                                            </p>
                                        </div>
                                        <div className='flex justify-center md:gap-7 gap-3'>

                                            <div className='transition duration-300 ease-in-out'>
                                                <a href={project.liveLink} target='_blank' rel='noopener noreferrer'>
                                                    <button className='button-link md:text-lg text-sm hover:shadow-lg'>
                                                        Live Link
                                                    </button>
                                                </a>
                                            </div>
                                            <div className='transition duration-300 ease-in-out'>
                                                <a href={project.codeLink} target='_blank' rel='noopener noreferrer'>
                                                    <button className='button-link md:text-lg text-sm hover:shadow-lg'>
                                                        View Code
                                                    </button>
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div className='p-3 my-3'>
                                    {project.codesUsed.map((code, idx) => (
                                        <span key={idx} className='text-gray-200 font-semibold bg-indigo-500 border-primary-2 p-2 rounded-lg shadow-lg mr-2'>{code}</span>
                                    ))}
                                </div>

                            </div>
                        ))}

                    </div>

                </div>
            </section>
        </>
    )
}

export default Projects