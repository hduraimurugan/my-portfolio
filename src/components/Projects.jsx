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
        },
        {
            imgSrc: reduxImg,
            description: "An E-commerce site built using ReactJs Redux toolkit",
            liveLink: "https://redux-shopping-cart-mauve.vercel.app/",
            codeLink: "https://github.com/hduraimurugan/redux-shopping-cart",
        },
        {
            imgSrc: LBMSImg,
            description: "Library Admin dashboard built using ReactJs Formik",
            liveLink: "https://verdant-centaur-216ddb.netlify.app/",
            codeLink: "https://github.com/hduraimurugan/formik_task",
        },
        {
            imgSrc: zamazonImg,
            description: "Zamazon is an E-commerce webpage built using ReactJs",
            liveLink: "https://incandescent-vacherin-675899.netlify.app/",
            codeLink: "https://github.com/hduraimurugan/shopping-cart",
        },
        {
            imgSrc: routerDomImg,
            description: "It is a Courses webpage built using React Router Dom",
            liveLink: "https://react-router-task-jdldaldada.netlify.app/",
            codeLink: "https://github.com/hduraimurugan/react-router",
        },
        {
            imgSrc: chessApiImg,
            description: "It is a Leaderboard website built using Javascript",
            liveLink: "https://ornate-nasturtium-89e860.netlify.app/",
            codeLink: "https://github.com/hduraimurugan/chess-leaderboard",
        },

    ];


    return (
        <>
            <section className='flex flex-col px-10 py-32 bg-secondary justify-center text-white' id='projects'>
                <div className='py-5 md:px-24 px-10 md:w-full'>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-white font-bold md:text-4xl text-2xl font-list-font border-b-4 border-primary md:w-[140px] w-[100px]'>Projects</h1>
                        <p className='text-white md:text-2xl text-xl font-list-font mt-10'>Here are some of my projects made with ReactJs, Javascript, Bootstrap and Tailwind CSS. Check them out...</p>
                    </div>
                </div>

                <div className='py-5 md:w-full '>

                    <div className='flex flex-col md:flex-row flex-wrap items-center md:justify-center px-10 gap-6'>

                        {projects.map((project, index) => (
                            <div className='relative' key={index}>
                                <img
                                    className='md:h-[200px] h-[160px] w-[356px] border-2 border-gray-300 drop-shadow-md rounded-md'
                                    src={project.imgSrc}
                                />
                                <div className='project-desc flex flex-col justify-center gap-3 px-3 py-3 rounded-md'>
                                    <div>
                                        <p className='text-center md:text-2xl text-md font-list-font'>
                                            {project.description}
                                        </p>
                                    </div>
                                    <div className='flex justify-center md:gap-7 gap-3'>

                                        <div className='transition duration-300 ease-in-out'>
                                            <a href={project.liveLink} target='_blank' rel='noopener noreferrer'>
                                                <button className='button-link md:text-lg text-sm hover:bg-blue-600 hover:text-white hover:shadow-lg'>
                                                    Live Link
                                                </button>
                                            </a>
                                        </div>
                                        <div className='transition duration-300 ease-in-out'>
                                            <a href={project.codeLink} target='_blank' rel='noopener noreferrer'>
                                                <button className='button-link md:text-lg text-sm hover:bg-green-600 hover:text-white hover:shadow-lg'>
                                                    View Code
                                                </button>
                                            </a>
                                        </div>

                                    </div>
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