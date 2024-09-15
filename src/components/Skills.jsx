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





const skillsData = [
    {
        category: 'Front-end',
        skills: [
            { name: 'HTML', imgSrc: html, skill: 90 },
            { name: 'CSS', imgSrc: css, skill: 95 },
            { name: 'JavaScript', imgSrc: js, skill: 85 },
            { name: 'React', imgSrc: react, skill: 90 },
            { name: 'Redux', imgSrc: reduxImg, skill: 60 },
            { name: 'Bootstrap', imgSrc: bootstrap, skill: 80 },
            { name: 'Tailwind', imgSrc: tailwindImg, skill: 90 },
        ],
    },
    {
        category: 'Back-end',
        skills: [
            { name: 'NodeJs', imgSrc: nodejs, skill: 80 },
            { name: 'ExpressJs', imgSrc: expressImg, skill: 70 },
            { name: 'MongoDB', imgSrc: mongoDB, skill: 75 },
            { name: 'MySQL', imgSrc: MySQLImg, skill: 60 },
        ],
    },
    {
        category: 'Tools Known',
        skills: [
            { name: 'VsCode', imgSrc: vsCodeImg, skill: 90 },
            { name: 'ViteJs', imgSrc: ViteImg, skill: 75 },
            { name: 'Git', imgSrc: gitImg, skill: 85 },
            { name: 'GitHub', imgSrc: githubImg, skill: 90 },
            { name: 'NPM', imgSrc: npmImg, skill: 60},
            { name: 'Postman', imgSrc: postmanImg, skill: 90},
        ],
    },
];

 


function Skills({RevealOnScroll}) {
    return (

        
        <section className='bg-primary' id='skills'>
            <RevealOnScroll>

                <div className='flex flex-col px-5 py-32 container mx-auto justify-center'> 
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
                    <div className='flex md:flex-row flex-wrap items-center justify-center gap-5 md:justify-center py-2'>
                        {category.skills.map((skill, idx) => (
                            <div key={idx} className='flex flex-col items-center justify-center gap-1 px-10 py-10 bg-gray-100 h-[192px] w-[144px] card-hoverr-eff rounded-lg shadow-md'>
                                <img src={skill.imgSrc} className='mb-5 img-fluid' alt={skill.name} />
                                <p className='text-black text-center font-bold text-lg font-list-font'>{skill.name}</p>

                                    <div className="w-full bg-gray-300 rounded-full h-2 mt-2">
                                        <div className="bg-indigo-700 h-2 rounded-full" style={{ width: `${skill.skill}%` }}></div>
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
