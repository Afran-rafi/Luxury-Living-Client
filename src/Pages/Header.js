import React from 'react';
import banner from '../Images/banner.png'

const Header = () => {
    return (
        <div className="hero min-h-screen bg-nav">
            <div className="hero-content gap-60 flex-col lg:flex-row-reverse">
                <div className='mt-10'>
                    <img src={banner} alt="" />
                </div>
                <div>
                    <h1 className="text-7xl font-bold">We Build Your <br /> Dream Dear</h1>
                    <p className="py-6">Online Easte Agency, the mordern way to sell your own home,
                        <br /> You can use Griffin Residential to market your property
                    </p>
                    <button className="bg-login text-white py-2 px-4 rounded">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Header;