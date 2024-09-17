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
import postmanImg from '../assets/skills/Postman.png';
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { SiRedux } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { SiMongodb } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { VscVscode } from "react-icons/vsc";
import { SiVite } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { SiNpm } from "react-icons/si";
import { SiPostman } from "react-icons/si";


const skillsData = [
    {
        category: 'Front-end',
        skills: [
            { name: 'HTML', imgSrc: html, icon: FaHtml5, skill: 90 },
            { name: 'CSS', imgSrc: css, icon: FaCss3Alt, skill: 95 },
            { name: 'JavaScript', imgSrc: js, icon: IoLogoJavascript, skill: 85 },
            { name: 'React', imgSrc: react, icon: FaReact, skill: 90 },
            { name: 'Redux', imgSrc: reduxImg, icon: SiRedux, skill: 60 },
            { name: 'Bootstrap', imgSrc: bootstrap, icon: FaBootstrap, skill: 80 },
            { name: 'Tailwind', imgSrc: tailwindImg, icon: RiTailwindCssFill, skill: 90 },
        ],
    },
    {
        category: 'Back-end',
        skills: [
            { name: 'NodeJs', imgSrc: nodejs, icon: FaNodeJs, skill: 80 },
            { name: 'ExpressJs', imgSrc: expressImg, icon: SiExpress, skill: 70 },
            { name: 'MongoDB', imgSrc: mongoDB, icon: SiMongodb, skill: 75 },
            { name: 'MySQL', imgSrc: MySQLImg, icon: GrMysql, skill: 60 },
        ],
    },
    {
        category: 'Tools Known',
        skills: [
            { name: 'VsCode', imgSrc: vsCodeImg, icon: VscVscode, skill: 90 },
            { name: 'ViteJs', imgSrc: ViteImg, icon: SiVite, skill: 75 },
            { name: 'Git', imgSrc: gitImg, icon: FaGitAlt, skill: 85 },
            { name: 'GitHub', imgSrc: githubImg, icon: FaGithub, skill: 90 },
            { name: 'NPM', imgSrc: npmImg, icon: SiNpm, skill: 60 },
            { name: 'Postman', imgSrc: postmanImg, icon: SiPostman, skill: 90 },
        ],
    },
];

function Skills({ RevealOnScroll }) {
    return (
        <section className='bg-primary shadow-lg' id='skills'>
            <RevealOnScroll>
                <div className='flex flex-col px-5 py-32 container mx-auto justify-center'>
                    <div className='flex justify-center px-10 py-5'>
                        <h1 className='text-white text-center font-bold md:text-4xl text-md font-list-font border-b-4 border-secondary md:w-[500px] w-[270px]'>
                            Skills & Technologies I Know
                        </h1>
                    </div>

                    {skillsData.map((category, index) => (
                        <div key={index}>
                            <div className='flex justify-center px-10 mb-5 mt-10'>
                                <h3 className='text-white font-bold md:text-2xl text-md font-list-font border-b-4 border-secondary'>
                                    {category.category}
                                </h3>
                            </div>
                            <div className='flex md:flex-row flex-wrap items-center justify-center gap-5 md:justify-center py-2'>
                                {category.skills.map((skill, idx) => (
                                    <div
                                        key={idx}
                                        className='flex flex-col items-center justify-center gap-1 px-7 py-7 bg-gray-100 md:h-[154px] md:w-[115px] w-[90px] card-hoverr-eff rounded-lg shadow-md'
                                    >
                                        {/* For desktop, display images */}
                                        {/* <img
                                            src={skill.imgSrc}
                                            className='mb-5 object-cover hidden md:block'
                                            alt={skill.name}
                                        /> */}

                                        {/* For mobile, display icons */}
                                        <skill.icon  className="md:text-4xl text-3xl text-indigo-700" />

                                        <p className='text-indigo-700 text-center font-bold md:text-lg text-sm font-list-font mt-2'>
                                            {skill.name}
                                        </p>

                                        <div className="w-full bg-gray-400 rounded-full h-1.5 mt-2">
                                            <div
                                                className="bg-indigo-700 h-1.5 rounded-full"
                                                style={{ width: `${skill.skill}%` }}
                                            ></div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </RevealOnScroll>
        </section>
    );
}

export default Skills;
