import React from 'react';
import bootstrap from '../assets/skills/bootstrap.png';
import css from '../assets/skills/css.png';
import html from '../assets/skills/html.png';
import js from '../assets/skills/js.png';
import mongoDB from '../assets/skills/mongoDB.png';
import nodejs from '../assets/skills/nodejs.png';
import react from '../assets/skills/react.png';
import reduxImg from '../assets/skills/Redux.png';
import tailwindImg from '../assets/skills/Tailwind.png';
import vsCodeImg from '../assets/skills/vscode.png';
import expressImg from '../assets/skills/Express.png';
import gitImg from '../assets/skills/Git.png';
import githubImg from '../assets/skills/GitHub.png';
import ViteImg from '../assets/skills/Vite.js.png';
import MySQLImg from '../assets/skills/MySQL.png';
import npmImg from '../assets/skills/NPM.png';





const skillsData = [
    {
        category: 'Front-end',
        skills: [
            { name: 'HTML', imgSrc: html },
            { name: 'CSS', imgSrc: css },
            { name: 'JavaScript', imgSrc: js },
            { name: 'React', imgSrc: react },
            { name: 'Redux', imgSrc: reduxImg },
            { name: 'Bootstrap', imgSrc: bootstrap },
            { name: 'Tailwind', imgSrc: tailwindImg },
        ],
    },
    {
        category: 'Back-end',
        skills: [
            { name: 'NodeJs', imgSrc: nodejs }, 
            { name: 'ExpressJs', imgSrc: expressImg },
            { name: 'MongoDB', imgSrc: mongoDB },
            { name: 'MySQL', imgSrc: MySQLImg },
        ],
    },
    {
        category: 'Tools Known',
        skills: [
            { name: 'VS Code', imgSrc: vsCodeImg },
            { name: 'ViteJs', imgSrc: ViteImg },
            { name: 'Git', imgSrc: gitImg },
            { name: 'GitHub', imgSrc: githubImg },
            { name: 'NPM', imgSrc: npmImg },
        ],
    },
];

function Skills() {
    return (
        <section className='flex flex-col px-5 py-32 bg-primary justify-center' id='skills'>
            <div className='flex justify-center px-10 py-5'>
                <h1 className='text-white font-bold md:text-4xl text-xl font-list-font border-b-4 border-secondary md:w-[500px] w-[270px]'>
                    Skills & Technologies I Know
                </h1>
            </div>

            {skillsData.map((category, index) => (
                <div key={index}>
                    <div className='flex justify-center px-10 mb-5 mt-10'>
                        <h3 className='text-white font-bold md:text-2xl text-xl font-list-font border-b-4 border-secondary'>
                            {category.category}
                        </h3>
                    </div>
                    <div className='flex md:flex-row flex-col flex-wrap items-center gap-5 md:justify-center py-2'>
                        {category.skills.map((skill, idx) => (
                            <div key={idx} className='px-10 py-10 bg-gray-100 h-[240px] w-[180px] rounded-lg shadow-md'>
                                <img src={skill.imgSrc} className='mb-5' alt={skill.name} />
                                <p className='text-black text-center font-bold text-2xl font-list-font'>{skill.name}</p>
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </section>
    );
}

export default Skills;
