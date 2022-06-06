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
        <div class="drawer drawer-end">
            <input id="my-drawer-3" type="checkbox" class="drawer-toggle" />
            <div class="drawer-content flex flex-col">
                <div class="w-full navbar fixed bg-nav">
                    <div class="flex-1 px-2 mx-2"><img src={logo} alt="" /></div>
                    <div class="flex-none lg:hidden">
                        <label for="my-drawer-3" class="btn btn-square btn-ghost">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" class="inline-block w-6 h-6 stroke-current"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
                        </label>
                    </div>
                    <div class="flex-none hidden lg:block">
                        <ul class="menu menu-horizontal">
                            {myItems}
                        </ul>
                    </div>
                </div>
                {children}
            </div>
            <div class="drawer-side">
                <label for="my-drawer-3" class="drawer-overlay"></label>
                <ul class="menu p-4 overflow-y-auto w-80 bg-base-100">
                    {myItems}
                </ul>

            </div>
        </div>
    );
};

export default Navbar;