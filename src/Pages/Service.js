import React from 'react';

const Service = ({ service }) => {
    const { image, name, price, description } = service
    return (
        <div className='mt-10'>
            <div className="card shadow-md">
                <figure >
                    <img src={image} alt="Shoes" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title font-bold">{name}</h2>
                    <p className='font-bold'>Price: <span className='blue font-bold'>${price}</span></p>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    );
};

export default Service;