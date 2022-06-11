import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Service from './Service';

const Services = () => {
    const { data: services, isLoading } = useQuery('services', () => fetch('http://localhost:5000/services').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }
    return (
        <div className='lg:mx-16 mx-8 mb-10'>
            <div>
                <h1 className='text-sm blue font-bold text-center'>-- Services --</h1>
                <p className='text-xl text-info font-bold text-center'>We're an agency tailored to all <br />
                    clients' needs that always delivers</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 mb-10 lg:gap-x-8'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
            <div className='flex justify-center'>
                <button className='bg-login text-white py-2 px-4 rounded shadow-blue-900'>Explore More</button>
            </div>
        </div>
    );
};

export default Services;