import React from 'react';
import banner from '../Images/banner.png'

const Header = () => {
    return (
        <div className="hero bg-nav">
            <div className="hero-content lg:gap-60 flex-col lg:flex-row-reverse">
                <div className='mt-10'>
                    <img src={banner} alt="" className='rounded-xl' />
                </div>
                <div>
                    <h1 className="text-7xl font-bold">We Build Your <br /> Dream Dear!!</h1>
                    <p className="py-6">Online Easte Agency, the mordern way to sell your own home,
                        <br /> You can use Griffin Residential to market your property
                    </p>
                    <button className="bg-login text-white py-2 px-4 rounded">Booking Now<i className="fa-solid fa-bed ml-2"></i></button>
                </div>
            </div>
        </div>
    );
};

export default Header;