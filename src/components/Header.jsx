import { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'
import { PiAlignRightFill } from "react-icons/pi";
import { PiAlignRightDuotone } from "react-icons/pi";
import { SiDevpost } from "react-icons/si";

import { HiHome } from "react-icons/hi";
import { GiSkills } from "react-icons/gi";
import { LuLink } from "react-icons/lu";
import { IoPersonSharp } from "react-icons/io5";
import { FaGraduationCap } from "react-icons/fa6";
import { MdPermContactCalendar } from "react-icons/md";



const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [activeLink, setActiveLink] = useState('/');

    const handleLinkClick = () => {
        setToggleMenu(false);
    };

    const toggleClass = (path) => {
        setActiveLink(path);
    };

    return (
        <>
            <header className='bg-primary fixed w-full top-0 left-0 z-50 shadow-md backdrop-filter backdrop-blur-sm opacity-95'>

                <div className='flex justify-around items-center py-7 container mx-auto '>
                    <a className='text-white text-2xl font-row-font flex items-center gap-0.5' href='#'><SiDevpost size={32} />uraimurugan H</a>
                    <nav className='hidden md:block'>
                        <ul className='flex text-white font-list-font'>
                            <li><a href='#' className={activeLink === '#' ? 'active' : ''}
                                onClick={() => toggleClass('#')} >Home</a></li>
                            <li><a href='#skills' className={activeLink === '#skills' ? 'active' : ''}
                                onClick={() => toggleClass('#skills')}>Skills</a></li>
                            <li><a href='#projects' className={activeLink === '#projects' ? 'active' : ''}
                                onClick={() => toggleClass('#projects')}>Projects</a></li>
                            <li><a href='#about' className={activeLink === '#about' ? 'active' : ''}
                                onClick={() => toggleClass('#about')}>About</a></li>
                            <li><a href='#qualification' className={activeLink === '#qualification' ? 'active' : ''}
                                onClick={() => toggleClass('#qualification')}>Qualification</a></li>
                            <li><a href='#contact' className={activeLink === '#contact' ? 'active' : ''}
                                onClick={() => toggleClass('#contact')}>Contact</a></li>
                        </ul>
                    </nav>
                    {toggleMenu && <nav className='block md:hidden'>
                        <div className='flex flex-col text-white mobile-nav font-list-font' onClick={handleLinkClick}>
                            <a href='#'>
                                <HiHome size={24} />
                                <span className='mt-2'>Home</span>
                            </a>
                            <a href='#skills'>
                                <GiSkills size={24} />
                                <span className='mt-2'>Skills</span>
                            </a>
                            <a href='#projects'>
                                <LuLink size={24} />
                                <span className='mt-2'>Projects</span>
                            </a>
                            <a href='#about'>
                                <IoPersonSharp size={24} />
                                <span className='mt-2'>About</span> 
                            </a>
                            <a href='#qualification'>
                                <FaGraduationCap size={24} />
                                <span className='mt-2'>Qualification</span>
                            </a>
                            <a href='#contact'>
                                <MdPermContactCalendar size={24} />
                                <span className='mt-2'>Contact</span>
                            </a>
                        </div>
                    </nav>}
                    <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'>
                        {toggleMenu ? <PiAlignRightFill size={34} className='text-white h-7' /> : <PiAlignRightDuotone size={34} className='text-white h-7' />}

                    </button>
                </div>
            </header>
        </>
    )
}

export default Header
