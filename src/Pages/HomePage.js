import React from 'react';
import Contact from './Contact';
import Design from './Design';
import Header from './Header';
import Services from './Services';
import Testimonials from './Testimonials';

const HomePage = () => {
    return (
        <div>
            <Header></Header>
            <Design></Design>
            <Services></Services>
            <Testimonials></Testimonials>
            <Contact></Contact>
        </div>
    );
};

export default HomePage;