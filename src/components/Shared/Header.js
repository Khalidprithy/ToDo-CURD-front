import React from 'react';
import { useState } from 'react';

const Header = () => {

    const [open, setOpen] = useState(false);
    console.log(open)

    return (
        <div className='mx-4'>
            <div
                onMouseEnter={() => setOpen(true)}
                onMouseLeave={() => setOpen(false)}
                className="flex items-center justify-between bg-orange-500 m-3 mx-auto h-14 w-10/12 md:w-1/2 hover:w-full ease-in-out duration-500 rounded-full">
                <div className=" text-white">
                    <span className="btn btn-ghost rounded-full mx-1 normal-case text-xl text-white">Todo</span>
                </div>
                <div className={` ${open ? "hidden md:block ease-in-out duration-500" : "hidden"} `}>
                    <ul className="menu menu-horizontal p-0">
                        <ul className="menu menu-horizontal p-0">
                            <li><a className=' text-white'>Completed</a></li>
                            <li><a>Remain</a></li>
                            <li><a>Deleted</a></li>
                        </ul>
                    </ul>
                </div>

                <div className="flex">
                    <button className="btn btn-ghost btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                    <button className="btn btn-ghost btn-circle mx-1">
                        <div className="indicator">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                            <span className="badge badge-xs badge-primary indicator-item"></span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Header;