import { useState } from 'react';
import { MdOutlineWork } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { Link } from 'react-router-dom';

const QualificationTimeline = () => {
    const [isEducation, setIsEducation] = useState(true); // default to Education view

    const toggleTimeline = (view) => {
        setIsEducation(view === 'education');
    };

    return (
        <section className="bg-secondary px-5 py-32" id='qualification'>
            <div className="flex flex-col items-center text-center container mx-auto py-10 px-5">
                <h2 className="text-white font-bold md:text-4xl text-2xl font-list-font border-b-4 border-secondary md:w-[224px] w-[160px] mb-7">Qualification</h2>
                {/* <p className="text-gray-300 mt-1">My journey</p> */}

                <div className="flex gap-7 mt-6 justify-center">
                    <span
                        onClick={() => toggleTimeline('education')}
                        className={`cursor-pointer ${isEducation ? 'font-bold text-white' : 'text-gray-400 font-semibold'} flex gap-2 font-list-font text-xl`}
                    >
                        <RiGraduationCapFill />Education
                    </span>
                    <span
                        onClick={() => toggleTimeline('work')}
                        className={`cursor-pointer ${!isEducation ? 'font-bold text-white' : 'text-gray-400 font-semibold'} flex gap-1 font-list-font text-xl`}
                    >
                        <MdOutlineWork />Experience
                    </span>
                </div>

                <div className="relative mt-10 max-w-md w-full">
                    {isEducation ? (
                        // Education Timeline
                        <div>
                            <div className="flex items-start space-x-4 mb-10">
                                <motion.div
                                    className="box w-full hover:cursor-pointer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}

                                >
                                    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full">
                                        <h3 className="text-lg font-medium">MERN Full Stack Development</h3>
                                        <p className="text-gray-600">Guvi Geek Network, IIT Madras</p>
                                        <span className="text-sm text-gray-500">2024</span>
                                    </div>
                                </motion.div>
                            </div>

                            <div className="flex items-start space-x-4 mb-10">
                            <motion.div
                                    className="box w-full hover:cursor-pointer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}

                                ><a href="https://res.cloudinary.com/dmuz0dq5b/image/upload/v1727680241/Degree_Provision_and_TC_PDF_page-0001_in0wjn.jpg" target='_blank'>
                                <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full">
                                    <h3 className="text-lg font-medium">Bachelor of Technology in Electronics and Instrumentation Engineering</h3>
                                    <p className="text-gray-600">Kalasalingam Academy of Research Education</p>
                                    <span className="text-sm text-gray-500">2016 - 2020</span>
                                </div></a>
                                </motion.div>
                            </div>

                            <div className="flex items-start space-x-4 mb-10">
                            <motion.div
                                    className="box w-full hover:cursor-pointer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}

                                ><a href='https://res.cloudinary.com/dmuz0dq5b/image/upload/v1727680175/12th_School_All_Marksheets_page-0002_bjrczd.jpg' target='_blank'>
                                <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full">
                                    <h3 className="text-lg font-medium">Higher Secondary Education</h3>
                                    <p className="text-gray-600">Rosemary Matric Higher Secondary School</p>
                                    <span className="text-sm text-gray-500">2015 - 2016</span>
                                </div></a>
                                </motion.div>
                            </div>
                        </div>
                    ) : (
                        // Work Timeline
                        <div>
                            <div className="flex items-start space-x-4 mb-10">
                            <motion.div
                                    className="box w-full hover:cursor-pointer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}

                                >
                                <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full">
                                    <h3 className="text-lg font-medium">Relationship Manager</h3>
                                    <p className="text-gray-600">City Union Bank Private Limited, Bangalore</p>
                                    <span className="text-sm text-gray-500">2022 - 2024</span>
                                </div>
                                </motion.div>
                            </div>

                            {/* Add more work timeline items here */}
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default QualificationTimeline;
