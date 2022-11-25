import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryProduct = () => {
    const categories = useLoaderData()
    const {categoryName} = categories;

    return (
        <div>
            <h1>product: {categoryName}</h1>
            {   
                
                categories?.map(p => <p key={p._id}>product</p>)
            }
        </div>
    );
};

export default CategoryProduct;