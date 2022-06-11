import React from 'react';

const Designs = ({ Design }) => {
    const { image, name, Address } = Design
    return (
        <div className='mt-10'>
            <div className="card">
                <figure >
                    <img src={image} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p><i className="fa-solid fa-location-dot"></i> {Address}</p>
                </div>
            </div>
        </div>
    );
};

export default Designs;