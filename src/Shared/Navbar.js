import React from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css'
import logo from '../Images/logo.png'

const Navbar = ({ children }) => {
    const myItems = <>
        <li><Link className='rounded-md h-10 mr-4 font-bold css' to='/'>Home</Link></li>
        <li><Link className='rounded-md h-10 mr-4 font-bold css' to='/about'>About</Link></li>
        <li><Link className='rounded-md h-10 mr-4 font-bold css' to='/appointment'>Project</Link></li>
        <li><Link className='rounded-md h-10 mr-4 font-bold css' to='/reviews'>Admin</Link></li>
        <li><Link className='rounded-md h-10 mr-4 font-bold css' to='/contact'>Contact</Link></li>
        <li><Link className='rounded-md h-10 mr-4 font-bold bg-login text-white ml-20' to='/login'>Login</Link></li>
    </>;
    return (
        <div className="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col">
                <div className="w-full navbar bg-nav">
                    <div className="flex-1 px-2 mx-2"><img src={logo} alt="" /></div>
                    <div className="flex-none lg:hidden">
                        <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-6 h-6 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div className="flex-none hidden lg:block">
                        <ul className="menu menu-horizontal">
                            {myItems}
                        </ul>
                    </div>
                </div>
                {children}
            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {myItems}
                </ul>

            </div >
        </div >
    );
};

export default Navbar;