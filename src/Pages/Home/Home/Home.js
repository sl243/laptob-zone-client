import React from 'react';
import Categories from '../../Categories/Categories';
import ContactUs from '../../ContactUs/ContactUs';
import Gallery from '../../Gallery/Gallery';
import Slider from '../../Slider/Slider';

const Home = () => {
    return (
        <div className='mx-10'>
            <Slider></Slider>
            <Categories></Categories>
            <Gallery></Gallery>
            <ContactUs></ContactUs>
        </div>
    );
};

export default Home;