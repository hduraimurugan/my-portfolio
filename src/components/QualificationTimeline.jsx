import { useState } from 'react';
import { MdOutlineWork } from "react-icons/md";
import { RiGraduationCapFill } from "react-icons/ri";
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';

import {
    Dialog,
    DialogContent,
    DialogTrigger,
} from "@/components/ui/dialog";

const educationData = [
    {
        title: "MERN Full Stack Development",
        place: "Guvi Geek Network, IIT Madras",
        year: "2024",
        image: "https://res.cloudinary.com/dmuz0dq5b/image/upload/v1727700779/GuviCertification_-_FSD_kyw8pm.png",
        delay: 0,
    },
    {
        title: "Bachelor of Technology in Electronics and Instrumentation Engineering",
        place: "Kalasalingam Academy of Research Education",
        year: "2016 - 2020",
        image: "https://res.cloudinary.com/dmuz0dq5b/image/upload/v1727680241/Degree_Provision_and_TC_PDF_page-0001_in0wjn.jpg",
        delay: 0.2,
    },
    {
        title: "Higher Secondary Education",
        place: "Rosemary Matric Higher Secondary School",
        year: "2015 - 2016",
        image: "https://res.cloudinary.com/dmuz0dq5b/image/upload/v1727680175/12th_School_All_Marksheets_page-0002_bjrczd.jpg",
        delay: 0.5,
    },
];

const experienceData = [
    {
        title: "Full Stack Developer",
        place: "Think Strive Solutions - WFH",
        year: "2024 - Present",
        delay: 0,
    },
    {
        title: "Relationship Manager",
        place: "City Union Bank Private Limited, Bangalore",
        year: "2022 - 2024",
        delay: 0,
    },
    
    // Add more experience items here
];

const QualificationTimeline = () => {
    const [isEducation, setIsEducation] = useState(true);
    const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

    const toggleTimeline = (view) => {
        setIsEducation(view === 'education');
    };

    const currentData = isEducation ? educationData : experienceData;

    return (
        <section className="bg-primary opacity-95 px-5 py-32" id='qualification'>
            <div className="flex flex-col items-center text-center container mx-auto py-10 px-5">
                <h2 className="text-white font-bold md:text-4xl text-2xl font-list-font border-b-0 border-secondary md:w-[224px] w-[160px] mb-7">Qualification</h2>

                <div className="flex gap-7 mt-6 justify-center" ref={ref}>
                    <span
                        onClick={() => toggleTimeline('education')}
                        className={`cursor-pointer ${isEducation ? 'font-bold text-white' : 'text-gray-400 font-semibold'} flex gap-2 font-list-font md:text-xl text-md`}
                    >
                        <RiGraduationCapFill /> Education
                    </span>
                    <span
                        onClick={() => toggleTimeline('work')}
                        className={`cursor-pointer ${!isEducation ? 'font-bold text-white' : 'text-gray-400 font-semibold'} flex gap-1 font-list-font md:text-xl text-md`}
                    >
                        <MdOutlineWork /> Experience
                    </span>
                </div>

                <div className="relative mt-10 max-w-md w-full">
                    {currentData.map((item, index) => (
                        <div key={index} className="flex items-start space-x-2 mb-10">
                            {isEducation ? (
                                <Dialog>
                                    <DialogTrigger asChild>
                                        <motion.div
                                            className="box w-full hover:cursor-pointer"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.9 }}
                                            transition={{ type: "tween", stiffness: 400, damping: 10, duration: 0.5, delay: item.delay }}
                                            initial={{ opacity: 0, y: 100 }}
                                            animate={inView ? { opacity: 1, y: 0 } : {}}
                                        >
                                            <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full">
                                                <h3 className="md:text-xl text-md font-medium">{item.title}</h3>
                                                <p className="text-gray-600 md:text-md text-sm">{item.place}</p>
                                                <span className="text-sm text-gray-500">{item.year}</span>
                                            </div>
                                        </motion.div>
                                    </DialogTrigger>
                                    <DialogContent className="sm:max-w-[700px] p-5">
                                        <div className="w-full">
                                            <img src={item.image} alt={item.title} />
                                        </div>
                                    </DialogContent>
                                </Dialog>
                            ) : (
                                <motion.div
                                    className="box w-full hover:cursor-pointer"
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "tween", stiffness: 400, damping: 10, duration: 0.5, delay: item.delay }}
                                    initial={{ opacity: 0, y: 100 }}
                                    animate={inView ? { opacity: 1, y: 0 } : {}}
                                >
                                    <div className="bg-gray-100 p-4 rounded-lg shadow-md w-full">
                                        <h3 className="md:text-xl text-md font-medium">{item.title}</h3>
                                        <p className="text-gray-600 md:text-md text-sm">{item.place}</p>
                                        <span className="text-sm text-gray-500">{item.year}</span>
                                    </div>
                                </motion.div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
            
        </section>
    );
};

export default QualificationTimeline;
