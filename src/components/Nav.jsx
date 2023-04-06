import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { languages } from '../utils/language/languages';
import LanguageProvider, { LanguageContext } from '../Context/LanguageContext';
import { useContext } from 'react';
import '../index.css';
import { useEffect } from 'react';
const Nav = () => {

    const[open, setOpen] = useState(false);
    const[scrolled, setScrolled] = useState(false);

    useEffect(()=>{

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if(scrollTop > 100){
                setScrolled(true);
            }else{
                setScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll);
    }, [])
    

    const {language, changeLanguage} = useContext(LanguageContext);
  return (
    <div className="w-full h-16 rounded-lg leading-none flex content-center  items-center divide-x divide-gray-600">
        <div className="w-full h-20 absolute -z-[-1] -inset-0.5 bg-gradient-to-r from-cyan-200 to-blue-900 rounded-lg blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"/>
            <div className='w-full flex z-10 relative items-center h-16 bg-black justify-between px-4'>
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Blagoja</span>
            
                <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 cursor-pointer md:hidden flex items-center justify-center'>
                {open ? <span className="material-symbols-outlined">close</span> 
                        : <span className="material-symbols-outlined">menu</span>}
            </div>

            <ul className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static rounded-3xl bg-black md:z-auto -z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-700 ease-in ${open ? 'top-20':'top-[-490px]'}`}>
                {
                language[1].map((link)=>(
                    <li key={link.id} className='md:ml-8 text-xl md:my-0 my-7'>
                        <a href={`#${link.id}`} className='text-white hover:text-gray-400 duration-500'>{link.title}</a>
                    </li>
                ))
                }
                <li className='md:ml-8 text-xl md:my-0 my-7'>
                    <select onChange={changeLanguage} className='bg-tertiary rounded-lg flex content-center items-center h-10 text-xl'>
                        <option className='text-xl' value="none">
                            {language[0].name}
                        </option>
                        {
                            languages.map((lang, index) =>(
                                <option key={lang[0].name} value={index}  className={`text-xl ${lang[0].name === language[0].name ? "hidden" : ""}`}>
                                    {lang[0].name}
                                </option>
                            ))
                        }
                        
                    </select>
                </li>
            </ul>
            
        </div>
    </div>
  )
}

export default Nav