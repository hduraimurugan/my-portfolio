import React from 'react';
import AboutImg from '../assets/about.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { SkillsOrbs } from '../lib/orbs.jsx';

const About = () => {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section className="bg-primary opacity-95 " id="about">
            <div className="flex flex-col md:flex-row px-5 py-32 container mx-auto justify-center items-center gap-10">
                {/* Image Section */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ type: 'tween', duration: 0.5 }}
                    className="md:w-1/2 px-10"
                >
                    <img
                        src={AboutImg}
                        alt="About Illustration"
                        className="rounded-lg shadow-lg"
                    />
                </motion.div>

                {/* Text Section */}
                <motion.div
                    ref={ref}
                    initial={{ opacity: 0, y: 100 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ type: 'tween', duration: 0.5, delay: 0.3 }}
                    className="md:w-1/2 px-10"
                >
                    <h2 className="text-white font-bold text-2xl md:text-4xl w-fit mb-6">
                        About Me
                    </h2>
                    <div className="space-y-6 text-white text-md md:text-xl text-justify font-list-font leading-relaxed">
                        <p>
                            I'm <span className="font-bold">Duraimurugan H</span>, a passionate web developer with a foundation in <span className="font-bold">Electronics and Instrumentation Engineering</span>. I began my professional journey in the banking sector as a <span className="font-bold">Relationship Manager</span> at <span className="font-bold">City Union Bank, Bangalore</span>.
                        </p>
                        <p>
                            My growing interest in technology inspired a career transition into web development. I upskilled through a full stack development program, gaining hands-on experience in <span className="font-bold">HTML</span>, <span className="font-bold">CSS</span>, <span className="font-bold">JavaScript</span>, <span className="font-bold">ReactJS</span>, <span className="font-bold">NodeJS</span>, <span className="font-bold">MongoDB</span>, and <span className="font-bold">MySQL</span>.
                        </p>
                        <p>
                            Currently, I am working with a <span className="font-bold">startup team</span>, contributing to real-world projects that challenge and enhance my development skills.
                        </p>
                        <p>
                            With a unique blend of technical expertise and client-facing experience, I am eager to contribute to innovative teams and build impactful digital solutions.
                        </p>
                    </div>

                </motion.div>
            </div>
            <SkillsOrbs />
        </section>
    );
};

export default About;
