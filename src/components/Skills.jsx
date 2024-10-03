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

import { motion } from "framer-motion";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"


const skillsData = [
    {
        category: 'Front-end',
        skills: [
            {
                name: 'HTML', imgSrc: html, icon: FaHtml5, skill: 90,
                certificate: "https://res.cloudinary.com/dmuz0dq5b/image/upload/v1727700779/GuviCertification_-_HTML_ingx0m.png"
            },
            {
                name: 'CSS', imgSrc: css, icon: FaCss3Alt, skill: 95,
                certificate: "https://res.cloudinary.com/dmuz0dq5b/image/upload/v1727700780/GuviCertification_-_CSS_dvlb7m.png"
            },
            {
                name: 'JavaScript', imgSrc: js, icon: IoLogoJavascript, skill: 85,
                certificate: "https://res.cloudinary.com/dmuz0dq5b/image/upload/v1727700779/GuviCertification_-_Js_b5kc6b.png"
            },
            {
                name: 'React', imgSrc: react, icon: FaReact, skill: 90,
                certificate: "https://res.cloudinary.com/dmuz0dq5b/image/upload/v1727700779/GuviCertification_-_ReactJs_yznldy.png"
            },
            { name: 'Redux', imgSrc: reduxImg, icon: SiRedux, skill: 72, certificate: "" },
            {
                name: 'Bootstrap', imgSrc: bootstrap, icon: FaBootstrap, skill: 85,
                certificate: "https://res.cloudinary.com/dmuz0dq5b/image/upload/v1727700779/GuviCertification_-_Bootstrap_lvdwfx.png"
            },
            { name: 'Tailwind', imgSrc: tailwindImg, icon: RiTailwindCssFill, skill: 90, certificate: "" },
        ],
    },
    {
        category: 'Back-end',
        skills: [
            {
                name: 'NodeJs', imgSrc: nodejs, icon: FaNodeJs, skill: 85,
                certificate: "https://res.cloudinary.com/dmuz0dq5b/image/upload/v1727700779/GuviCertification_-_NodeJs_r0aunb.png"
            },
            { name: 'ExpressJs', imgSrc: expressImg, icon: SiExpress, skill: 80, certificate: "" },
            {
                name: 'MongoDB', imgSrc: mongoDB, icon: SiMongodb, skill: 85,
                certificate: "https://res.cloudinary.com/dmuz0dq5b/image/upload/v1727700779/GuviCertification_Mongodb_ddip9w.png"
            },
            {
                name: 'MySQL', imgSrc: MySQLImg, icon: GrMysql, skill: 60,
                certificate: "https://res.cloudinary.com/dmuz0dq5b/image/upload/v1727700779/GuviCertification_-_MySQL_nxa4y0.png"
            },
        ],
    },
    {
        category: 'Tools Known',
        skills: [
            { name: 'VsCode', imgSrc: vsCodeImg, icon: VscVscode, skill: 90, certificate: "" },
            { name: 'ViteJs', imgSrc: ViteImg, icon: SiVite, skill: 75, certificate: "" },
            { name: 'Git', imgSrc: gitImg, icon: FaGitAlt, skill: 85, certificate: "" },
            { name: 'GitHub', imgSrc: githubImg, icon: FaGithub, skill: 90, certificate: "" },
            { name: 'NPM', imgSrc: npmImg, icon: SiNpm, skill: 60, certificate: "" },
            { name: 'Postman', imgSrc: postmanImg, icon: SiPostman, skill: 90, certificate: "" },
        ],
    },
];

function Skills({ RevealOnScroll }) {
    return (
        <section className='bg-primary shadow-lg opacity-95' id='skills'>
            <RevealOnScroll>
                <div className='flex flex-col px-5 py-32 container mx-auto justify-center'>
                    <div className='flex justify-center px-10 py-5'>
                        <h1 className='text-white text-center font-bold md:text-4xl text-md font-list-font border-b-4 border-secondary md:w-[500px] w-[230px]'>
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
                                    <motion.div
                                        className="box"
                                        whileHover={{ scale: 1.05 }}
                                        whileTap={{ scale: 0.9 }}
                                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                        key={idx}
                                    >
                                        <Dialog>
                                            <DialogTrigger asChild>
                                                <div
                                                    key={idx}
                                                    className='flex flex-col items-center justify-center gap-1 px-7 py-7 bg-gray-100 md:h-[154px] md:w-[115px] w-[90px] card-hoverr-eff rounded-lg shadow-md'
                                                >
                                                    <skill.icon className="md:text-4xl text-3xl text-blue-800" />


                                                    <p className='text-blue-800 text-center font-bold md:text-lg text-sm font-list-font mt-2'>
                                                        {skill.name}
                                                    </p>

                                                    <div className="w-full bg-gray-400 rounded-full h-1.5 mt-2">
                                                        <div
                                                            className="bg-blue-800 h-1.5 rounded-full"
                                                            style={{ width: `${skill.skill}%` }}
                                                        ></div>
                                                    </div>

                                                </div>
                                            </DialogTrigger>

                                            <DialogContent className="sm:max-w-[700px] p-5">
                                                <DialogHeader>
                                                    {/* <DialogTitle>{skill.name}</DialogTitle> */}
                                                </DialogHeader>
                                                {skill.certificate ? (
                                                    <div className="w-full">
                                                        <img src={skill.certificate} />
                                                    </div>
                                                ) : <div className="w-full">
                                                    <h1 className='font-list-font text-xl font-bold text-center p-10'>Certificate not yet availed...</h1>
                                                </div>}
                                            </DialogContent>

                                        </Dialog>
                                    </motion.div>

                                ))}
                            </div>






                        </div>
                    ))}
                </div>
            </RevealOnScroll>
        </section >
    );
}

export default Skills;
