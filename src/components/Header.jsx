import React, { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/solid'

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
            <header className='flex justify-around items-center px-5 py-6 bg-primary fixed w-full top-0 left-0 z-50'>
                <a className='text-white text-2xl font-row-font' href='#'>Duraimurugan H</a>
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
                        <li><a href='#resume' className={activeLink === '#resume' ? 'active' : ''}
                            onClick={() => toggleClass('#resume')}>Resume</a></li>
                        <li><a href='#contact' className={activeLink === '#contact' ? 'active' : ''}
                            onClick={() => toggleClass('#contact')}>Contact</a></li>
                    </ul>
                </nav>
                {toggleMenu && <nav className='block md:hidden'>
                    <ul className='flex flex-col text-white mobile-nav font-list-font' onClick={handleLinkClick}>
                        <li><a href='#'>Home</a></li>
                        <li><a href='#skills'>Skills</a></li>
                        <li><a href='#projects'>Projects</a></li>
                        <li><a href='#about'>About</a></li>
                        <li><a href='#resume'>Resume</a></li>
                        <li><a href='#contact'>Contact</a></li>
                    </ul>
                </nav>}
                <button onClick={() => setToggleMenu(!toggleMenu)} className='block md:hidden'><Bars3Icon className='text-white h-7' /></button>
            </header>
        </>
    )
}

export default Header
