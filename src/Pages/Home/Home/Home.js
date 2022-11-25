import React from 'react';
import Categories from '../../Categories/Categories';
import Slider from '../../Slider/Slider';

const Home = () => {
    return (
        <div className='mx-10'>
            <Slider></Slider>
            <Categories></Categories>
        </div>
    );
};

export default Home;