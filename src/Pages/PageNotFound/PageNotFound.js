import React from 'react';
import errorimg from '../../images/img/page not found.png'

const PageNotFound = () => {
    return (
        <div className='mt-32'>
            <img
                className='rounded-xl w-3/4 mx-auto h-96 justify-center items-center'
                src={errorimg} alt=''
            ></img>
        </div>
    );
};

export default PageNotFound;