import React from 'react';
import { Link } from 'react-router-dom';

export default function HeaderSection(props) {
    return (
        <header as="nav">
            <div className="nav relative bg-indigo-600 text-white">
              <div className="flex justify-between items-center max-w-auto mx-auto px-4 py-6 sm:px-6 md:justify-start md:space-x-10 lg:px-8">
                <div className="flex justify-start lg:flex-1">
                <a href="#"> 
                    <img
                    className="h-8 w-auto sm:h-10"
                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-300.svg"
                    alt=""
                    />
                </a>
                </div> 
                <div as="nav" className="hidden md:flex space-x-4 ">
                <a href="/webdesign" className="text-base font-medium focus:bg-indigo-700  px-4 py-3 border border-transparent rounded hover:bg-indigo-500 hover:bg-opacity-75">
                    Websites
                </a>
                <a href="#" className="text-base font-medium   px-4 py-3 border border-transparent rounded hover:bg-indigo-500 hover:bg-opacity-75">
                    SEO
                </a>
                <a href="#" className="text-base font-medium   px-4 py-3 border border-transparent rounded hover:bg-indigo-500 hover:bg-opacity-75">
                    PPC
                </a>
                <a href="#" className="text-base font-medium   px-4 py-3 border border-transparent rounded hover:bg-indigo-500 hover:bg-opacity-75">
                    Social Media
                </a>
                <a href="#" className="text-base font-medium   px-4 py-3 border border-transparent rounded hover:bg-indigo-500 hover:bg-opacity-75">
                    Blog
                </a>
                <a href="#" className="text-base font-medium   px-4 py-3 border border-transparent rounded hover:bg-indigo-500 hover:bg-opacity-75">
                    About us
                </a>
                </div> 
             </div> 
            </div>  
       </header>
    );
};