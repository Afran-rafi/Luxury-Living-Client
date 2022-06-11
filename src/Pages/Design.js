import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import Designs from './Designs';

const Design = () => {
    const { data: designs, isLoading } = useQuery('designs', () => fetch('http://localhost:5000/designs').then(res => res.json()))
    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='mt-16 lg:mx-16 mx-8 '>
            <div>
                <h1 className='text-sm blue font-bold text-center'>-- Project --</h1>
                <p className='text-xl text-info font-bold text-center'>Discover the latest Interior Design <br />
                    available today</p>
            </div>
            <div className='grid grid-cols-1 lg:grid-cols-3 mb-10 lg:gap-x-8'>
                {
                    designs.map(design => <Designs
                        key={design._id}
                        Design={design}
                    ></Designs>)
                }
            </div>
        </div>
    );
};

export default Design;