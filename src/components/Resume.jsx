import React from 'react'
import ResumeImg from '../assets/resume.jpg'
import { CiSaveDown2 } from "react-icons/ci";
import DuraiCV from "../assets/DuraiCV.pdf"

const Resume = () => {
    return (
        <>
            <section className='flex flex-col md:flex-row px-5 py-32 bg-white justify-center' id='resume'>
                <div className='py-5 md:w-1/3 '>
                    <img src={ResumeImg} alt='hero' />
                </div>

                <div className='md:w-1/2 flex justify-center py-5 px-10'>
                    <div className='flex flex-col justify-center'>
                        <h1 className='text-gray-700 font-bold md:text-4xl text-2xl font-list-font border-b-4 border-gray-700 md:w-[135px] w-[96px]'>Resume</h1>
                        <p className='text-gray-700  text-2xl font-list-font mt-10'>
                            You can download my resume here <br/> <br/>
                            <a href={DuraiCV} download='Durai_Resume' target='_blank' >
                             <button className='flex flex-row md:text-2xl text-xl btn-dark'>Download Now<CiSaveDown2 size={28} /></button> 
                            </a>
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Resume