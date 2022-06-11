import React from 'react';

const Contact = () => {
    return (
        <div className='mb-10 mt-16 mx-16 bg-nav lg:p-8'>
            <div>
                <h1 className='text-sm blue font-bold text-center'>-- Contact Us --</h1>
                <p className='text-xl text-info font-bold text-center'>Let us handle your <br />
                    project, professionally.</p>
            </div>
            <div className='mt-10'>
                <div className='flex justify-center gap-8'>
                    <input type="text" placeholder="First Name" class="input input-bordered input-primary w-full max-w-xs" />
                    <input type="text" placeholder="Last Name" class="input input-bordered input-primary w-full max-w-xs" />
                </div>
                <div className='flex justify-center gap-8 mt-8'>
                    <input type="text" placeholder="Your Email" class="input input-bordered input-primary w-full max-w-xs" />
                    <input type="text" placeholder="Phone-Number" class="input input-bordered input-primary w-full max-w-xs" />
                </div>
                <div className='flex justify-center mt-8 '>
                    <textarea class="textarea textarea-primary wi h-36" placeholder="Your Message"></textarea>
                </div>
            </div>
        </div>
    );
};

export default Contact;